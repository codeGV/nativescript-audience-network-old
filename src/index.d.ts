import { Common } from './audience-network.common';



declare module "nativescript-audience-network" {

  export function initAds(__this:any): void;
  export function createBanner(option: CreateBannerOptions): Promise<any>;
  export function preloadInterstitial(option: CreateInterstitialOptions): Promise<any>;
  export function showInterstitial(): Promise<any>;
  export function preloadRewardedVideoAd(option: CreateRewardedOptions): Promise<any>;
  export function showRewardedVideoAd(options: ShowRewardedOptions): Promise<any>;


  export enum AD_SIZE {
    STANDARD_BANNER,
    LARGE_BANNER,
    MEDIUM_RECTANGLE
  }
  export interface CreateBannerOptions {


    /**
     * The layout of the banner.
     * Default AD_SIZE.SMART_BANNER
     */
    size?: AD_SIZE;

    /**
     * When false (default) you'll get real banners.
     */
    testing?: boolean;

    /**
     * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
     */
    androidBannerId?: string;

    /**
     * Something like "ca-app-pub-XXXXXX/YYYYYY".
     */
    iosBannerId?: string;

    /**
     * If testing is true, the simulator is allowed to receive test banners.
     * Android automatically add the connceted device as test device, but iOS does not.
     * If you also want to test on real devices, add it here like this:
     *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
     */
    iosTestDeviceIds?: string[];

    /**
     * The number of pixels from the top/bottom of the view antural
     * position of this banner size (type).
     * The plugin corrects for display density, so don't worry about that.
     *
     * If both are set, top wins.
     */
    margins?: {
      /**
       * Default: -1 (ignored).
       */
      top?: number;

      /**
       * Default: -1 (ignored).
       */
      bottom?: number;
    },

  }

  export interface CreateInterstitialOptions {
    /**
     * When false (default) you'll get real banners.
     */
    testing?: boolean;

    /**
     * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
     */
    androidInterstitialId?: string;

    /**
     * Something like "ca-app-pub-XXXXXX/YYYYYY".
     */
    iosInterstitialId?: string;

    /**
     * If testing is true, the simulator is allowed to receive test banners.
     * Android automatically add the connceted device as test device, but iOS does not.
     * If you also want to test on real devices, add it here like this:
     *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
     */
    iosTestDeviceIds?: string[];


    /**
     * Invoked when the user closes the interstitial.
     */
    onAdClosed?: () => void;
    onAdClicked?: () => void;
  }

  export interface CreateRewardedOptions {
    /**
     * When true you'll use googles testing iosAdPlacementId and androidAdPlacementId.
     */
    testing?: boolean;

    /**
     * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
     */
    androidAdPlacementId?: string;

    /**
     * Something like "ca-app-pub-XXXXXX/YYYYYY".
     */
    iosAdPlacementId?: string;

  }

  export interface ShowRewardedOptions {
    onRewardedVideoAdLeftApplication?: () => void;
    onRewardedVideoAdClosed?: () => void;
    onRewardedVideoAdOpened?: () => void;
    onRewardedVideoStarted?: () => void;
    onRewardedVideoCompleted?: () => void;
  }
}
// export declare class AudienceNetwork extends Common {
//   // define your typings manually
//   // or..
//   // take the ios or android .d.ts files and copy/paste them here
//   initAds(): void;
//   createBanner(option: CreateBannerOptions): Promise<any>;
//   preloadInterstitial(option: CreateInterstitialOptions): Promise<any>;
//   showInterstitial(): Promise<any>;
//   preloadRewardedVideoAd(option: CreateRewardedOptions): Promise<any>;
//   showRewardedVideoAd(options: ShowRewardedOptions): Promise<any>;
// }

// export enum AD_SIZE {
//   STANDARD_BANNER,
//   LARGE_BANNER,
//   MEDIUM_RECTANGLE
// }
// export interface CreateBannerOptions {


//   /**
//    * The layout of the banner.
//    * Default AD_SIZE.SMART_BANNER
//    */
//   size?: AD_SIZE;

//   /**
//    * When false (default) you'll get real banners.
//    */
//   testing?: boolean;

//   /**
//    * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
//    */
//   androidBannerId?: string;

//   /**
//    * Something like "ca-app-pub-XXXXXX/YYYYYY".
//    */
//   iosBannerId?: string;

//   /**
//    * If testing is true, the simulator is allowed to receive test banners.
//    * Android automatically add the connceted device as test device, but iOS does not.
//    * If you also want to test on real devices, add it here like this:
//    *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
//    */
//   iosTestDeviceIds?: string[];

//   /**
//    * The number of pixels from the top/bottom of the view antural
//    * position of this banner size (type).
//    * The plugin corrects for display density, so don't worry about that.
//    *
//    * If both are set, top wins.
//    */
//   margins?: {
//     /**
//      * Default: -1 (ignored).
//      */
//     top?: number;

//     /**
//      * Default: -1 (ignored).
//      */
//     bottom?: number;
//   },

// }

// export interface CreateInterstitialOptions {
//   /**
//    * When false (default) you'll get real banners.
//    */
//   testing?: boolean;

//   /**
//    * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
//    */
//   androidInterstitialId?: string;

//   /**
//    * Something like "ca-app-pub-XXXXXX/YYYYYY".
//    */
//   iosInterstitialId?: string;

//   /**
//    * If testing is true, the simulator is allowed to receive test banners.
//    * Android automatically add the connceted device as test device, but iOS does not.
//    * If you also want to test on real devices, add it here like this:
//    *   ["ce97330130c9047ce0d4430d37d713b1", ".."]
//    */
//   iosTestDeviceIds?: string[];


//   /**
//    * Invoked when the user closes the interstitial.
//    */
//   onAdClosed?: () => void;
//   onAdClicked?: () => void;
// }

// export interface CreateRewardedOptions {
//   /**
//    * When true you'll use googles testing iosAdPlacementId and androidAdPlacementId.
//    */
//   testing?: boolean;

//   /**
//    * Something like "ca-app-pub-AAAAAAAA/BBBBBBB".
//    */
//   androidAdPlacementId?: string;

//   /**
//    * Something like "ca-app-pub-XXXXXX/YYYYYY".
//    */
//   iosAdPlacementId?: string;

// }


// export interface ShowRewardedOptions {
//   onRewardedVideoAdLeftApplication?: () => void;
//   onRewardedVideoAdClosed?: () => void;
//   onRewardedVideoAdOpened?: () => void;
//   onRewardedVideoStarted?: () => void;
//   onRewardedVideoCompleted?: () => void;
// }
