import { Common, fbAd, fbAdsProperty } from './audience-network.common';

var frame = require("tns-core-modules/ui/frame");
import * as utils from "tns-core-modules/utils/utils";
import * as application from 'tns-core-modules/application';





declare const com: any;
declare const android: any;
let activity: any;
// let _this:any ;

function _getActivity() {
    if (activity === null || activity === undefined) {
        activity = application.android.foregroundActivity;
    }
    return activity;
};


export function initAds() {
    try {

        // console.log("ctx", _getActivity())
        com.facebook.ads.AudienceNetworkAds.initialize(_getActivity());
        console.log("AudienceNetworkAds initialized");

    } catch (error) {
        console.log("init error", error)
    }
};

function _getBannerType(size) {
    if (size == fbAd.AD_SIZE.STANDARD_BANNER) {
        return com.facebook.ads.AdSize.BANNER_HEIGHT_50;
    } else if (size == fbAd.AD_SIZE.LARGE_BANNER) {
        return com.facebook.ads.AdSize.BANNER_HEIGHT_90;
    } else if (size == fbAd.AD_SIZE.MEDIUM_RECTANGLE) {
        return com.facebook.ads.AdSize.RECTANGLE_HEIGHT_250;
    }
};
function _checkTesting(adUnit: string, testing: boolean) {
    if (testing) {
        return "IMG_16_9_APP_INSTALL#" + adUnit;
    } else {
        return adUnit
    }
}
function _merge(obj1, obj2) { // Our merge function
    var result: any = {}; // return result
    for (var i in obj1) {      // for every property in obj1
        if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
            result[i] = _merge(obj1[i], obj2[i]); // if it's an object, merge
        } else {
            result[i] = obj1[i]; // add it to result
        }
    }
    for (i in obj2) { // add the remaining properties from object 2
        if (i in result) { //conflict
            continue;
        }
        result[i] = obj2[i];
    }
    return result;
};
export function createBanner(arg) {
    return new Promise((resolve, reject) => {
        try {
            // always close a previous opened banner
            if (fbAd.adView !== null && fbAd.adView !== undefined) {
                var parent = fbAd.adView.getParent();
                if (parent !== null) {
                    parent.removeView(fbAd.adView);
                }
            }
            var settings = _merge(arg, fbAd.defaults);
            // var settings = fbAd.defaults;
            fbAd.adView = new com.facebook.ads.AdView(_getActivity(), _checkTesting(arg.androidBannerId, arg.testing), _getBannerType(arg.size));
            console.log(arg, settings)

            var density = utils.layout.getDisplayDensity(),
                top = settings.margins.top * density,
                bottom = settings.margins.bottom * density;
            var relativeLayoutParams = new android.widget.RelativeLayout.LayoutParams(
                android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
                android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

            if (bottom > -1) {
                relativeLayoutParams.bottomMargin = bottom;
                relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
                // relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_BOTTOM);
            } else {
                if (top > -1) {
                    relativeLayoutParams.topMargin = top;
                }
                relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
            }

            var adViewLayout = new android.widget.RelativeLayout(_getActivity());
            adViewLayout.addView(fbAd.adView, relativeLayoutParams);

            var relativeLayoutParamsOuter = new android.widget.RelativeLayout.LayoutParams(
                android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
                android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);

            // Wrapping it in a timeout makes sure that when this function is loaded from a Page.loaded event 'frame.topmost()' doesn't resolve to 'undefined'.
            // Also, in NativeScript 4+ it may be undefined anyway.. so using the appModule in that case.
            setTimeout(() => {
                var adFrame;
                if (!adFrame) {
                    adFrame = frame.topmost();
                }

                if (adFrame !== undefined) {
                    adFrame.currentPage &&
                        adFrame.currentPage.android &&
                        adFrame.currentPage.android.getParent() &&
                        adFrame.currentPage.android.getParent().addView(adViewLayout, relativeLayoutParamsOuter);
                } else {
                    application.android &&
                        application.android.foregroundActivity &&
                        application.android.foregroundActivity.getWindow() &&
                        application.android.foregroundActivity.getWindow().getDecorView() &&
                        application.android.foregroundActivity.getWindow().getDecorView().addView(adViewLayout, relativeLayoutParamsOuter);
                }
            }, 0);
            fbAd.adView.loadAd();

            resolve();
        } catch (ex) {
            console.log("Error in fbAd.createBanner: " + ex);
            reject(ex);
        }
    });
};

export function preloadInterstitial(arg) {
    return new Promise((resolve, reject) => {
        try {
            var settings = fbAd.defaults;
            // var settings = fbAd.merge(arg, fbAd.defaults);
            fbAd.interstitialView = new com.facebook.ads.InterstitialAd(_getActivity(), _checkTesting(arg.androidInterstitialId, arg.testing));
            // fbAd.interstitialView.setAdUnitId(settings.androidInterstitialId);

            // Fix for allowing multiple promises to be resolved.
            const _resolve = resolve;
            const _reject = reject;

            // Interstitial ads must be loaded before they can be shown, so adding a listener
            var InterstitialAdListener = new com.facebook.ads.InterstitialAdListener({
                onInterstitialDisplayed: (ad) => {
                    console.log("onInterstitialDisplayed");
                    _resolve({ type: "onInterstitialDisplayed", event: ad });
                },
                onInterstitialDismissed: (ad) => {
                    if (fbAd.interstitialView) {
                        fbAd.interstitialView.destroy();
                    }
                    arg.onAdClosed && arg.onAdClosed();
                },
                onAdLoaded: (ad) => {
                    console.log("Interstitial ad is loaded and ready to be displayed");
                    _resolve({ type: "onAdLoaded", event: ad });
                },
                onAdClicked: (ad) => {
                    console.log("onAdClicked");
                    arg.onAdClicked && arg.onAdClicked();
                    // _resolve({ type: "onAdClicked", event: ad });
                },
                onLoggingImpression: (ad) => {
                    console.log("onInterstitialDisplayed");
                    _resolve({ type: "onLoggingImpression", event: ad });
                },
                onError: (ad, adError) => {
                    console.log("onAdFailedToLoad: " + adError.getErrorMessage());
                    _reject(adError);
                }

            });

            fbAd.interstitialView.loadAd(
                fbAd.interstitialView.buildLoadAdConfig()
                    .withAdListener(InterstitialAdListener)
                    .build());
            // fbAd.interstitialView.setAdListener(new InterstitialAdListener());

            // var ad = fbAd._buildAdRequest(settings);
            // fbAd.interstitialView.loadAd(ad);
        } catch (ex) {
            console.log("Error in fbAd.preloadInterstitial: " + ex);
            reject(ex);
        }
    });
};

export function showInterstitial() {
    return new Promise((resolve, reject) => {
        try {
            if (fbAd.interstitialView) {
                fbAd.interstitialView.show();
                resolve();
            } else {
                reject("Please call 'preloadInterstitial' first.");
            }
        } catch (ex) {
            console.log("Error in fbAd.showInterstitial: " + ex);
            reject(ex);
        }
    });
};

export function preloadRewardedVideoAd(arg) {
    return new Promise((resolve, reject) => {
        try {
            var settings = fbAd.defaults;
            console.log("args", arg)
            // var settings = fbAd.merge(arg, fbAd.defaults);
            fbAd.rewardVideoView = new com.facebook.ads.RewardedVideoAd(_getActivity(), _checkTesting(arg.androidAdPlacementId, arg.testing));

            const _resolve = resolve;
            const _reject = reject;
            // var that = this;
            // Interstitial ads must be loaded before they can be shown, so adding a listener
            var rewardedVideoAdListener = new com.facebook.ads.RewardedVideoAdListener({
                onRewardedVideoCompleted: (ad) => {
                    console.log("onRewardedVideoCompleted");
                    rewardedVideoCallbacks.onRewardedVideoCompleted();
                    // _resolve();
                },
                onRewardedVideoClosed: (ad) => {
                    if (fbAd.rewardVideoView) {
                        fbAd.rewardVideoView = null;
                    }
        // console.log("_this", _this)
                    
                    // console.log("onRewardedVideoAdClosed call",rewardedVideoCallbacks.onRewardedVideoAdClosed)
                    // console.log("onRewardedVideoAdClosed call",rewardedVideoCallbacks.onRewardedVideoAdClosed())
                    rewardedVideoCallbacks.onRewardedVideoAdClosed();

                },
                onAdLoaded: (ad) => {
                    console.log("Rewarded ad is loaded and ready to be displayed");
                    rewardedVideoCallbacks.onRewardedVideoAdLoaded();
                    _resolve();
                },
                onAdClicked: (ad) => {
                    console.log("onAdClicked");
                    rewardedVideoCallbacks.onRewardedVideoAdOpened();
                    // that.resolve();
                },
                onLoggingImpression: (ad) => {
                    console.log("onLoggingImpression");
                    // that.resolve();
                },
                onError: function (ad, adError) {
                    console.log("onVideoAdFailedToLoad: " + adError.getErrorMessage());

                    _reject(adError);
                }

            });

            fbAd.rewardVideoView.loadAd(
                fbAd.rewardVideoView.buildLoadAdConfig()
                    .withAdListener(rewardedVideoAdListener)
                    .build());
            // fbAd.interstitialView.setAdListener(new InterstitialAdListener());

            // var ad = fbAd._buildAdRequest(settings);
            // fbAd.interstitialView.loadAd(ad);
        } catch (ex) {
            console.log("Error in fbAd.preloadInterstitial: " + ex);
            reject(ex);
        }
    });
};

export function showRewardedVideoAd(arg) {

    if (arg.onRewardedVideoAdLeftApplication) {
        rewardedVideoCallbacks.onRewardedVideoAdLeftApplication = arg.onRewardedVideoAdLeftApplication;
    }
    if (arg.onRewardedVideoAdClosed) {
        rewardedVideoCallbacks.onRewardedVideoAdClosed = arg.onRewardedVideoAdClosed;
    }
    if (arg.onRewardedVideoAdOpened) {
        rewardedVideoCallbacks.onRewardedVideoAdOpened = arg.onRewardedVideoAdOpened;
    }
    if (arg.onRewardedVideoStarted) {
        rewardedVideoCallbacks.onRewardedVideoStarted = arg.onRewardedVideoStarted;
    }
    if (arg.onRewardedVideoCompleted) {
        rewardedVideoCallbacks.onRewardedVideoCompleted = arg.onRewardedVideoCompleted;
    }
    return new Promise((resolve, reject) => {
        try {
            if (fbAd.rewardVideoView) {
                fbAd.rewardVideoView.show();
                resolve();
            } else {
                reject("Please call 'preloadReward' first.");
            }
        } catch (ex) {
            console.log("Error in fbAd.preloadReward: " + ex);
            reject(ex);
        }
    });
};

let rewardedVideoCallbacks = {

    onRewardedVideoAdLeftApplication: () => {
    },
    onRewardedVideoAdClosed: () => {
    },
    onRewardedVideoAdOpened: () => {
    },
    onRewardedVideoStarted: () => {
    },
    onRewardedVideoCompleted: () => {
    },
    onRewardedVideoAdLoaded: () => {
    },
    onRewardedVideoAdFailedToLoad: () => {
    },
};

// export class AudienceNetwork {
//     // fbAds
//     _getActivity() {
//         if (this.activity === null || this.activity === undefined) {
//             this.activity = application.android.foregroundActivity;
//         }
//         return this.activity;
//     };

//     initAds() {
//         try {
//             console.log("ctx", this._getActivity())
//             com.facebook.ads.AudienceNetworkAds.initialize(this._getActivity());

//         } catch (error) {
//             console.log("init error", error)
//         }
//     };

//     _getBannerType(size) {
//         if (size == fbAd.AD_SIZE.STANDARD_BANNER) {
//             return com.facebook.ads.AdSize.BANNER_HEIGHT_50;
//         } else if (size == fbAd.AD_SIZE.LARGE_BANNER) {
//             return com.facebook.ads.AdSize.BANNER_HEIGHT_90;
//         } else if (size == fbAd.AD_SIZE.MEDIUM_RECTANGLE) {
//             return com.facebook.ads.AdSize.RECTANGLE_HEIGHT_250;
//         }
//     };
//     _checkTesting(adUnit: string, testing: boolean) {
//         if (testing) {
//             return "IMG_16_9_APP_INSTALL#" + adUnit;
//         } else {
//             return adUnit
//         }
//     }
//     _merge(obj1, obj2) { // Our merge function
//         var result: any = {}; // return result
//         for (var i in obj1) {      // for every property in obj1
//             if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
//                 result[i] = this._merge(obj1[i], obj2[i]); // if it's an object, merge
//             } else {
//                 result[i] = obj1[i]; // add it to result
//             }
//         }
//         for (i in obj2) { // add the remaining properties from object 2
//             if (i in result) { //conflict
//                 continue;
//             }
//             result[i] = obj2[i];
//         }
//         return result;
//     };
//     createBanner(arg) {
//         return new Promise((resolve, reject) => {
//             try {
//                 // always close a previous opened banner
//                 if (fbAd.adView !== null && fbAd.adView !== undefined) {
//                     var parent = fbAd.adView.getParent();
//                     if (parent !== null) {
//                         parent.removeView(fbAd.adView);
//                     }
//                 }
//                 var settings = this._merge(arg, fbAd.defaults);
//                 // var settings = fbAd.defaults;
//                 fbAd.adView = new com.facebook.ads.AdView(this._getActivity(), this._checkTesting(arg.androidBannerId, arg.testing), this._getBannerType(arg.size));
//                 console.log(arg, settings)

//                 var density = utils.layout.getDisplayDensity(),
//                     top = settings.margins.top * density,
//                     bottom = settings.margins.bottom * density;
//                 var relativeLayoutParams = new android.widget.RelativeLayout.LayoutParams(
//                     android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
//                     android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

//                 if (bottom > -1) {
//                     relativeLayoutParams.bottomMargin = bottom;
//                     relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
//                     // relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_BOTTOM);
//                 } else {
//                     if (top > -1) {
//                         relativeLayoutParams.topMargin = top;
//                     }
//                     relativeLayoutParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
//                 }

//                 var adViewLayout = new android.widget.RelativeLayout(this._getActivity());
//                 adViewLayout.addView(fbAd.adView, relativeLayoutParams);

//                 var relativeLayoutParamsOuter = new android.widget.RelativeLayout.LayoutParams(
//                     android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
//                     android.widget.RelativeLayout.LayoutParams.MATCH_PARENT);

//                 // Wrapping it in a timeout makes sure that when this function is loaded from a Page.loaded event 'frame.topmost()' doesn't resolve to 'undefined'.
//                 // Also, in NativeScript 4+ it may be undefined anyway.. so using the appModule in that case.
//                 setTimeout(() => {
//                     var adFrame;
//                     if (!adFrame) {
//                         adFrame = frame.topmost();
//                     }

//                     if (adFrame !== undefined) {
//                         adFrame.currentPage &&
//                             adFrame.currentPage.android &&
//                             adFrame.currentPage.android.getParent() &&
//                             adFrame.currentPage.android.getParent().addView(adViewLayout, relativeLayoutParamsOuter);
//                     } else {
//                         application.android &&
//                             application.android.foregroundActivity &&
//                             application.android.foregroundActivity.getWindow() &&
//                             application.android.foregroundActivity.getWindow().getDecorView() &&
//                             application.android.foregroundActivity.getWindow().getDecorView().addView(adViewLayout, relativeLayoutParamsOuter);
//                     }
//                 }, 0);
//                 fbAd.adView.loadAd();

//                 resolve();
//             } catch (ex) {
//                 console.log("Error in fbAd.createBanner: " + ex);
//                 reject(ex);
//             }
//         });
//     };

//     preloadInterstitial(arg) {
//         return new Promise((resolve, reject) => {
//             try {
//                 var settings = fbAd.defaults;
//                 // var settings = fbAd.merge(arg, fbAd.defaults);
//                 fbAd.interstitialView = new com.facebook.ads.InterstitialAd(this._getActivity(), this._checkTesting(arg.androidInterstitialId, arg.testing));
//                 // fbAd.interstitialView.setAdUnitId(settings.androidInterstitialId);

//                 // Fix for allowing multiple promises to be resolved.
//                 const _resolve = resolve;
//                 const _reject = reject;

//                 // Interstitial ads must be loaded before they can be shown, so adding a listener
//                 var InterstitialAdListener = new com.facebook.ads.InterstitialAdListener({
//                     onInterstitialDisplayed: (ad) => {
//                         console.log("onInterstitialDisplayed");
//                         _resolve({ type: "onInterstitialDisplayed", event: ad });
//                     },
//                     onInterstitialDismissed: (ad) => {
//                         if (fbAd.interstitialView) {
//                             fbAd.interstitialView.destroy();
//                         }
//                         arg.onAdClosed && arg.onAdClosed();
//                     },
//                     onAdLoaded: (ad) => {
//                         console.log("Interstitial ad is loaded and ready to be displayed");
//                         _resolve({ type: "onAdLoaded", event: ad });
//                     },
//                     onAdClicked: (ad) => {
//                         console.log("onAdClicked");
//                         arg.onAdClicked && arg.onAdClicked();
//                         // _resolve({ type: "onAdClicked", event: ad });
//                     },
//                     onLoggingImpression: (ad) => {
//                         console.log("onInterstitialDisplayed");
//                         _resolve({ type: "onLoggingImpression", event: ad });
//                     },
//                     onError: (ad, adError) => {
//                         console.log("onAdFailedToLoad: " + adError.getErrorMessage());
//                         _reject(adError);
//                     }

//                 });

//                 fbAd.interstitialView.loadAd(
//                     fbAd.interstitialView.buildLoadAdConfig()
//                         .withAdListener(InterstitialAdListener)
//                         .build());
//                 // fbAd.interstitialView.setAdListener(new InterstitialAdListener());

//                 // var ad = fbAd._buildAdRequest(settings);
//                 // fbAd.interstitialView.loadAd(ad);
//             } catch (ex) {
//                 console.log("Error in fbAd.preloadInterstitial: " + ex);
//                 reject(ex);
//             }
//         });
//     };

//     showInterstitial() {
//         return new Promise((resolve, reject) => {
//             try {
//                 if (fbAd.interstitialView) {
//                     fbAd.interstitialView.show();
//                     resolve();
//                 } else {
//                     reject("Please call 'preloadInterstitial' first.");
//                 }
//             } catch (ex) {
//                 console.log("Error in fbAd.showInterstitial: " + ex);
//                 reject(ex);
//             }
//         });
//     };

//     preloadRewardedVideoAd(arg) {
//         return new Promise((resolve, reject) => {
//             try {
//                 var settings = fbAd.defaults;
//                 console.log("args", arg)
//                 // var settings = fbAd.merge(arg, fbAd.defaults);
//                 fbAd.rewardVideoView = new com.facebook.ads.RewardedVideoAd(this._getActivity(), this._checkTesting(arg.androidAdPlacementId, arg.testing));

//                 const _resolve = resolve;
//                 const _reject = reject;
//                 var that = this;
//                 // Interstitial ads must be loaded before they can be shown, so adding a listener
//                 var rewardedVideoAdListener = new com.facebook.ads.RewardedVideoAdListener({
//                     onRewardedVideoCompleted: (ad) => {
//                         console.log("onRewardedVideoCompleted");
//                         that.rewardedVideoCallbacks.onRewardedVideoCompleted();
//                         // _resolve();
//                     },
//                     onRewardedVideoClosed: (ad) => {
//                         if (fbAd.rewardVideoView) {
//                             fbAd.rewardVideoView = null;
//                         }
//                         that.rewardedVideoCallbacks.onRewardedVideoAdClosed();

//                     },
//                     onAdLoaded: (ad) => {
//                         console.log("Rewarded ad is loaded and ready to be displayed");
//                         that.rewardedVideoCallbacks.onRewardedVideoAdLoaded();
//                         _resolve();
//                     },
//                     onAdClicked: (ad) => {
//                         console.log("onAdClicked");
//                         that.rewardedVideoCallbacks.onRewardedVideoAdOpened();
//                         // that.resolve();
//                     },
//                     onLoggingImpression: (ad) => {
//                         console.log("onLoggingImpression");
//                         // that.resolve();
//                     },
//                     onError: function (ad, adError) {
//                         console.log("onVideoAdFailedToLoad: " + adError.getErrorMessage());

//                         _reject(adError);
//                     }

//                 });

//                 fbAd.rewardVideoView.loadAd(
//                     fbAd.rewardVideoView.buildLoadAdConfig()
//                         .withAdListener(rewardedVideoAdListener)
//                         .build());
//                 // fbAd.interstitialView.setAdListener(new InterstitialAdListener());

//                 // var ad = fbAd._buildAdRequest(settings);
//                 // fbAd.interstitialView.loadAd(ad);
//             } catch (ex) {
//                 console.log("Error in fbAd.preloadInterstitial: " + ex);
//                 reject(ex);
//             }
//         });
//     };

//     showRewardedVideoAd(arg) {

//           if (arg.onRewardedVideoAdLeftApplication) {
//             this.rewardedVideoCallbacks.onRewardedVideoAdLeftApplication = arg.onRewardedVideoAdLeftApplication;
//           }
//           if (arg.onRewardedVideoAdClosed) {
//             this.rewardedVideoCallbacks.onRewardedVideoAdClosed = arg.onRewardedVideoAdClosed;
//           }
//           if (arg.onRewardedVideoAdOpened) {
//             this.rewardedVideoCallbacks.onRewardedVideoAdOpened = arg.onRewardedVideoAdOpened;
//           }
//           if (arg.onRewardedVideoStarted) {
//             this.rewardedVideoCallbacks.onRewardedVideoStarted = arg.onRewardedVideoStarted;
//           }
//           if (arg.onRewardedVideoCompleted) {
//             this.rewardedVideoCallbacks.onRewardedVideoCompleted = arg.onRewardedVideoCompleted;
//           }
//         return new Promise((resolve, reject) => {
//             try {
//                 if (fbAd.rewardVideoView) {
//                     fbAd.rewardVideoView.show();
//                     resolve();
//                 } else {
//                     reject("Please call 'preloadReward' first.");
//                 }
//             } catch (ex) {
//                 console.log("Error in fbAd.preloadReward: " + ex);
//                 reject(ex);
//             }
//         });
//     };

//     rewardedVideoCallbacks = {

//         onRewardedVideoAdLeftApplication: () => {
//         },
//         onRewardedVideoAdClosed: () => {
//         },
//         onRewardedVideoAdOpened: () => {
//         },
//         onRewardedVideoStarted: () => {
//         },
//         onRewardedVideoCompleted: () => {
//         },
//         onRewardedVideoAdLoaded: () => {
//         },
//         onRewardedVideoAdFailedToLoad: () => {
//         },
//     };

// }

export const AD_SIZE = {
    STANDARD_BANNER: "STANDARD_BANNER",
    LARGE_BANNER: "LARGE_BANNER",
    MEDIUM_RECTANGLE: "MEDIUM_RECTANGLE",
}
