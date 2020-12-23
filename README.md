<!-- # nativescript-audience-network

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

Then describe what's the purpose of your plugin.

In case you develop UI plugin, this is where you can add some screenshots.

## (Optional) Prerequisites / Requirements

Describe the prerequisites that the user need to have installed before using your plugin. See [nativescript-firebase plugin](https://github.com/eddyverbruggen/nativescript-plugin-firebase) for example.

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-audience-network
```

## Usage

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.

	```javascript
    Usage code snippets here
    ```)

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |

## License

Apache License Version 2.0, January 2004 -->

# nativescript-audience-network

<!-- [![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-admob.svg
[npm-url]:https://npmjs.org/package/nativescript-admob
[downloads-image]:http://img.shields.io/npm/dm/nativescript-admob.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen -->

## Installation

From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-audience-network
```

#### iOS currently not supported

### Android

## BANNER

<!-- If you want a quickstart, [clone our demo app](https://github.com/EddyVerbruggen/nativescript-admob-demo). -->

Here are the supported functions:

### createBanner

#### TypeScript

```typescript
import * as AudienceNetwork from 'nativescript-audience-network';
import { isIOS } from "tns-core-modules/platform";

export class HomeComponent implements OnInit {


  ngOnInit(): void {
    
    // Init audienceNetwork SDK here.
    AudienceNetwork.initAds();
  }

  testing = true;
  createBanner() {
    let option: CreateBannerOptions = {
      // global test banner id
      androidBannerId: "<Your audience network banner id>",
      margins: {
        bottom: 10,
        // top:10
      },
      testing: true,
      size: AD_SIZE.STANDARD_BANNER,
    };
    AudienceNetwork.createBanner(option).then(
      () => (this.message = "Banner created"),
      (error) => (this.message = "Error creating banner: " + error)
    );
  }
}
```

<!-- ### hideBanner

NOTE: If you want to show a different banner than the one showing you don't need to call `hideBanner`
since `createBanner` will do that for you to prevent your app from crashing.

```js
// the .then(.. bit is optional btw
admob.hideBanner().then(
  function () {
    console.log("admob hideBanner done");
  },
  function (error) {
    console.log("admob hideBanner error: " + error);
  }
);
``` -->

## INTERSTITIAL

To show a fullscreen ad, you can use this function. Note that Interstitial banners need to be loaded before
they can be shown, and there are two ways to do that:

### preloadInterstitial

Use this for instance while loading your view, so it's ready for the moment you want to actually show it (by calling `showInterstitial`).



```typescript
preloadInterstitial(){
    let option: CreateInterstitialOptions = {
            "androidInterstitialId": "<Your audience network Interstitial id>",
            "testing": true,
            "onAdClosed": this.onInterstitialClosed.bind(this),
            "onAdClicked": this.onInterstitialClicked.bind(this)
    }
    AudienceNetwork.preloadInterstitial(option).then(
     ()=> {
      console.log(
        "interstitial preloaded - you can now call 'showInterstitial' whenever you're ready to do so"
      );
    }, (error)=> {
      console.log("preloadInterstitial error: " + error);
    }
  );
  }
  onInterstitialClosed() {
      console.log("ad closed");
  };
  onInterstitialClicked() {
      console.log("ad clicked");
  }

```

### showInterstitial

At any moment after `preloadInterstitial` successfully resolves, you can call `showInterstitial`.

Note that when you want to use `showInterstitial` again, you also have to use `preloadInterstitial` again because those ads can't be reused.

```typescript
 showInterstitial(){
    AudienceNetwork.showInterstitial()
 }

```

### preloadRewardedVideoAd

Use this for instance while loading your view, so it's ready for the moment you want to actually show it (by calling `showRewardedVideoAd`).

```typescript
 preloadRewardedVideoAd(){
    let option = {
      androidAdPlacementId: "<Your audience network RewardedVideo id>"
    }
    AudienceNetwork.preloadRewardedVideoAd(option).then(()=> {
      console.log(
        "RewardedVideoAd preloaded - you can now call 'showRewardedVideoAd' whenever you're ready to do so"
      );
    },(error)=> {
      console.log("preloadRewardedVideoAd error: " + error);
    }
  );
 }

```

### showRewardedVideoAd

At any moment after `preloadRewardedVideoAd` successfully resolves, you can call `showRewardedVideoAd`.

Note that when you want to use `showRewardedVideoAd` again, you also have to use `preloadRewardedVideoAd` again because those ads can't be reused.

onRewarded is probably the only callback you need to worry about.

```typescript
 showRewardedVideoAd(){
   let option: ShowRewardedOptions = {
        "onRewardedVideoAdClosed":this.onRewardedVideoAdClosed.bind(this),
        "onRewardedVideoAdOpened":this.onRewardedVideoAdOpened.bind(this),
        "onRewardedVideoCompleted":this.onRewardedVideoCompleted.bind(this),

      }
    AudienceNetwork.showRewardedVideoAd(option)
 }
  onRewardedVideoAdClosed(){
    console.log("onRewardedVideoAdClosed")
  }

  onRewardedVideoAdOpened(){
    console.log("reward clicked")
  }
  onRewardedVideoCompleted(){
    console.log("reward complete")
  }
```
