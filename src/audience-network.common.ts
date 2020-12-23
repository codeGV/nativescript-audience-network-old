import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
// import * as dialogs from 'tns-core-modules/ui/dialogs';

export interface fbAdsProperty {
  AD_SIZE: {
    SMART_BANNER: "SMART",
    LARGE_BANNER: "LARGE",
    BANNER: "BANNER",
    MEDIUM_RECTANGLE: "MEDIUM",
    FULL_BANNER: "FULL",
    LEADERBOARD: "LEADERBOARD",
    SKYSCRAPER: "SKYSCRAPER",
    FLUID: "FLUID"
  },
  defaults: {
    margins: {
      top: number,
      bottom: number
    },
  },
  activity: any,
  adView: any,
  interstitialView: any,
  rewardVideoView: any
}

export class Common extends Observable {

  constructor() {
    super();
  }

}

export var fbAd = {
  AD_SIZE: {
    STANDARD_BANNER: "STANDARD_BANNER",
    LARGE_BANNER: "LARGE_BANNER",
    MEDIUM_RECTANGLE: "MEDIUM_RECTANGLE",

  },
  defaults: {
    margins: {
      top: -1,
      bottom: -1
    },
  },
  activity: null,
  adView: null,
  interstitialView: null,
  rewardVideoView: null
}

export const AD_SIZE = {
  STANDARD_BANNER: "STANDARD_BANNER",
  LARGE_BANNER: "LARGE_BANNER",
  MEDIUM_RECTANGLE: "MEDIUM_RECTANGLE",
}
