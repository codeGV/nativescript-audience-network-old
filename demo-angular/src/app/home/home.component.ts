import { Component, OnInit } from "@angular/core";
import * as AudienceNetwork from 'nativescript-audience-network';

 var _this;
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    // audienceNetwork: AudienceNetwork
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        _this = this;
        console.log("_this",_this)
        // Init your component properties here.
        // this.audienceNetwork = new AudienceNetwork();
        // this.onRewardedVideoAdClosed()
    }

    adsInit() {
        _this = this
        AudienceNetwork.initAds(_this)
    }

    banner() {
        let option: AudienceNetwork.CreateBannerOptions = {
            "androidBannerId": "509332646624264_509334053290790",
            "margins": {
                "bottom": 10
            },
            "testing": true,
            "size": AudienceNetwork.AD_SIZE.STANDARD_BANNER,

        }
        AudienceNetwork.createBanner(option).then(() => {
            console.log("banner created");
        }).catch(error => {
            console.log("error banner", error)
        })
    }

    full() {
        let option: AudienceNetwork.CreateInterstitialOptions = {
            "androidInterstitialId": "509332646624264_509352576622271",
            "testing": true,
            "onAdClosed": this.onInterstitialClosed,
            "onAdClicked": this.onInterstitialClicked

        }
        AudienceNetwork.preloadInterstitial(option).then((value: any) => {
            console.log("Interstitial", value)
        }).catch((error) => {
            console.log("error", error.get)
        })
    }
    show() {
        AudienceNetwork.showInterstitial().then(() => {
            console.log("interstial showing")
        }).catch(error => {
            console.log("error in showing", error)
        })
    }
    onInterstitialClosed() {
        console.log("ad closed")
    };
    onInterstitialClicked() {
        console.log("ad clicked")
    }

    videoCreate() {
        let option: AudienceNetwork.CreateRewardedOptions = {
            androidAdPlacementId: "509332646624264_509363036621225"
        }
        AudienceNetwork.preloadRewardedVideoAd(option)
    }
    videoShow() {
        let option: AudienceNetwork.ShowRewardedOptions = {
            "onRewardedVideoAdClosed": this.onRewardedVideoAdClosed.bind(this),
            "onRewardedVideoAdOpened": this.onRewardedVideoAdOpened.bind(this),
            "onRewardedVideoCompleted": this.onRewardedVideoCompleted.bind(this),

        }
        AudienceNetwork.showRewardedVideoAd(option)

    }
    onRewardedVideoAdClosed() {

        // this.videoCreate()
    }

    onRewardedVideoAdOpened() {
        console.log("reward clicked")
    }
    onRewardedVideoCompleted() {
        console.log("reward complete")
    }
    
}
