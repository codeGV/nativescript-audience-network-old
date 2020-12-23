/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module facebook {
		export module ads {
			export abstract class AbstractAdListener implements com.facebook.ads.AdListener, com.facebook.ads.InterstitialAdListener {
				public static class: java.lang.Class<com.facebook.ads.AbstractAdListener>;
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
				public onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
				public constructor();
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class Ad {
				public static class: java.lang.Class<com.facebook.ads.Ad>;
				/**
				 * Constructs a new instance of the com.facebook.ads.Ad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					loadAd(): void;
					isAdInvalidated(): boolean;
					destroy(): void;
					getPlacementId(): string;
					setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				});
				public constructor();
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public loadAd(): void;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public getPlacementId(): string;
			}
			export module Ad {
				export class LoadAdConfig {
					public static class: java.lang.Class<com.facebook.ads.Ad.LoadAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.Ad$LoadAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LoadConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.Ad.LoadConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.Ad$LoadConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
						build(): com.facebook.ads.Ad.LoadAdConfig;
					});
					public constructor();
					public build(): com.facebook.ads.Ad.LoadAdConfig;
					public withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdError {
				public static class: java.lang.Class<com.facebook.ads.AdError>;
				public static NETWORK_ERROR_CODE: number;
				public static NO_FILL_ERROR_CODE: number;
				public static LOAD_TOO_FREQUENTLY_ERROR_CODE: number;
				public static SERVER_ERROR_CODE: number;
				public static INTERNAL_ERROR_CODE: number;
				public static CACHE_ERROR_CODE: number;
				public static INTERNAL_ERROR_2003: number;
				public static INTERNAL_ERROR_2004: number;
				public static INTERNAL_ERROR_2006: number;
				public static REMOTE_ADS_SERVICE_ERROR: number;
				public static INTERSTITIAL_AD_TIMEOUT: number;
				public static BROKEN_MEDIA_ERROR_CODE: number;
				public static MEDIATION_ERROR_CODE: number;
				public static MEDIAVIEW_MISSING_ERROR_CODE: number;
				public static ICONVIEW_MISSING_ERROR_CODE: number;
				public static AD_ASSETS_UNSUPPORTED_TYPE_ERROR_CODE: number;
				public static SHOW_CALLED_BEFORE_LOAD_ERROR_CODE: number;
				public static LOAD_CALLED_WHILE_SHOWING_AD: number;
				public static CLEAR_TEXT_SUPPORT_NOT_ALLOWED: number;
				public static INCORRECT_STATE_ERROR: number;
				public static MISSING_DEPENDENCIES_ERROR: number;
				public static API_NOT_SUPPORTED: number;
				public static NATIVE_AD_IS_NOT_LOADED: number;
				public static AD_PRESENTATION_ERROR_CODE: number;
				public static NETWORK_ERROR: com.facebook.ads.AdError;
				public static NO_FILL: com.facebook.ads.AdError;
				public static LOAD_TOO_FREQUENTLY: com.facebook.ads.AdError;
				public static SERVER_ERROR: com.facebook.ads.AdError;
				public static INTERNAL_ERROR: com.facebook.ads.AdError;
				public static CACHE_ERROR: com.facebook.ads.AdError;
				public static AD_PRESENTATION_ERROR: com.facebook.ads.AdError;
				public static MEDIATION_ERROR: com.facebook.ads.AdError;
				public static BROKEN_MEDIA_ERROR: com.facebook.ads.AdError;
				public static AD_ASSETS_UNSUPPORTED_TYPE_ERROR: com.facebook.ads.AdError;
				public static SHOW_CALLED_BEFORE_LOAD_ERROR: com.facebook.ads.AdError;
				public getErrorMessage(): string;
				public constructor(param0: number, param1: string);
				public static internalError(param0: number): com.facebook.ads.AdError;
				public getErrorCode(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdExperienceType {
				public static class: java.lang.Class<com.facebook.ads.AdExperienceType>;
				public static AD_EXPERIENCE_TYPE_REWARDED: com.facebook.ads.AdExperienceType;
				public static AD_EXPERIENCE_TYPE_REWARDED_INTERSTITIAL: com.facebook.ads.AdExperienceType;
				public static AD_EXPERIENCE_TYPE_INTERSTITIAL: com.facebook.ads.AdExperienceType;
				public getAdExperienceType(): string;
				public static valueOf(param0: string): com.facebook.ads.AdExperienceType;
				public static values(): native.Array<com.facebook.ads.AdExperienceType>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdListener {
				public static class: java.lang.Class<com.facebook.ads.AdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.AdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdOptionsView extends com.facebook.ads.internal.api.AdComponentFrameLayout {
				public static class: java.lang.Class<com.facebook.ads.AdOptionsView>;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public setIconColor(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout, param3: com.facebook.ads.AdOptionsView.Orientation, param4: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context);
				public setSingleIcon(param0: boolean): void;
				public onWindowFocusChanged(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setIconSizeDp(param0: number): void;
			}
			export module AdOptionsView {
				export class Orientation {
					public static class: java.lang.Class<com.facebook.ads.AdOptionsView.Orientation>;
					public static HORIZONTAL: com.facebook.ads.AdOptionsView.Orientation;
					public static VERTICAL: com.facebook.ads.AdOptionsView.Orientation;
					public static valueOf(param0: string): com.facebook.ads.AdOptionsView.Orientation;
					public static values(): native.Array<com.facebook.ads.AdOptionsView.Orientation>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdSDKNotificationListener {
				public static class: java.lang.Class<com.facebook.ads.AdSDKNotificationListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.AdSDKNotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAdEvent(param0: string, param1: globalAndroid.os.Bundle): void;
				});
				public constructor();
				public static ENCRYPTED_CPM_KEY: string;
				public static IMPRESSION_EVENT: string;
				public onAdEvent(param0: string, param1: globalAndroid.os.Bundle): void;
			}
			export module AdSDKNotificationListener {
				export class SDKEventKey {
					public static class: java.lang.Class<com.facebook.ads.AdSDKNotificationListener.SDKEventKey>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AdSDKNotificationListener$SDKEventKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class SDKEventType {
					public static class: java.lang.Class<com.facebook.ads.AdSDKNotificationListener.SDKEventType>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AdSDKNotificationListener$SDKEventType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdSDKNotificationManager {
				public static class: java.lang.Class<com.facebook.ads.AdSDKNotificationManager>;
				public static removeSDKNotificationListener(param0: com.facebook.ads.AdSDKNotificationListener): void;
				public static addSDKNotificationListener(param0: com.facebook.ads.AdSDKNotificationListener): void;
				public static getNotificationListeners(): java.util.List<com.facebook.ads.AdSDKNotificationListener>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdSettings {
				public static class: java.lang.Class<com.facebook.ads.AdSettings>;
				public static DEBUG: boolean;
				public static addTestDevice(param0: string): void;
				public static isTestMode(param0: globalAndroid.content.Context): boolean;
				public static getMediationService(): string;
				public static setIntegrationErrorMode(param0: com.facebook.ads.AdSettings.IntegrationErrorMode): void;
				public static setVisibleAnimation(param0: boolean): void;
				public static clearTestDevices(): void;
				public static setVideoAutoplayOnMobile(param0: boolean): void;
				public static setMediationService(param0: string): void;
				public static isVideoAutoplay(): boolean;
				public static setTestAdType(param0: com.facebook.ads.AdSettings.TestAdType): void;
				public static addTestDevices(param0: java.util.Collection<string>): void;
				public constructor();
				public static setTestMode(param0: boolean): void;
				public static setDataProcessingOptions(param0: native.Array<string>): void;
				public static turnOnSDKDebugger(param0: globalAndroid.content.Context): void;
				public static getUrlPrefix(): string;
				public static setVideoAutoplay(param0: boolean): void;
				public static isVideoAutoplayOnMobile(): boolean;
				public static setDebugBuild(param0: boolean): void;
				public static setMixedAudience(param0: boolean): void;
				public static setDataProcessingOptions(param0: native.Array<string>, param1: number, param2: number): void;
				public static getTestAdType(): com.facebook.ads.AdSettings.TestAdType;
				public static setUrlPrefix(param0: string): void;
				public static isMixedAudience(): boolean;
			}
			export module AdSettings {
				export class IntegrationErrorMode {
					public static class: java.lang.Class<com.facebook.ads.AdSettings.IntegrationErrorMode>;
					public static INTEGRATION_ERROR_CRASH_DEBUG_MODE: com.facebook.ads.AdSettings.IntegrationErrorMode;
					public static INTEGRATION_ERROR_CALLBACK_MODE: com.facebook.ads.AdSettings.IntegrationErrorMode;
					public static serialVersionUID: number;
					public static values(): native.Array<com.facebook.ads.AdSettings.IntegrationErrorMode>;
					public static valueOf(param0: string): com.facebook.ads.AdSettings.IntegrationErrorMode;
				}
				export class TestAdType extends java.io.Serializable {
					public static class: java.lang.Class<com.facebook.ads.AdSettings.TestAdType>;
					public static DEFAULT: com.facebook.ads.AdSettings.TestAdType;
					public static IMG_16_9_APP_INSTALL: com.facebook.ads.AdSettings.TestAdType;
					public static IMG_16_9_LINK: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_16_9_46S_APP_INSTALL: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_16_9_46S_LINK: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_16_9_15S_APP_INSTALL: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_16_9_15S_LINK: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_9_16_39S_APP_INSTALL: com.facebook.ads.AdSettings.TestAdType;
					public static VIDEO_HD_9_16_39S_LINK: com.facebook.ads.AdSettings.TestAdType;
					public static CAROUSEL_IMG_SQUARE_APP_INSTALL: com.facebook.ads.AdSettings.TestAdType;
					public static CAROUSEL_IMG_SQUARE_LINK: com.facebook.ads.AdSettings.TestAdType;
					public static PLAYABLE: com.facebook.ads.AdSettings.TestAdType;
					public static serialVersionUID: number;
					public static valueOf(param0: string): com.facebook.ads.AdSettings.TestAdType;
					public getHumanReadable(): string;
					public getAdTypeString(): string;
					public static values(): native.Array<com.facebook.ads.AdSettings.TestAdType>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdSize {
				public static class: java.lang.Class<com.facebook.ads.AdSize>;
				public static BANNER_320_50: com.facebook.ads.AdSize;
				public static INTERSTITIAL: com.facebook.ads.AdSize;
				public static BANNER_HEIGHT_50: com.facebook.ads.AdSize;
				public static BANNER_HEIGHT_90: com.facebook.ads.AdSize;
				public static RECTANGLE_HEIGHT_250: com.facebook.ads.AdSize;
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public hashCode(): number;
				public static fromWidthAndHeight(param0: number, param1: number): com.facebook.ads.AdSize;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AdView implements com.facebook.ads.Ad {
				public static class: java.lang.Class<com.facebook.ads.AdView>;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public buildLoadAdConfig(): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public loadAd(): void;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public getPlacementId(): string;
				public loadAd(param0: com.facebook.ads.AdView.AdViewLoadConfig): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.AdSize);
			}
			export module AdView {
				export class AdViewLoadConfig extends com.facebook.ads.Ad.LoadAdConfig {
					public static class: java.lang.Class<com.facebook.ads.AdView.AdViewLoadConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AdView$AdViewLoadConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class AdViewLoadConfigBuilder extends com.facebook.ads.Ad.LoadConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.AdView.AdViewLoadConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AdView$AdViewLoadConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withAdListener(param0: com.facebook.ads.AdListener): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
						withBid(param0: string): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
						build(): com.facebook.ads.AdView.AdViewLoadConfig;
						withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
						build(): com.facebook.ads.Ad.LoadAdConfig;
					});
					public constructor();
					public build(): com.facebook.ads.Ad.LoadAdConfig;
					public withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
					public build(): com.facebook.ads.AdView.AdViewLoadConfig;
					public withAdListener(param0: com.facebook.ads.AdListener): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
					public withBid(param0: string): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AudienceNetworkActivity {
				public static class: java.lang.Class<com.facebook.ads.AudienceNetworkActivity>;
				public onBackPressed(): void;
				public onResume(): void;
				public onPause(): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public finish(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onStop(): void;
				public onDestroy(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AudienceNetworkAds {
				public static class: java.lang.Class<com.facebook.ads.AudienceNetworkAds>;
				public static TAG: string;
				public static isInitialized(param0: globalAndroid.content.Context): boolean;
				/** @deprecated */
				public static getAdFormatForPlacement(param0: globalAndroid.content.Context, param1: string): number;
				public static initialize(param0: globalAndroid.content.Context): void;
				public static buildInitSettings(param0: globalAndroid.content.Context): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
			}
			export module AudienceNetworkAds {
				export class AdFormat {
					public static class: java.lang.Class<com.facebook.ads.AudienceNetworkAds.AdFormat>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AudienceNetworkAds$AdFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static REWARDED_VIDEO: number;
					public static UNKNOWN: number;
					public static NATIVE_BANNER: number;
					public static NATIVE: number;
					public static BANNER: number;
					public static INTERSTITIAL: number;
				}
				export class InitListener {
					public static class: java.lang.Class<com.facebook.ads.AudienceNetworkAds.InitListener>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AudienceNetworkAds$InitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInitialized(param0: com.facebook.ads.AudienceNetworkAds.InitResult): void;
					});
					public constructor();
					public onInitialized(param0: com.facebook.ads.AudienceNetworkAds.InitResult): void;
				}
				export class InitResult {
					public static class: java.lang.Class<com.facebook.ads.AudienceNetworkAds.InitResult>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AudienceNetworkAds$InitResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isSuccess(): boolean;
						getMessage(): string;
					});
					public constructor();
					public getMessage(): string;
					public isSuccess(): boolean;
				}
				export class InitSettingsBuilder {
					public static class: java.lang.Class<com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.AudienceNetworkAds$InitSettingsBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withPlacementIds(param0: java.util.List<string>): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
						withMediationService(param0: string): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
						withInitListener(param0: com.facebook.ads.AudienceNetworkAds.InitListener): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
						initialize(): void;
					});
					public constructor();
					public withMediationService(param0: string): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
					public withInitListener(param0: com.facebook.ads.AudienceNetworkAds.InitListener): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
					public withPlacementIds(param0: java.util.List<string>): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
					public initialize(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class AudienceNetworkContentProvider {
				public static class: java.lang.Class<com.facebook.ads.AudienceNetworkContentProvider>;
				public getType(param0: globalAndroid.net.Uri): string;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class BidderTokenProvider {
				public static class: java.lang.Class<com.facebook.ads.BidderTokenProvider>;
				public static getBidderToken(param0: globalAndroid.content.Context): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.ads.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class CacheFlag {
				public static class: java.lang.Class<com.facebook.ads.CacheFlag>;
				public static NONE: com.facebook.ads.CacheFlag;
				public static ICON: com.facebook.ads.CacheFlag;
				public static IMAGE: com.facebook.ads.CacheFlag;
				public static VIDEO: com.facebook.ads.CacheFlag;
				public static ALL: java.util.EnumSet<com.facebook.ads.CacheFlag>;
				public static valueOf(param0: string): com.facebook.ads.CacheFlag;
				public static values(): native.Array<com.facebook.ads.CacheFlag>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class DefaultMediaViewVideoRenderer extends com.facebook.ads.MediaViewVideoRenderer {
				public static class: java.lang.Class<com.facebook.ads.DefaultMediaViewVideoRenderer>;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onWindowFocusChanged(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onPrepared(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class ExtraHints {
				public static class: java.lang.Class<com.facebook.ads.ExtraHints>;
				public getMediationData(): string;
				public getHints(): string;
			}
			export module ExtraHints {
				export class Builder {
					public static class: java.lang.Class<com.facebook.ads.ExtraHints.Builder>;
					public constructor();
					public mediationData(param0: string): com.facebook.ads.ExtraHints.Builder;
					public build(): com.facebook.ads.ExtraHints;
					/** @deprecated */
					public keywords(param0: java.util.List<com.facebook.ads.ExtraHints.Keyword>): com.facebook.ads.ExtraHints.Builder;
					public contentUrl(param0: string): com.facebook.ads.ExtraHints.Builder;
					public extraData(param0: string): com.facebook.ads.ExtraHints.Builder;
				}
				export class HintType {
					public static class: java.lang.Class<com.facebook.ads.ExtraHints.HintType>;
					public static KEYWORDS: com.facebook.ads.ExtraHints.HintType;
					public static CONTENT_URL: com.facebook.ads.ExtraHints.HintType;
					public static EXTRA_DATA: com.facebook.ads.ExtraHints.HintType;
					public static valueOf(param0: string): com.facebook.ads.ExtraHints.HintType;
					public static values(): native.Array<com.facebook.ads.ExtraHints.HintType>;
				}
				export class Keyword {
					public static class: java.lang.Class<com.facebook.ads.ExtraHints.Keyword>;
					public static ACCESSORIES: com.facebook.ads.ExtraHints.Keyword;
					public static ART_HISTORY: com.facebook.ads.ExtraHints.Keyword;
					public static AUTOMOTIVE: com.facebook.ads.ExtraHints.Keyword;
					public static BEAUTY: com.facebook.ads.ExtraHints.Keyword;
					public static BIOLOGY: com.facebook.ads.ExtraHints.Keyword;
					public static BOARD_GAMES: com.facebook.ads.ExtraHints.Keyword;
					public static BUSINESS_SOFTWARE: com.facebook.ads.ExtraHints.Keyword;
					public static BUYING_SELLING_HOMES: com.facebook.ads.ExtraHints.Keyword;
					public static CATS: com.facebook.ads.ExtraHints.Keyword;
					public static CELEBRITIES: com.facebook.ads.ExtraHints.Keyword;
					public static CLOTHING: com.facebook.ads.ExtraHints.Keyword;
					public static COMIC_BOOKS: com.facebook.ads.ExtraHints.Keyword;
					public static DESKTOP_VIDEO: com.facebook.ads.ExtraHints.Keyword;
					public static DOGS: com.facebook.ads.ExtraHints.Keyword;
					public static EDUCATION: com.facebook.ads.ExtraHints.Keyword;
					public static EMAIL: com.facebook.ads.ExtraHints.Keyword;
					public static ENTERTAINMENT: com.facebook.ads.ExtraHints.Keyword;
					public static FAMILY_PARENTING: com.facebook.ads.ExtraHints.Keyword;
					public static FASHION: com.facebook.ads.ExtraHints.Keyword;
					public static FINE_ART: com.facebook.ads.ExtraHints.Keyword;
					public static FOOD_DRINK: com.facebook.ads.ExtraHints.Keyword;
					public static FRENCH_CUISINE: com.facebook.ads.ExtraHints.Keyword;
					public static GOVERNMENT: com.facebook.ads.ExtraHints.Keyword;
					public static HEALTH_FITNESS: com.facebook.ads.ExtraHints.Keyword;
					public static HOBBIES: com.facebook.ads.ExtraHints.Keyword;
					public static HOME_GARDEN: com.facebook.ads.ExtraHints.Keyword;
					public static HUMOR: com.facebook.ads.ExtraHints.Keyword;
					public static INTERNET_TECHNOLOGY: com.facebook.ads.ExtraHints.Keyword;
					public static LARGE_ANIMALS: com.facebook.ads.ExtraHints.Keyword;
					public static LAW: com.facebook.ads.ExtraHints.Keyword;
					public static LEGAL_ISSUES: com.facebook.ads.ExtraHints.Keyword;
					public static LITERATURE: com.facebook.ads.ExtraHints.Keyword;
					public static MARKETING: com.facebook.ads.ExtraHints.Keyword;
					public static MOVIES: com.facebook.ads.ExtraHints.Keyword;
					public static MUSIC: com.facebook.ads.ExtraHints.Keyword;
					public static NEWS: com.facebook.ads.ExtraHints.Keyword;
					public static PERSONAL_FINANCE: com.facebook.ads.ExtraHints.Keyword;
					public static PETS: com.facebook.ads.ExtraHints.Keyword;
					public static PHOTOGRAPHY: com.facebook.ads.ExtraHints.Keyword;
					public static POLITICS: com.facebook.ads.ExtraHints.Keyword;
					public static REAL_ESTATE: com.facebook.ads.ExtraHints.Keyword;
					public static ROLEPLAYING_GAMES: com.facebook.ads.ExtraHints.Keyword;
					public static SCIENCE: com.facebook.ads.ExtraHints.Keyword;
					public static SHOPPING: com.facebook.ads.ExtraHints.Keyword;
					public static SOCIETY: com.facebook.ads.ExtraHints.Keyword;
					public static SPORTS: com.facebook.ads.ExtraHints.Keyword;
					public static TECHNOLOGY: com.facebook.ads.ExtraHints.Keyword;
					public static TELEVISION: com.facebook.ads.ExtraHints.Keyword;
					public static TRAVEL: com.facebook.ads.ExtraHints.Keyword;
					public static VIDEO_COMPUTER_GAMES: com.facebook.ads.ExtraHints.Keyword;
					public static valueOf(param0: string): com.facebook.ads.ExtraHints.Keyword;
					public static values(): native.Array<com.facebook.ads.ExtraHints.Keyword>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class FullScreenAd extends com.facebook.ads.Ad {
				public static class: java.lang.Class<com.facebook.ads.FullScreenAd>;
				/**
				 * Constructs a new instance of the com.facebook.ads.FullScreenAd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					show(): boolean;
					buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
					buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
					loadAd(): void;
					isAdInvalidated(): boolean;
					destroy(): void;
					getPlacementId(): string;
					setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				});
				public constructor();
				public show(): boolean;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public loadAd(): void;
				public buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public getPlacementId(): string;
				public buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
			}
			export module FullScreenAd {
				export class ShowAdConfig {
					public static class: java.lang.Class<com.facebook.ads.FullScreenAd.ShowAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.FullScreenAd$ShowAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class ShowConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.FullScreenAd.ShowConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.FullScreenAd$ShowConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
					});
					public constructor();
					public build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class InterstitialAd extends com.facebook.ads.FullScreenAd {
				public static class: java.lang.Class<com.facebook.ads.InterstitialAd>;
				public show(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public loadAd(): void;
				public buildShowAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdShowConfigBuilder;
				public buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public loadAd(param0: com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig): void;
				public buildLoadAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
				public isAdLoaded(): boolean;
				public show(param0: com.facebook.ads.InterstitialAd.InterstitialShowAdConfig): boolean;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public getPlacementId(): string;
				public buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
			}
			export module InterstitialAd {
				export class InterstitialAdLoadConfigBuilder extends com.facebook.ads.Ad.LoadConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.InterstitialAd$InterstitialAdLoadConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withAdListener(param0: com.facebook.ads.InterstitialAdListener): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						withRewardedAdListener(param0: com.facebook.ads.RewardedAdListener): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						withRewardData(param0: com.facebook.ads.RewardData): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						withBid(param0: string): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						withCacheFlags(param0: java.util.EnumSet<com.facebook.ads.CacheFlag>): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						build(): com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig;
						withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
						build(): com.facebook.ads.Ad.LoadAdConfig;
					});
					public constructor();
					public withBid(param0: string): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
					public build(): com.facebook.ads.Ad.LoadAdConfig;
					public withCacheFlags(param0: java.util.EnumSet<com.facebook.ads.CacheFlag>): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
					public withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
					public withRewardData(param0: com.facebook.ads.RewardData): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
					public build(): com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig;
					public withRewardedAdListener(param0: com.facebook.ads.RewardedAdListener): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
					public withAdListener(param0: com.facebook.ads.InterstitialAdListener): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
				}
				export class InterstitialAdShowConfigBuilder extends com.facebook.ads.FullScreenAd.ShowConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.InterstitialAd.InterstitialAdShowConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.InterstitialAd$InterstitialAdShowConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(): com.facebook.ads.InterstitialAd.InterstitialShowAdConfig;
						build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
					});
					public constructor();
					public build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
					public build(): com.facebook.ads.InterstitialAd.InterstitialShowAdConfig;
				}
				export class InterstitialLoadAdConfig extends com.facebook.ads.Ad.LoadAdConfig {
					public static class: java.lang.Class<com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.InterstitialAd$InterstitialLoadAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class InterstitialShowAdConfig extends com.facebook.ads.FullScreenAd.ShowAdConfig {
					public static class: java.lang.Class<com.facebook.ads.InterstitialAd.InterstitialShowAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.InterstitialAd$InterstitialShowAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class InterstitialAdExtendedListener implements com.facebook.ads.InterstitialAdListener, com.facebook.ads.RewardedAdListener {
				public static class: java.lang.Class<com.facebook.ads.InterstitialAdExtendedListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.InterstitialAdExtendedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInterstitialActivityDestroyed(): void;
					onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
					onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
					onRewardedAdCompleted(): void;
					onRewardedAdServerSucceeded(): void;
					onRewardedAdServerFailed(): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onRewardedAdServerFailed(): void;
				public onRewardedAdServerSucceeded(): void;
				public onInterstitialActivityDestroyed(): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
				public onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
				public onRewardedAdCompleted(): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class InterstitialAdListener extends com.facebook.ads.AdListener {
				public static class: java.lang.Class<com.facebook.ads.InterstitialAdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.InterstitialAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
					onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onInterstitialDisplayed(param0: com.facebook.ads.Ad): void;
				public onInterstitialDismissed(param0: com.facebook.ads.Ad): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class MediaView extends com.facebook.ads.internal.api.AdNativeComponentView {
				public static class: java.lang.Class<com.facebook.ads.MediaView>;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public setListener(param0: com.facebook.ads.MediaViewListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMediaViewApi(): com.facebook.ads.internal.api.MediaViewApi;
				public getMediaWidth(): number;
				public repair(param0: java.lang.Throwable): void;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context);
				public setVideoRenderer(param0: com.facebook.ads.MediaViewVideoRenderer): void;
				public getAdContentsView(): globalAndroid.view.View;
				public onWindowFocusChanged(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getMediaHeight(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class MediaViewListener {
				public static class: java.lang.Class<com.facebook.ads.MediaViewListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.MediaViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPlay(param0: com.facebook.ads.MediaView): void;
					onVolumeChange(param0: com.facebook.ads.MediaView, param1: number): void;
					onPause(param0: com.facebook.ads.MediaView): void;
					onComplete(param0: com.facebook.ads.MediaView): void;
					onEnterFullscreen(param0: com.facebook.ads.MediaView): void;
					onExitFullscreen(param0: com.facebook.ads.MediaView): void;
					onFullscreenBackground(param0: com.facebook.ads.MediaView): void;
					onFullscreenForeground(param0: com.facebook.ads.MediaView): void;
				});
				public constructor();
				public onPause(param0: com.facebook.ads.MediaView): void;
				public onComplete(param0: com.facebook.ads.MediaView): void;
				public onPlay(param0: com.facebook.ads.MediaView): void;
				public onFullscreenBackground(param0: com.facebook.ads.MediaView): void;
				public onExitFullscreen(param0: com.facebook.ads.MediaView): void;
				public onFullscreenForeground(param0: com.facebook.ads.MediaView): void;
				public onEnterFullscreen(param0: com.facebook.ads.MediaView): void;
				public onVolumeChange(param0: com.facebook.ads.MediaView, param1: number): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export abstract class MediaViewVideoRenderer extends com.facebook.ads.internal.api.AdComponentFrameLayout {
				public static class: java.lang.Class<com.facebook.ads.MediaViewVideoRenderer>;
				public nativeAd: com.facebook.ads.NativeAd;
				public videoAutoplayBehavior: com.facebook.ads.VideoAutoplayBehavior;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public onPlayed(): void;
				public onPaused(): void;
				public disengageSeek(param0: com.facebook.ads.VideoStartReason): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMediaViewVideoRendererApi(): com.facebook.ads.internal.api.MediaViewVideoRendererApi;
				public getDuration(): number;
				/** @deprecated */
				public unsetNativeAd(): void;
				public pause(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
				public engageSeek(): void;
				public setVolume(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public setNativeAd(param0: com.facebook.ads.NativeAd): void;
				public onSeek(): void;
				public onVolumeChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public seekTo(param0: number): void;
				public onError(): void;
				/** @deprecated */
				public destroy(): void;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public onSeekEngaged(): void;
				public getVolume(): number;
				public play(param0: com.facebook.ads.VideoStartReason): void;
				public shouldAutoplay(): boolean;
				public getCurrentTimeMs(): number;
				public onCompleted(): void;
				public shouldAllowBackgroundPlayback(): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onPrepared(): void;
				public onSeekDisengaged(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class MediaViewVideoRendererWithBackgroundPlayback extends com.facebook.ads.MediaViewVideoRenderer {
				public static class: java.lang.Class<com.facebook.ads.MediaViewVideoRendererWithBackgroundPlayback>;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context);
				public shouldAllowBackgroundPlayback(): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onPrepared(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAd extends com.facebook.ads.NativeAdBase {
				public static class: java.lang.Class<com.facebook.ads.NativeAd>;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView): void;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public getNativeAdApi(): com.facebook.ads.internal.api.NativeAdApi;
				public loadAd(): void;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView, param3: java.util.List<globalAndroid.view.View>): void;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView): void;
				public getAdCreativeType(): com.facebook.ads.NativeAd.AdCreativeType;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView, param3: java.util.List<globalAndroid.view.View>): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase);
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.api.NativeAdBaseApi);
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public constructor(param0: com.facebook.ads.internal.api.NativeAdBaseApi);
				public loadAd(param0: com.facebook.ads.NativeAdBase.NativeLoadAdConfig): void;
				public getPlacementId(): string;
			}
			export module NativeAd {
				export class AdCreativeType {
					public static class: java.lang.Class<com.facebook.ads.NativeAd.AdCreativeType>;
					public static IMAGE: com.facebook.ads.NativeAd.AdCreativeType;
					public static VIDEO: com.facebook.ads.NativeAd.AdCreativeType;
					public static CAROUSEL: com.facebook.ads.NativeAd.AdCreativeType;
					public static UNKNOWN: com.facebook.ads.NativeAd.AdCreativeType;
					public static values(): native.Array<com.facebook.ads.NativeAd.AdCreativeType>;
					public static valueOf(param0: string): com.facebook.ads.NativeAd.AdCreativeType;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export abstract class NativeAdBase extends com.facebook.ads.Ad {
				public static class: java.lang.Class<com.facebook.ads.NativeAdBase>;
				public getAdLinkDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public getId(): string;
				public loadAd(): void;
				public getAdTranslation(): string;
				public unregisterView(): void;
				public destroy(): void;
				public getAdSocialContext(): string;
				public downloadMedia(): void;
				public getAdChoicesIcon(): com.facebook.ads.NativeAdBase.Image;
				public onCtaBroadcast(): void;
				public constructor(param0: com.facebook.ads.internal.api.NativeAdBaseApi);
				public loadAd(param0: com.facebook.ads.NativeAdBase.NativeLoadAdConfig): void;
				public getAdHeadline(): string;
				public getAdChoicesText(): string;
				public getPreloadedIconViewDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getAdIcon(): com.facebook.ads.NativeAdBase.Image;
				public getAdCallToAction(): string;
				public getAdChoicesImageUrl(): string;
				public static fromBidPayload(param0: globalAndroid.content.Context, param1: string, param2: string): com.facebook.ads.NativeAdBase;
				public getPromotedTranslation(): string;
				public getAdCoverImage(): com.facebook.ads.NativeAdBase.Image;
				public getAdBodyText(): string;
				public getAdChoicesLinkUrl(): string;
				public getAspectRatio(): number;
				public isAdInvalidated(): boolean;
				/** @deprecated */
				public isNativeConfigEnabled(): boolean;
				public getInternalNativeAd(): com.facebook.ads.internal.api.NativeAdBaseApi;
				public getAdUntrimmedBodyText(): string;
				public getAdvertiserName(): string;
				public isAdLoaded(): boolean;
				/** @deprecated */
				public getAdViewAttributes(): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getAdStarRating(): com.facebook.ads.NativeAdBase.Rating;
				public buildLoadAdConfig(): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
				public hasCallToAction(): boolean;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
				public getPlacementId(): string;
				public getSponsoredTranslation(): string;
			}
			export module NativeAdBase {
				export class Image {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.Image>;
					public getUrl(): string;
					public getHeight(): number;
					public static fromJSONObject(param0: org.json.JSONObject): com.facebook.ads.NativeAdBase.Image;
					public getWidth(): number;
				}
				export class MediaCacheFlag {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.MediaCacheFlag>;
					public static NONE: com.facebook.ads.NativeAdBase.MediaCacheFlag;
					public static ALL: com.facebook.ads.NativeAdBase.MediaCacheFlag;
					public static valueOf(param0: string): com.facebook.ads.NativeAdBase.MediaCacheFlag;
					public static values(): native.Array<com.facebook.ads.NativeAdBase.MediaCacheFlag>;
				}
				export class NativeAdLoadConfigBuilder extends com.facebook.ads.Ad.LoadConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.NativeAdBase$NativeAdLoadConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withAdListener(param0: com.facebook.ads.NativeAdListener): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
						withBid(param0: string): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
						withMediaCacheFlag(param0: com.facebook.ads.NativeAdBase.MediaCacheFlag): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
						withPreloadedIconView(param0: number, param1: number): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
						build(): com.facebook.ads.NativeAdBase.NativeLoadAdConfig;
						withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
						build(): com.facebook.ads.Ad.LoadAdConfig;
					});
					public constructor();
					public static UNKNOWN_IMAGE_SIZE: number;
					public build(): com.facebook.ads.Ad.LoadAdConfig;
					public withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
					public withBid(param0: string): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
					public withPreloadedIconView(param0: number, param1: number): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
					public withAdListener(param0: com.facebook.ads.NativeAdListener): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
					public build(): com.facebook.ads.NativeAdBase.NativeLoadAdConfig;
					public withMediaCacheFlag(param0: com.facebook.ads.NativeAdBase.MediaCacheFlag): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
				}
				export class NativeComponentTag {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.NativeComponentTag>;
					public static AD_ICON: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_TITLE: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_COVER_IMAGE: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_SUBTITLE: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_BODY: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_CALL_TO_ACTION: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_SOCIAL_CONTEXT: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_CHOICES_ICON: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_OPTIONS_VIEW: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static AD_MEDIA: com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static tagView(param0: globalAndroid.view.View, param1: com.facebook.ads.NativeAdBase.NativeComponentTag): void;
					public static valueOf(param0: string): com.facebook.ads.NativeAdBase.NativeComponentTag;
					public static values(): native.Array<com.facebook.ads.NativeAdBase.NativeComponentTag>;
				}
				export class NativeLoadAdConfig extends com.facebook.ads.Ad.LoadAdConfig {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.NativeLoadAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.NativeAdBase$NativeLoadAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class Rating {
					public static class: java.lang.Class<com.facebook.ads.NativeAdBase.Rating>;
					public getValue(): number;
					public getScale(): number;
					public static fromJSONObject(param0: org.json.JSONObject): com.facebook.ads.NativeAdBase.Rating;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdLayout extends com.facebook.ads.internal.api.AdComponentFrameLayout {
				public static class: java.lang.Class<com.facebook.ads.NativeAdLayout>;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public setMaxWidth(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public addView(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.api.NativeAdLayoutApi);
				public setMinWidth(param0: number): void;
				public onWindowFocusChanged(param0: boolean): void;
				public getNativeAdLayoutApi(): com.facebook.ads.internal.api.NativeAdLayoutApi;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdListener extends com.facebook.ads.AdListener {
				public static class: java.lang.Class<com.facebook.ads.NativeAdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.NativeAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMediaDownloaded(param0: com.facebook.ads.Ad): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onMediaDownloaded(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdScrollView {
				public static class: java.lang.Class<com.facebook.ads.NativeAdScrollView>;
				public static DEFAULT_MAX_ADS: number;
				public static DEFAULT_INSET: number;
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: com.facebook.ads.NativeAdScrollView.AdViewProvider, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: number);
				/** @deprecated */
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: com.facebook.ads.NativeAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes, param4: number);
				/** @deprecated */
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: com.facebook.ads.NativeAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: com.facebook.ads.NativeAdScrollView.AdViewProvider);
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: number, param3: com.facebook.ads.NativeAdViewAttributes);
				public setInset(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: number, param3: com.facebook.ads.NativeAdViewAttributes, param4: number);
				/** @deprecated */
				public constructor(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdsManager, param2: com.facebook.ads.NativeAdView.Type);
			}
			export module NativeAdScrollView {
				export class AdViewProvider {
					public static class: java.lang.Class<com.facebook.ads.NativeAdScrollView.AdViewProvider>;
					/**
					 * Constructs a new instance of the com.facebook.ads.NativeAdScrollView$AdViewProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createView(param0: com.facebook.ads.NativeAd, param1: number): globalAndroid.view.View;
						destroyView(param0: com.facebook.ads.NativeAd, param1: globalAndroid.view.View): void;
					});
					public constructor();
					public createView(param0: com.facebook.ads.NativeAd, param1: number): globalAndroid.view.View;
					public destroyView(param0: com.facebook.ads.NativeAd, param1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdView {
				public static class: java.lang.Class<com.facebook.ads.NativeAdView>;
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd): globalAndroid.view.View;
				/** @deprecated */
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type): globalAndroid.view.View;
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
				/** @deprecated */
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
				public constructor();
			}
			export module NativeAdView {
				export class Type {
					public static class: java.lang.Class<com.facebook.ads.NativeAdView.Type>;
					public static HEIGHT_300: com.facebook.ads.NativeAdView.Type;
					public static HEIGHT_400: com.facebook.ads.NativeAdView.Type;
					/** @deprecated */
					public getWidth(): number;
					public static values(): native.Array<com.facebook.ads.NativeAdView.Type>;
					public getEnumCode(): number;
					/** @deprecated */
					public getValue(): number;
					/** @deprecated */
					public getHeight(): number;
					public static valueOf(param0: string): com.facebook.ads.NativeAdView.Type;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdViewAttributes {
				public static class: java.lang.Class<com.facebook.ads.NativeAdViewAttributes>;
				/** @deprecated */
				public getAutoplay(): boolean;
				/** @deprecated */
				public getTypeface(): globalAndroid.graphics.Typeface;
				public setButtonColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getButtonBorderColor(): number;
				/** @deprecated */
				public setAutoplayOnMobile(param0: boolean): com.facebook.ads.NativeAdViewAttributes;
				public getInternalAttributes(): com.facebook.ads.internal.api.NativeAdViewAttributesApi;
				public setTitleTextColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getTitleTextColor(): number;
				public setTypeface(param0: globalAndroid.graphics.Typeface): com.facebook.ads.NativeAdViewAttributes;
				public setBackgroundColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getAutoplayOnMobile(): boolean;
				/** @deprecated */
				public constructor();
				/** @deprecated */
				public setAutoplay(param0: boolean): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getBackgroundColor(): number;
				/** @deprecated */
				public getDescriptionTextSize(): number;
				public setButtonBorderColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public getTitleTextSize(): number;
				/** @deprecated */
				public getDescriptionTextColor(): number;
				/** @deprecated */
				public getButtonColor(): number;
				public setDescriptionTextColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				public setButtonTextColor(param0: number): com.facebook.ads.NativeAdViewAttributes;
				/** @deprecated */
				public getButtonTextColor(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeAdsManager {
				public static class: java.lang.Class<com.facebook.ads.NativeAdsManager>;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public setListener(param0: com.facebook.ads.NativeAdsManager.Listener): void;
				public loadAds(): void;
				public setExtraHints(param0: string): void;
				public getUniqueNativeAdCount(): number;
				public nextNativeAd(): com.facebook.ads.NativeAd;
				public isLoaded(): boolean;
				public loadAds(param0: com.facebook.ads.NativeAdBase.MediaCacheFlag): void;
				public disableAutoRefresh(): void;
			}
			export module NativeAdsManager {
				export class Listener {
					public static class: java.lang.Class<com.facebook.ads.NativeAdsManager.Listener>;
					/**
					 * Constructs a new instance of the com.facebook.ads.NativeAdsManager$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAdsLoaded(): void;
						onAdError(param0: com.facebook.ads.AdError): void;
					});
					public constructor();
					public onAdError(param0: com.facebook.ads.AdError): void;
					public onAdsLoaded(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeBannerAd extends com.facebook.ads.NativeAdBase {
				public static class: java.lang.Class<com.facebook.ads.NativeBannerAd>;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
				public loadAd(): void;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public constructor(param0: com.facebook.ads.internal.api.NativeAdBaseApi);
				public loadAd(param0: com.facebook.ads.NativeAdBase.NativeLoadAdConfig): void;
				public getPlacementId(): string;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView, param2: java.util.List<globalAndroid.view.View>): void;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
				public registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class NativeBannerAdView {
				public static class: java.lang.Class<com.facebook.ads.NativeBannerAdView>;
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type): globalAndroid.view.View;
				public static render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
				public constructor();
			}
			export module NativeBannerAdView {
				export class Type {
					public static class: java.lang.Class<com.facebook.ads.NativeBannerAdView.Type>;
					public static HEIGHT_50: com.facebook.ads.NativeBannerAdView.Type;
					public static HEIGHT_100: com.facebook.ads.NativeBannerAdView.Type;
					public static HEIGHT_120: com.facebook.ads.NativeBannerAdView.Type;
					public static values(): native.Array<com.facebook.ads.NativeBannerAdView.Type>;
					public getEnumCode(): number;
					public getHeight(): number;
					public getValue(): number;
					public getWidth(): number;
					public static valueOf(param0: string): com.facebook.ads.NativeBannerAdView.Type;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class RewardData {
				public static class: java.lang.Class<com.facebook.ads.RewardData>;
				public constructor(param0: string, param1: string, param2: number);
				public getCurrency(): string;
				public getQuantity(): number;
				public getUserID(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class RewardedAdListener {
				public static class: java.lang.Class<com.facebook.ads.RewardedAdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.RewardedAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRewardedAdCompleted(): void;
					onRewardedAdServerSucceeded(): void;
					onRewardedAdServerFailed(): void;
				});
				public constructor();
				public onRewardedAdServerFailed(): void;
				public onRewardedAdServerSucceeded(): void;
				public onRewardedAdCompleted(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class RewardedVideoAd extends com.facebook.ads.FullScreenAd {
				public static class: java.lang.Class<com.facebook.ads.RewardedVideoAd>;
				public static UNSET_VIDEO_DURATION: number;
				public show(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public loadAd(): void;
				public buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
				public getVideoDuration(): number;
				public buildShowAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder;
				public isAdInvalidated(): boolean;
				public destroy(): void;
				public show(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig): boolean;
				public loadAd(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig): void;
				public isAdLoaded(): boolean;
				/** @deprecated */
				public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
				public getPlacementId(): string;
				public buildLoadAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
				public buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
			}
			export module RewardedVideoAd {
				export class RewardedVideoAdLoadConfigBuilder extends com.facebook.ads.Ad.LoadConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.RewardedVideoAd$RewardedVideoAdLoadConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withBid(param0: string): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
						withFailOnCacheFailureEnabled(param0: boolean): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
						withRewardData(param0: com.facebook.ads.RewardData): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
						withAdListener(param0: com.facebook.ads.RewardedVideoAdListener): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
						withAdExperience(param0: com.facebook.ads.AdExperienceType): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
						build(): com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig;
						withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
						build(): com.facebook.ads.Ad.LoadAdConfig;
					});
					public constructor();
					public withFailOnCacheFailureEnabled(param0: boolean): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
					public build(): com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig;
					public build(): com.facebook.ads.Ad.LoadAdConfig;
					public withBid(param0: string): com.facebook.ads.Ad.LoadConfigBuilder;
					public withAdListener(param0: com.facebook.ads.RewardedVideoAdListener): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
					public withBid(param0: string): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
					public withAdExperience(param0: com.facebook.ads.AdExperienceType): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
					public withRewardData(param0: com.facebook.ads.RewardData): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
				}
				export class RewardedVideoAdShowConfigBuilder extends com.facebook.ads.FullScreenAd.ShowConfigBuilder {
					public static class: java.lang.Class<com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.ads.RewardedVideoAd$RewardedVideoAdShowConfigBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withAppOrientation(param0: number): com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder;
						build(): com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig;
						build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
					});
					public constructor();
					public build(): com.facebook.ads.FullScreenAd.ShowAdConfig;
					public withAppOrientation(param0: number): com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder;
					public build(): com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig;
				}
				export class RewardedVideoLoadAdConfig extends com.facebook.ads.Ad.LoadAdConfig {
					public static class: java.lang.Class<com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.RewardedVideoAd$RewardedVideoLoadAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class RewardedVideoShowAdConfig extends com.facebook.ads.FullScreenAd.ShowAdConfig {
					public static class: java.lang.Class<com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig>;
					/**
					 * Constructs a new instance of the com.facebook.ads.RewardedVideoAd$RewardedVideoShowAdConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class RewardedVideoAdExtendedListener extends com.facebook.ads.RewardedVideoAdListener {
				public static class: java.lang.Class<com.facebook.ads.RewardedVideoAdExtendedListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.RewardedVideoAdExtendedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRewardedVideoActivityDestroyed(): void;
					onRewardedVideoCompleted(): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onRewardedVideoClosed(): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onRewardedVideoClosed(): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onRewardedVideoActivityDestroyed(): void;
				public onRewardedVideoCompleted(): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class RewardedVideoAdListener extends com.facebook.ads.AdListener {
				public static class: java.lang.Class<com.facebook.ads.RewardedVideoAdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.RewardedVideoAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRewardedVideoCompleted(): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onRewardedVideoClosed(): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onRewardedVideoClosed(): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onRewardedVideoCompleted(): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class S2SRewardedVideoAdExtendedListener implements com.facebook.ads.RewardedVideoAdExtendedListener, com.facebook.ads.S2SRewardedVideoAdListener {
				public static class: java.lang.Class<com.facebook.ads.S2SRewardedVideoAdExtendedListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.S2SRewardedVideoAdExtendedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRewardedVideoActivityDestroyed(): void;
					onRewardServerFailed(): void;
					onRewardServerSuccess(): void;
					onRewardedVideoCompleted(): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onRewardedVideoClosed(): void;
					onRewardedVideoCompleted(): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onRewardedVideoClosed(): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onRewardServerFailed(): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onRewardServerSuccess(): void;
				public onRewardedVideoClosed(): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onRewardedVideoActivityDestroyed(): void;
				public onRewardedVideoCompleted(): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class S2SRewardedVideoAdListener extends com.facebook.ads.RewardedVideoAdListener {
				public static class: java.lang.Class<com.facebook.ads.S2SRewardedVideoAdListener>;
				/**
				 * Constructs a new instance of the com.facebook.ads.S2SRewardedVideoAdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRewardServerFailed(): void;
					onRewardServerSuccess(): void;
					onRewardedVideoCompleted(): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
					onRewardedVideoClosed(): void;
					onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
					onAdLoaded(param0: com.facebook.ads.Ad): void;
					onAdClicked(param0: com.facebook.ads.Ad): void;
					onLoggingImpression(param0: com.facebook.ads.Ad): void;
				});
				public constructor();
				public onLoggingImpression(param0: com.facebook.ads.Ad): void;
				public onRewardServerFailed(): void;
				public onAdLoaded(param0: com.facebook.ads.Ad): void;
				public onRewardServerSuccess(): void;
				public onRewardedVideoClosed(): void;
				public onError(param0: com.facebook.ads.Ad, param1: com.facebook.ads.AdError): void;
				public onRewardedVideoCompleted(): void;
				public onAdClicked(param0: com.facebook.ads.Ad): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class VideoAutoplayBehavior {
				public static class: java.lang.Class<com.facebook.ads.VideoAutoplayBehavior>;
				public static DEFAULT: com.facebook.ads.VideoAutoplayBehavior;
				public static ON: com.facebook.ads.VideoAutoplayBehavior;
				public static OFF: com.facebook.ads.VideoAutoplayBehavior;
				public static values(): native.Array<com.facebook.ads.VideoAutoplayBehavior>;
				public static valueOf(param0: string): com.facebook.ads.VideoAutoplayBehavior;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export class VideoStartReason {
				public static class: java.lang.Class<com.facebook.ads.VideoStartReason>;
				public static NOT_STARTED: com.facebook.ads.VideoStartReason;
				public static USER_STARTED: com.facebook.ads.VideoStartReason;
				public static AUTO_STARTED: com.facebook.ads.VideoStartReason;
				public static valueOf(param0: string): com.facebook.ads.VideoStartReason;
				public static values(): native.Array<com.facebook.ads.VideoStartReason>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export abstract class AdComponentFrameLayout implements com.facebook.ads.internal.api.AdComponentView {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdComponentFrameLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onWindowFocusChanged(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onMeasure(param0: number, param1: number): void;
						public attachAdComponentViewApi(param0: com.facebook.ads.internal.api.AdComponentViewApiProvider): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdComponentView {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdComponentView>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdComponentView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
							onWindowFocusChanged(param0: boolean): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View): void;
							addView(param0: globalAndroid.view.View, param1: number): void;
							addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						});
						public constructor();
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onWindowFocusChanged(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public addView(param0: globalAndroid.view.View, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdComponentViewApi extends com.facebook.ads.internal.api.AdComponentViewParentApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdComponentViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdComponentViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAttachedToView(param0: com.facebook.ads.internal.api.AdComponentView, param1: com.facebook.ads.internal.api.AdComponentViewParentApi): void;
							onAttachedToWindow(): void;
							onDetachedFromWindow(): void;
							onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
							setMeasuredDimension(param0: number, param1: number): void;
							onMeasure(param0: number, param1: number): void;
							bringChildToFront(param0: globalAndroid.view.View): void;
							setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
							onWindowFocusChanged(param0: boolean): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View): void;
							addView(param0: globalAndroid.view.View, param1: number): void;
							addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						});
						public constructor();
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public setMeasuredDimension(param0: number, param1: number): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onAttachedToView(param0: com.facebook.ads.internal.api.AdComponentView, param1: com.facebook.ads.internal.api.AdComponentViewParentApi): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onWindowFocusChanged(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdComponentViewApiProvider {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdComponentViewApiProvider>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdComponentViewApiProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						});
						public constructor();
						public getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdComponentViewParentApi extends com.facebook.ads.internal.api.AdComponentView {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdComponentViewParentApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdComponentViewParentApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAttachedToWindow(): void;
							onDetachedFromWindow(): void;
							onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
							setMeasuredDimension(param0: number, param1: number): void;
							onMeasure(param0: number, param1: number): void;
							bringChildToFront(param0: globalAndroid.view.View): void;
							setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
							onWindowFocusChanged(param0: boolean): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View): void;
							addView(param0: globalAndroid.view.View, param1: number): void;
							addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
							addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						});
						public constructor();
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public setMeasuredDimension(param0: number, param1: number): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onWindowFocusChanged(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export abstract class AdNativeComponentView implements com.facebook.ads.internal.api.AdComponentView {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdNativeComponentView>;
						public mAdComponentViewApi: com.facebook.ads.internal.api.AdComponentViewApi;
						public getAdContentsView(): globalAndroid.view.View;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public setLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onWindowFocusChanged(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public onMeasure(param0: number, param1: number): void;
						public attachAdComponentViewApi(param0: com.facebook.ads.internal.api.AdComponentViewApiProvider): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdOptionsViewApi extends com.facebook.ads.internal.api.AdComponentViewApiProvider {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdOptionsViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdOptionsViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setIconColor(param0: number): void;
							setIconSizeDp(param0: number): void;
							setSingleIcon(param0: boolean): void;
							getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						});
						public constructor();
						public setIconSizeDp(param0: number): void;
						public setSingleIcon(param0: boolean): void;
						public getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						public setIconColor(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdSettingsApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdSettingsApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdSettingsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isTestMode(param0: globalAndroid.content.Context): boolean;
							turnOnDebugger(): void;
						});
						public constructor();
						public turnOnDebugger(): void;
						public isTestMode(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdSizeApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdSizeApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdSizeApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getWidth(): number;
							getHeight(): number;
						});
						public constructor();
						public static RECTANGLE_HEIGHT_250: number;
						public static BANNER_HEIGHT_90: number;
						public static BANNER_320_50: number;
						public static BANNER_HEIGHT_50: number;
						public static INTERSTITIAL: number;
						public getWidth(): number;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdViewApi implements com.facebook.ads.internal.api.AdViewParentApi, com.facebook.ads.Ad {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadAd(param0: com.facebook.ads.AdView.AdViewLoadConfig): void;
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
							onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
							buildLoadAdConfig(): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
							onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
							loadAd(): void;
							isAdInvalidated(): boolean;
							destroy(): void;
							getPlacementId(): string;
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						});
						public constructor();
						public buildLoadAdConfig(): com.facebook.ads.AdView.AdViewLoadConfigBuilder;
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public getPlacementId(): string;
						public loadAd(): void;
						public destroy(): void;
						public isAdInvalidated(): boolean;
						/** @deprecated */
						public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						public loadAd(param0: com.facebook.ads.AdView.AdViewLoadConfig): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdViewConstructorParams {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdViewConstructorParams>;
						public static CONTEXT: number;
						public static CONTEXT_ATTRS: number;
						public static CONTEXT_ATTRS_STYLE_ATTR: number;
						public static CONTEXT_ATTRS_STYLE_ATTR_STYLE_RES: number;
						public getDefStyleRes(): number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getContext(): globalAndroid.content.Context;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getInitializationType(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getDefStyleAttr(): number;
						public getAttributeSet(): globalAndroid.util.AttributeSet;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AdViewParentApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AdViewParentApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AdViewParentApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						});
						public constructor();
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AudienceNetworkActivityApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AudienceNetworkActivityApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AudienceNetworkActivityApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCreate(param0: globalAndroid.os.Bundle): void;
							onStart(): void;
							onResume(): void;
							onPause(): void;
							onStop(): void;
							onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							finish(param0: number): void;
							onDestroy(): void;
							onBackPressed(): void;
							onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
							onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						});
						public constructor();
						public static EXTERNAL_FINISH_REASON: number;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public finish(param0: number): void;
						public onDestroy(): void;
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onStop(): void;
						public onBackPressed(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class AudienceNetworkAdsApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.AudienceNetworkAdsApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.AudienceNetworkAdsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onContentProviderCreated(param0: globalAndroid.content.Context): void;
							initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.settings.MultithreadedBundleWrapper, param2: com.facebook.ads.AudienceNetworkAds.InitListener): void;
							isInitialized(): boolean;
							getAdFormatForPlacement(param0: string): number;
						});
						public constructor();
						public static REWARDED_VIDEO: number;
						public static UNKNOWN: number;
						public static NATIVE_BANNER: number;
						public static NATIVE: number;
						public static BANNER: number;
						public static INTERSTITIAL: number;
						public initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.settings.MultithreadedBundleWrapper, param2: com.facebook.ads.AudienceNetworkAds.InitListener): void;
						public onContentProviderCreated(param0: globalAndroid.content.Context): void;
						public getAdFormatForPlacement(param0: string): number;
						public isInitialized(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class BidderTokenProviderApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.BidderTokenProviderApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.BidderTokenProviderApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBidderToken(param0: globalAndroid.content.Context): string;
						});
						public constructor();
						public getBidderToken(param0: globalAndroid.content.Context): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class BuildConfigApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.BuildConfigApi>;
						public static getVersionName(param0: globalAndroid.content.Context): string;
						public constructor();
						public static isDebug(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class DefaultMediaViewVideoRendererApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.DefaultMediaViewVideoRendererApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.DefaultMediaViewVideoRendererApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.MediaViewVideoRenderer, param2: com.facebook.ads.internal.api.MediaViewVideoRendererApi, param3: number): void;
							onPrepared(): void;
						});
						public constructor();
						public static MEDIA_VIEW_RENDERER_CHILD_TYPE_BACKGROUND_PLAYBACK: number;
						public static MEDIA_VIEW_RENDERER_CHILD_TYPE_DEFAULT: number;
						public initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.MediaViewVideoRenderer, param2: com.facebook.ads.internal.api.MediaViewVideoRendererApi, param3: number): void;
						public onPrepared(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class InitApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.InitApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.InitApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAdEventManagerCreated(param0: globalAndroid.content.Context): void;
							maybeAttachCrashListener(param0: globalAndroid.content.Context): void;
							onAdLoadInvoked(param0: globalAndroid.content.Context): void;
							onContentProviderCreated(param0: globalAndroid.content.Context): void;
							initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.settings.MultithreadedBundleWrapper, param2: com.facebook.ads.AudienceNetworkAds.InitListener, param3: number): void;
							isInitialized(): boolean;
						});
						public constructor();
						public static INIT_TYPE_INTERNAL_API: number;
						public static INIT_TYPE_CONTENT_PROVIDER: number;
						public static INIT_TYPE_PUBLIC_API: number;
						public static INIT_TYPE_REMOTE_PROCESS: number;
						public onAdLoadInvoked(param0: globalAndroid.content.Context): void;
						public onAdEventManagerCreated(param0: globalAndroid.content.Context): void;
						public initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.settings.MultithreadedBundleWrapper, param2: com.facebook.ads.AudienceNetworkAds.InitListener, param3: number): void;
						public onContentProviderCreated(param0: globalAndroid.content.Context): void;
						public maybeAttachCrashListener(param0: globalAndroid.content.Context): void;
						public isInitialized(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class InitSettingsBuilder extends com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder {
						public static class: java.lang.Class<com.facebook.ads.internal.api.InitSettingsBuilder>;
						public static PLACEMENTS_KEY: string;
						public withInitListener(param0: com.facebook.ads.AudienceNetworkAds.InitListener): com.facebook.ads.internal.api.InitSettingsBuilder;
						public withInitListener(param0: com.facebook.ads.AudienceNetworkAds.InitListener): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
						public constructor(param0: globalAndroid.content.Context);
						public withPlacementIds(param0: java.util.List<string>): com.facebook.ads.internal.api.InitSettingsBuilder;
						public initialize(): void;
						public withPlacementIds(param0: java.util.List<string>): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
						public withMediationService(param0: string): com.facebook.ads.internal.api.InitSettingsBuilder;
						public withMediationService(param0: string): com.facebook.ads.AudienceNetworkAds.InitSettingsBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class InterstitialAdApi extends com.facebook.ads.FullScreenAd {
						public static class: java.lang.Class<com.facebook.ads.internal.api.InterstitialAdApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.InterstitialAdApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
							loadAd(param0: com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig): void;
							isAdLoaded(): boolean;
							show(): boolean;
							show(param0: com.facebook.ads.InterstitialAd.InterstitialShowAdConfig): boolean;
							buildLoadAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
							buildShowAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdShowConfigBuilder;
							show(): boolean;
							buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
							buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
							loadAd(): void;
							isAdInvalidated(): boolean;
							destroy(): void;
							getPlacementId(): string;
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						});
						public constructor();
						public buildShowAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdShowConfigBuilder;
						public buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
						public getPlacementId(): string;
						public destroy(): void;
						public loadAd(param0: com.facebook.ads.InterstitialAd.InterstitialLoadAdConfig): void;
						public buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
						/** @deprecated */
						public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						public buildLoadAdConfig(): com.facebook.ads.InterstitialAd.InterstitialAdLoadConfigBuilder;
						public isAdLoaded(): boolean;
						public show(param0: com.facebook.ads.InterstitialAd.InterstitialShowAdConfig): boolean;
						public loadAd(): void;
						public show(): boolean;
						public isAdInvalidated(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class MediaViewApi extends com.facebook.ads.internal.api.AdComponentViewApiProvider {
						public static class: java.lang.Class<com.facebook.ads.internal.api.MediaViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.MediaViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: com.facebook.ads.internal.api.AdViewConstructorParams, param1: com.facebook.ads.MediaView): void;
							setVideoRenderer(param0: com.facebook.ads.MediaViewVideoRenderer): void;
							getAdContentsView(): globalAndroid.view.View;
							setListener(param0: com.facebook.ads.MediaViewListener): void;
							destroy(): void;
							getMediaWidth(): number;
							getMediaHeight(): number;
							getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						});
						public constructor();
						public getAdContentsView(): globalAndroid.view.View;
						public getMediaHeight(): number;
						public initialize(param0: com.facebook.ads.internal.api.AdViewConstructorParams, param1: com.facebook.ads.MediaView): void;
						public setVideoRenderer(param0: com.facebook.ads.MediaViewVideoRenderer): void;
						public getMediaWidth(): number;
						public getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						public destroy(): void;
						public setListener(param0: com.facebook.ads.MediaViewListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class MediaViewVideoRendererApi extends com.facebook.ads.internal.api.AdComponentViewApiProvider {
						public static class: java.lang.Class<com.facebook.ads.internal.api.MediaViewVideoRendererApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.MediaViewVideoRendererApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: com.facebook.ads.internal.api.AdViewConstructorParams, param1: com.facebook.ads.MediaViewVideoRenderer): void;
							play(param0: com.facebook.ads.VideoStartReason): void;
							pause(param0: boolean): void;
							getCurrentTimeMs(): number;
							engageSeek(): void;
							disengageSeek(param0: com.facebook.ads.VideoStartReason): void;
							seekTo(param0: number): void;
							getDuration(): number;
							setVolume(param0: number): void;
							getVolume(): number;
							shouldAutoplay(): boolean;
							destroy(): void;
							getVideoView(): globalAndroid.view.View;
							getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						});
						public constructor();
						public shouldAutoplay(): boolean;
						public initialize(param0: com.facebook.ads.internal.api.AdViewConstructorParams, param1: com.facebook.ads.MediaViewVideoRenderer): void;
						public getDuration(): number;
						public getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						public destroy(): void;
						public play(param0: com.facebook.ads.VideoStartReason): void;
						public getVideoView(): globalAndroid.view.View;
						public engageSeek(): void;
						public disengageSeek(param0: com.facebook.ads.VideoStartReason): void;
						public getVolume(): number;
						public pause(param0: boolean): void;
						public seekTo(param0: number): void;
						public getCurrentTimeMs(): number;
						public setVolume(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAdCreativeType(): com.facebook.ads.NativeAd.AdCreativeType;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView, param3: java.util.List<globalAndroid.view.View>): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView, param3: java.util.List<globalAndroid.view.View>): void;
							getVideoAutoplayBehavior(): com.facebook.ads.VideoAutoplayBehavior;
						});
						public constructor();
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
						public getAdCreativeType(): com.facebook.ads.NativeAd.AdCreativeType;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: globalAndroid.widget.ImageView, param3: java.util.List<globalAndroid.view.View>): void;
						public getVideoAutoplayBehavior(): com.facebook.ads.VideoAutoplayBehavior;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: com.facebook.ads.MediaView, param3: java.util.List<globalAndroid.view.View>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdBaseApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdBaseApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdBaseApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
							loadAd(): void;
							loadAd(param0: com.facebook.ads.NativeAdBase.NativeLoadAdConfig): void;
							downloadMedia(): void;
							destroy(): void;
							getPlacementId(): string;
							isAdInvalidated(): boolean;
							isAdLoaded(): boolean;
							hasCallToAction(): boolean;
							getAdIcon(): com.facebook.ads.internal.api.NativeAdImageApi;
							getAdCoverImage(): com.facebook.ads.internal.api.NativeAdImageApi;
							getAdvertiserName(): string;
							getAdHeadline(): string;
							getAdBodyText(): string;
							getAdUntrimmedBodyText(): string;
							getAdCallToAction(): string;
							getAdSocialContext(): string;
							getAdLinkDescription(): string;
							getSponsoredTranslation(): string;
							getAdTranslation(): string;
							getPromotedTranslation(): string;
							getAdStarRating(): com.facebook.ads.internal.api.NativeAdRatingApi;
							getId(): string;
							getAdChoicesIcon(): com.facebook.ads.internal.api.NativeAdImageApi;
							getAdChoicesImageUrl(): string;
							getAdChoicesLinkUrl(): string;
							getAdChoicesText(): string;
							onCtaBroadcast(): void;
							unregisterView(): void;
							setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
							buildLoadAdConfig(param0: com.facebook.ads.NativeAdBase): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
							getAspectRatio(): number;
							getPreloadedIconViewDrawable(): globalAndroid.graphics.drawable.Drawable;
						});
						public constructor();
						public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
						public getAdIcon(): com.facebook.ads.internal.api.NativeAdImageApi;
						public getAdvertiserName(): string;
						public destroy(): void;
						public unregisterView(): void;
						public buildLoadAdConfig(param0: com.facebook.ads.NativeAdBase): com.facebook.ads.NativeAdBase.NativeAdLoadConfigBuilder;
						public loadAd(param0: com.facebook.ads.NativeAdBase.NativeLoadAdConfig): void;
						/** @deprecated */
						public getAdStarRating(): com.facebook.ads.internal.api.NativeAdRatingApi;
						public isAdLoaded(): boolean;
						public getAdCallToAction(): string;
						public getAdTranslation(): string;
						public getAdChoicesText(): string;
						public loadAd(): void;
						public getId(): string;
						public getAdHeadline(): string;
						public getSponsoredTranslation(): string;
						public getAdSocialContext(): string;
						public getAdChoicesIcon(): com.facebook.ads.internal.api.NativeAdImageApi;
						public getPromotedTranslation(): string;
						public getPlacementId(): string;
						public getAdChoicesImageUrl(): string;
						public hasCallToAction(): boolean;
						public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						public getAdBodyText(): string;
						public onCtaBroadcast(): void;
						public getAdChoicesLinkUrl(): string;
						public downloadMedia(): void;
						public getAdUntrimmedBodyText(): string;
						public isAdInvalidated(): boolean;
						public getAdCoverImage(): com.facebook.ads.internal.api.NativeAdImageApi;
						public getPreloadedIconViewDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getAdLinkDescription(): string;
						public getAspectRatio(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdImageApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdImageApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdImageApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getUrl(): string;
							getWidth(): number;
							getHeight(): number;
						});
						public constructor();
						public getWidth(): number;
						public getUrl(): string;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdLayoutApi extends com.facebook.ads.internal.api.AdComponentViewApiProvider {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdLayoutApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdLayoutApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: com.facebook.ads.NativeAdLayout): void;
							setMinWidth(param0: number): void;
							setMaxWidth(param0: number): void;
							getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						});
						public constructor();
						public initialize(param0: com.facebook.ads.NativeAdLayout): void;
						public setMaxWidth(param0: number): void;
						public getAdComponentViewApi(): com.facebook.ads.internal.api.AdComponentViewApi;
						public setMinWidth(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdRatingApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdRatingApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdRatingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getValue(): number;
							getScale(): number;
						});
						public constructor();
						public getScale(): number;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdScrollViewApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdScrollViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdScrollViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setInset(param0: number): void;
						});
						public constructor();
						public setInset(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdViewApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd): globalAndroid.view.View;
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type): globalAndroid.view.View;
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
						});
						public constructor();
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd): globalAndroid.view.View;
						/** @deprecated */
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type): globalAndroid.view.View;
						/** @deprecated */
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.NativeAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdViewAttributesApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdViewAttributesApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdViewAttributesApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setTypeface(param0: globalAndroid.graphics.Typeface): void;
							setBackgroundColor(param0: number): void;
							setPrimaryTextColor(param0: number): void;
							setSecondaryTextColor(param0: number): void;
							setCTABackgroundColor(param0: number): void;
							setCTATextColor(param0: number): void;
							setCTABorderColor(param0: number): void;
						});
						public constructor();
						public setSecondaryTextColor(param0: number): void;
						public setCTABorderColor(param0: number): void;
						public setCTATextColor(param0: number): void;
						public setBackgroundColor(param0: number): void;
						public setPrimaryTextColor(param0: number): void;
						public setTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setCTABackgroundColor(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdViewTypeApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdViewTypeApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdViewTypeApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getWidth(): number;
							getHeight(): number;
							getValue(): number;
						});
						public constructor();
						public static HEIGHT_300: number;
						public static HEIGHT_100: number;
						public static RECT_DYNAMIC: number;
						public static HEIGHT_400: number;
						public static HEIGHT_50: number;
						public static HEIGHT_120: number;
						public getWidth(): number;
						public getHeight(): number;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeAdsManagerApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeAdsManagerApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeAdsManagerApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setListener(param0: com.facebook.ads.NativeAdsManager.Listener): void;
							setExtraHints(param0: string): void;
							loadAds(): void;
							loadAds(param0: com.facebook.ads.NativeAdBase.MediaCacheFlag): void;
							getUniqueNativeAdCount(): number;
							nextNativeAd(): com.facebook.ads.NativeAd;
							isLoaded(): boolean;
							disableAutoRefresh(): void;
						});
						public constructor();
						public disableAutoRefresh(): void;
						public setExtraHints(param0: string): void;
						public nextNativeAd(): com.facebook.ads.NativeAd;
						public setListener(param0: com.facebook.ads.NativeAdsManager.Listener): void;
						public loadAds(): void;
						public loadAds(param0: com.facebook.ads.NativeAdBase.MediaCacheFlag): void;
						public getUniqueNativeAdCount(): number;
						public isLoaded(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeBannerAdApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeBannerAdApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeBannerAdApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView): void;
							registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView, param2: java.util.List<globalAndroid.view.View>): void;
						});
						public constructor();
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView, param2: java.util.List<globalAndroid.view.View>): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: globalAndroid.widget.ImageView): void;
						public registerViewForInteraction(param0: globalAndroid.view.View, param1: com.facebook.ads.MediaView, param2: java.util.List<globalAndroid.view.View>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeBannerAdViewApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeBannerAdViewApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeBannerAdViewApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type): globalAndroid.view.View;
							render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
						});
						public constructor();
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type): globalAndroid.view.View;
						public render(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeBannerAd, param2: com.facebook.ads.NativeBannerAdView.Type, param3: com.facebook.ads.NativeAdViewAttributes): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class NativeComponentTagApi {
						public static class: java.lang.Class<com.facebook.ads.internal.api.NativeComponentTagApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.NativeComponentTagApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							tagView(param0: globalAndroid.view.View, param1: com.facebook.ads.NativeAdBase.NativeComponentTag): void;
						});
						public constructor();
						public tagView(param0: globalAndroid.view.View, param1: com.facebook.ads.NativeAdBase.NativeComponentTag): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class Repairable {
						public static class: java.lang.Class<com.facebook.ads.internal.api.Repairable>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.Repairable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							repair(param0: java.lang.Throwable): void;
						});
						public constructor();
						public repair(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module api {
					export class RewardedVideoAdApi extends com.facebook.ads.FullScreenAd {
						public static class: java.lang.Class<com.facebook.ads.internal.api.RewardedVideoAdApi>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.api.RewardedVideoAdApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
							loadAd(): void;
							loadAd(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig): void;
							show(): boolean;
							show(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig): boolean;
							destroy(): void;
							isAdLoaded(): boolean;
							getPlacementId(): string;
							getVideoDuration(): number;
							buildLoadAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
							buildShowAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder;
							show(): boolean;
							buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
							buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
							loadAd(): void;
							isAdInvalidated(): boolean;
							destroy(): void;
							getPlacementId(): string;
							setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						});
						public constructor();
						public getPlacementId(): string;
						public buildLoadAdConfig(): com.facebook.ads.Ad.LoadConfigBuilder;
						public destroy(): void;
						public buildShowAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdShowConfigBuilder;
						public buildShowAdConfig(): com.facebook.ads.FullScreenAd.ShowConfigBuilder;
						/** @deprecated */
						public setExtraHints(param0: com.facebook.ads.ExtraHints): void;
						public loadAd(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoLoadAdConfig): void;
						public isAdLoaded(): boolean;
						public show(param0: com.facebook.ads.RewardedVideoAd.RewardedVideoShowAdConfig): boolean;
						public loadAd(): void;
						public show(): boolean;
						public isAdInvalidated(): boolean;
						public getVideoDuration(): number;
						public buildLoadAdConfig(): com.facebook.ads.RewardedVideoAd.RewardedVideoAdLoadConfigBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module bench {
					export class Benchmark {
						public static class: java.lang.Class<com.facebook.ads.internal.bench.Benchmark>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.bench.Benchmark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							failAtMillis(): number;
							warnAtMillis(): number;
						});
						public constructor();
						public warnAtMillis(): number;
						public failAtMillis(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module bench {
					export class BenchmarkLimitsMs {
						public static class: java.lang.Class<com.facebook.ads.internal.bench.BenchmarkLimitsMs>;
						public static GSW: number;
						public static GSF: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module bridge {
					export module fbsdk {
						export class FBLoginASID {
							public static class: java.lang.Class<com.facebook.ads.internal.bridge.fbsdk.FBLoginASID>;
							public constructor();
							public static getFBLoginASID(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module bridge {
					export module gms {
						export class AdvertisingId {
							public static class: java.lang.Class<com.facebook.ads.internal.bridge.gms.AdvertisingId>;
							public constructor(param0: string, param1: boolean);
							public getId(): string;
							public isLimitAdTracking(): boolean;
							public static getAdvertisingIdInfoDirectly(param0: globalAndroid.content.Context): com.facebook.ads.internal.bridge.gms.AdvertisingId;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module dynamicloading {
					export class DexLoadErrorReporter {
						public static class: java.lang.Class<com.facebook.ads.internal.dynamicloading.DexLoadErrorReporter>;
						public static SAMPLING: number;
						public constructor();
						public static reportDexLoadingIssue(param0: globalAndroid.content.Context, param1: string, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module dynamicloading {
					export class DynamicLoader {
						public static class: java.lang.Class<com.facebook.ads.internal.dynamicloading.DynamicLoader>;
						/**
						 * Constructs a new instance of the com.facebook.ads.internal.dynamicloading.DynamicLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createInterstitialAd(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.InterstitialAd): com.facebook.ads.internal.api.InterstitialAdApi;
							createRewardedVideoAd(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.RewardedVideoAd): com.facebook.ads.internal.api.RewardedVideoAdApi;
							createAudienceNetworkActivity(param0: com.facebook.ads.AudienceNetworkActivity, param1: com.facebook.ads.internal.api.AudienceNetworkActivityApi): com.facebook.ads.internal.api.AudienceNetworkActivityApi;
							createAdViewApi(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.AdSize, param3: com.facebook.ads.internal.api.AdViewParentApi, param4: com.facebook.ads.AdView): com.facebook.ads.internal.api.AdViewApi;
							createAdViewApi(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.facebook.ads.internal.api.AdViewParentApi, param4: com.facebook.ads.AdView): com.facebook.ads.internal.api.AdViewApi;
							createAdOptionsView(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout, param3: com.facebook.ads.AdOptionsView): com.facebook.ads.internal.api.AdOptionsViewApi;
							createAdOptionsView(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout, param3: com.facebook.ads.AdOptionsView.Orientation, param4: number, param5: com.facebook.ads.AdOptionsView): com.facebook.ads.internal.api.AdOptionsViewApi;
							createNativeAdViewTypeApi(param0: number): com.facebook.ads.internal.api.NativeAdViewTypeApi;
							createNativeAdImageApi(param0: org.json.JSONObject): com.facebook.ads.internal.api.NativeAdImageApi;
							createNativeAdRatingApi(param0: org.json.JSONObject): com.facebook.ads.internal.api.NativeAdRatingApi;
							createNativeComponentTagApi(): com.facebook.ads.internal.api.NativeComponentTagApi;
							createNativeAdViewApi(): com.facebook.ads.internal.api.NativeAdViewApi;
							createNativeBannerAdViewApi(): com.facebook.ads.internal.api.NativeBannerAdViewApi;
							createNativeAdViewAttributesApi(): com.facebook.ads.internal.api.NativeAdViewAttributesApi;
							createNativeAdBaseFromBidPayload(param0: globalAndroid.content.Context, param1: string, param2: string): com.facebook.ads.NativeAdBase;
							createNativeAdBaseApi(param0: globalAndroid.content.Context, param1: string): com.facebook.ads.internal.api.NativeAdBaseApi;
							createNativeAdBaseApi(param0: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdBaseApi;
							createNativeBannerAdApi(param0: com.facebook.ads.NativeBannerAd, param1: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeBannerAdApi;
							createMediaViewApi(): com.facebook.ads.internal.api.MediaViewApi;
							createNativeAdApi(param0: com.facebook.ads.NativeAd, param1: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdApi;
							createNativeAdApi(param0: com.facebook.ads.NativeAdBase, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdApi;
							createNativeAdLayoutApi(): com.facebook.ads.internal.api.NativeAdLayoutApi;
							createNativeAdsManagerApi(param0: globalAndroid.content.Context, param1: string, param2: number): com.facebook.ads.internal.api.NativeAdsManagerApi;
							createNativeAdScrollViewApi(param0: com.facebook.ads.NativeAdScrollView, param1: globalAndroid.content.Context, param2: com.facebook.ads.NativeAdsManager, param3: com.facebook.ads.NativeAdScrollView.AdViewProvider, param4: number, param5: com.facebook.ads.NativeAdView.Type, param6: com.facebook.ads.NativeAdViewAttributes, param7: number): com.facebook.ads.internal.api.NativeAdScrollViewApi;
							createMediaViewVideoRendererApi(): com.facebook.ads.internal.api.MediaViewVideoRendererApi;
							createDefaultMediaViewVideoRendererApi(): com.facebook.ads.internal.api.DefaultMediaViewVideoRendererApi;
							createBidderTokenProviderApi(): com.facebook.ads.internal.api.BidderTokenProviderApi;
							createAudienceNetworkAdsApi(): com.facebook.ads.internal.api.AudienceNetworkAdsApi;
							createAdSettingsApi(): com.facebook.ads.internal.api.AdSettingsApi;
							createAdSizeApi(param0: number): com.facebook.ads.internal.api.AdSizeApi;
							maybeInitInternally(param0: globalAndroid.content.Context): void;
							getInitApi(): com.facebook.ads.internal.api.InitApi;
						});
						public constructor();
						public createAudienceNetworkActivity(param0: com.facebook.ads.AudienceNetworkActivity, param1: com.facebook.ads.internal.api.AudienceNetworkActivityApi): com.facebook.ads.internal.api.AudienceNetworkActivityApi;
						public createInterstitialAd(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.InterstitialAd): com.facebook.ads.internal.api.InterstitialAdApi;
						public createNativeAdsManagerApi(param0: globalAndroid.content.Context, param1: string, param2: number): com.facebook.ads.internal.api.NativeAdsManagerApi;
						public createAdOptionsView(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout, param3: com.facebook.ads.AdOptionsView.Orientation, param4: number, param5: com.facebook.ads.AdOptionsView): com.facebook.ads.internal.api.AdOptionsViewApi;
						public createRewardedVideoAd(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.RewardedVideoAd): com.facebook.ads.internal.api.RewardedVideoAdApi;
						public createNativeAdBaseFromBidPayload(param0: globalAndroid.content.Context, param1: string, param2: string): com.facebook.ads.NativeAdBase;
						public createNativeComponentTagApi(): com.facebook.ads.internal.api.NativeComponentTagApi;
						public getInitApi(): com.facebook.ads.internal.api.InitApi;
						public createNativeAdViewApi(): com.facebook.ads.internal.api.NativeAdViewApi;
						public createMediaViewApi(): com.facebook.ads.internal.api.MediaViewApi;
						public createNativeAdApi(param0: com.facebook.ads.NativeAd, param1: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdApi;
						public createNativeBannerAdApi(param0: com.facebook.ads.NativeBannerAd, param1: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeBannerAdApi;
						public createNativeAdScrollViewApi(param0: com.facebook.ads.NativeAdScrollView, param1: globalAndroid.content.Context, param2: com.facebook.ads.NativeAdsManager, param3: com.facebook.ads.NativeAdScrollView.AdViewProvider, param4: number, param5: com.facebook.ads.NativeAdView.Type, param6: com.facebook.ads.NativeAdViewAttributes, param7: number): com.facebook.ads.internal.api.NativeAdScrollViewApi;
						public createNativeAdRatingApi(param0: org.json.JSONObject): com.facebook.ads.internal.api.NativeAdRatingApi;
						public createBidderTokenProviderApi(): com.facebook.ads.internal.api.BidderTokenProviderApi;
						public createNativeAdBaseApi(param0: globalAndroid.content.Context, param1: string): com.facebook.ads.internal.api.NativeAdBaseApi;
						public createDefaultMediaViewVideoRendererApi(): com.facebook.ads.internal.api.DefaultMediaViewVideoRendererApi;
						public createAdSizeApi(param0: number): com.facebook.ads.internal.api.AdSizeApi;
						public createAdViewApi(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.facebook.ads.internal.api.AdViewParentApi, param4: com.facebook.ads.AdView): com.facebook.ads.internal.api.AdViewApi;
						public createNativeAdImageApi(param0: org.json.JSONObject): com.facebook.ads.internal.api.NativeAdImageApi;
						public createAdViewApi(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.ads.AdSize, param3: com.facebook.ads.internal.api.AdViewParentApi, param4: com.facebook.ads.AdView): com.facebook.ads.internal.api.AdViewApi;
						public createAudienceNetworkAdsApi(): com.facebook.ads.internal.api.AudienceNetworkAdsApi;
						public createNativeAdViewAttributesApi(): com.facebook.ads.internal.api.NativeAdViewAttributesApi;
						public createNativeAdViewTypeApi(param0: number): com.facebook.ads.internal.api.NativeAdViewTypeApi;
						public createAdOptionsView(param0: globalAndroid.content.Context, param1: com.facebook.ads.NativeAdBase, param2: com.facebook.ads.NativeAdLayout, param3: com.facebook.ads.AdOptionsView): com.facebook.ads.internal.api.AdOptionsViewApi;
						public createNativeAdLayoutApi(): com.facebook.ads.internal.api.NativeAdLayoutApi;
						public maybeInitInternally(param0: globalAndroid.content.Context): void;
						public createNativeAdBaseApi(param0: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdBaseApi;
						public createMediaViewVideoRendererApi(): com.facebook.ads.internal.api.MediaViewVideoRendererApi;
						public createAdSettingsApi(): com.facebook.ads.internal.api.AdSettingsApi;
						public createNativeBannerAdViewApi(): com.facebook.ads.internal.api.NativeBannerAdViewApi;
						public createNativeAdApi(param0: com.facebook.ads.NativeAdBase, param1: com.facebook.ads.NativeAd, param2: com.facebook.ads.internal.api.NativeAdBaseApi): com.facebook.ads.internal.api.NativeAdApi;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module dynamicloading {
					export class DynamicLoaderFactory {
						public static class: java.lang.Class<com.facebook.ads.internal.dynamicloading.DynamicLoaderFactory>;
						public static LOAD_FROM_ASSETS: boolean;
						public static AUDIENCE_NETWORK_DEX: string;
						public constructor();
						public static makeLoaderUnsafe(): com.facebook.ads.internal.dynamicloading.DynamicLoader;
						public static initialize(param0: globalAndroid.content.Context, param1: com.facebook.ads.internal.settings.MultithreadedBundleWrapper, param2: com.facebook.ads.AudienceNetworkAds.InitListener, param3: boolean): void;
						public static makeLoader(param0: globalAndroid.content.Context): com.facebook.ads.internal.dynamicloading.DynamicLoader;
						public static setFallbackMode(param0: boolean): void;
						public static isFallbackMode(): boolean;
						public static makeLoader(param0: globalAndroid.content.Context, param1: boolean): com.facebook.ads.internal.dynamicloading.DynamicLoader;
						public static getDynamicLoader(): com.facebook.ads.internal.dynamicloading.DynamicLoader;
						public static setUseLegacyClassLoader(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module dynamicloading {
					export class DynamicLoaderFallback {
						public static class: java.lang.Class<com.facebook.ads.internal.dynamicloading.DynamicLoaderFallback>;
					}
					export module DynamicLoaderFallback {
						export class SimpleMethodCaptor {
							public static class: java.lang.Class<com.facebook.ads.internal.dynamicloading.DynamicLoaderFallback.SimpleMethodCaptor>;
							public mock(param0: java.lang.Class): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module settings {
					export class AdInternalSettings {
						public static class: java.lang.Class<com.facebook.ads.internal.settings.AdInternalSettings>;
						public static sSettingsBundle: com.facebook.ads.internal.settings.MultithreadedBundleWrapper;
						public static sDataProcessingOptionsUpdate: java.util.concurrent.atomic.AtomicBoolean;
						public static BOOL_MIXED_AUDIENCE_KEY: string;
						public static TEST_AD_TYPE_KEY: string;
						public static SRL_INTEGRATION_ERROR_MODE_KEY: string;
						public static DATA_PROCESSING_OPTIONS_KEY: string;
						public static DATA_PROCESSING_OPTIONS_COUNTRY_KEY: string;
						public static DATA_PROCESSING_OPTIONS_STATE_KEY: string;
						public static setVisibleAnimation(param0: boolean): void;
						public static addTestDevice(param0: string): void;
						public constructor();
						public static setTestMode(param0: boolean): void;
						public static setMediationService(param0: string): void;
						public static isExplicitTestMode(): boolean;
						public static isVideoAutoplayOnMobile(): boolean;
						public static addTestDevices(param0: java.util.Collection<string>): void;
						public static isVisibleAnimation(): boolean;
						public static isVideoAutoplay(): boolean;
						public static setUrlPrefix(param0: string): void;
						public static turnOnSDKDebugger(param0: globalAndroid.content.Context): void;
						public static setVideoAutoplay(param0: boolean): void;
						public static getMediationService(): string;
						public static isDebuggerOn(): boolean;
						public static setDebugBuild(param0: boolean): void;
						public static getTestDevicesList(): java.util.ArrayList<string>;
						public static getUrlPrefix(): string;
						public static setDataProcessingOptions(param0: native.Array<string>, param1: java.lang.Integer, param2: java.lang.Integer): void;
						public static isTestMode(param0: globalAndroid.content.Context): boolean;
						public static isDebugBuild(): boolean;
						public static clearTestDevices(): void;
						public static setVideoAutoplayOnMobile(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module settings {
					export class AdSharedPreferences {
						public static class: java.lang.Class<com.facebook.ads.internal.settings.AdSharedPreferences>;
						public static PREFS_NAME: string;
						public constructor();
						public static getSharedPreferences(param0: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module settings {
					export class MultithreadedBundleWrapper {
						public static class: java.lang.Class<com.facebook.ads.internal.settings.MultithreadedBundleWrapper>;
						public constructor();
						public getStringArray(param0: string): native.Array<string>;
						public putInteger(param0: string, param1: java.lang.Integer): void;
						public getBoolean(param0: string, param1: boolean): boolean;
						public putSerializable(param0: string, param1: java.io.Serializable): void;
						public getStringArrayList(param0: string): java.util.ArrayList<string>;
						public toBundle(): globalAndroid.os.Bundle;
						public getBoolean(param0: string): boolean;
						public getInteger(param0: string): java.lang.Integer;
						public putStringArrayList(param0: string, param1: java.util.ArrayList<string>): void;
						public getString(param0: string, param1: string): string;
						public putBoolean(param0: string, param1: boolean): void;
						public putStringArray(param0: string, param1: native.Array<string>): void;
						public reset(param0: globalAndroid.os.Bundle): void;
						public putString(param0: string, param1: string): void;
						public getSerializable(param0: string): java.io.Serializable;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module util {
					export module common {
						export class ANActivityLifecycleCallbacksListener {
							public static class: java.lang.Class<com.facebook.ads.internal.util.common.ANActivityLifecycleCallbacksListener>;
							public static ACTIVITY_CREATED: number;
							public static ACTIVITY_STARTED: number;
							public static ACTIVITY_RESUMED: number;
							public static ACTIVITY_PAUSED: number;
							public static ACTIVITY_STOPPED: number;
							public static ACTIVITY_DESTROYED: number;
							public constructor();
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public static registerActivityCallbacks(param0: globalAndroid.content.Context): void;
							public static getANActivityLifecycleCallbacksListener(): com.facebook.ads.internal.util.common.ANActivityLifecycleCallbacksListener;
							public getActivityStateMap(): java.util.Map<globalAndroid.app.Activity,java.lang.Integer>;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public static unregisterActivityCallbacks(param0: globalAndroid.content.Context): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module util {
					export module common {
						export class Preconditions {
							public static class: java.lang.Class<com.facebook.ads.internal.util.common.Preconditions>;
							public constructor();
							public static checkNotNull(param0: any, param1: string): any;
							public static checkIsTrue(param0: boolean, param1: string): void;
							public static checkIsOnMainThread(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module util {
					export module parcelable {
						export class WrappedParcelable {
							public static class: java.lang.Class<com.facebook.ads.internal.util.parcelable.WrappedParcelable>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.ads.internal.util.parcelable.WrappedParcelable>;
							public constructor(param0: native.Array<number>);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public unwrap(param0: java.lang.ClassLoader): globalAndroid.os.Parcelable;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: globalAndroid.os.Parcelable);
							public static marshallParcelable(param0: globalAndroid.os.Parcelable): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module ads {
			export module internal {
				export module util {
					export module process {
						export class ProcessUtils {
							public static class: java.lang.Class<com.facebook.ads.internal.util.process.ProcessUtils>;
							public static getProcessName(param0: globalAndroid.content.Context): string;
							public static getProcessSpecificName(param0: string, param1: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

//Generics information:

