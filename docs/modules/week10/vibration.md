# HTML5 Vibration API

## HTML5 Sensor APIs

Cordova | PhoneGap is a tool that lets us access native capabilities on mobile devices. That is great news for web developers looking to increase the functionality of their web apps.

However, the mission of the people who work on Cordova | PhoneGap is to make it obsolete by pushing the device manufacturers to support new HTML APIs for all the native capabilities. There has been a lot of work done on the Sensory APIs by the W3C.  [For more info](http://www.w3.org/2009/dap/).

Two of the APIs that are part of the Sensor specification are `Vibration` and `Battery`. Note: the Battery API is being put on hold due to security concerns.

We can now use JavaScript to make the device vibrate. 

Here is a link to get you started with the Vibration APIs.

[Sitepoint Vibration Tutorial](http://www.sitepoint.com/use-html5-vibration-api/).

It's a fairly straightforward API. The `window.navigator` object has a `vibrate( )` method that requires an amount of time, in milliseconds, to vibrate.

```js
// Vibrate once for 3 seconds
navigator.vibrate(3000);
``` 

### Sustainability

Just bear in mind that the vibration is something that will kill a battery fairly quickly.

<YouTube
    title="Vibration API"
    url="https://www.youtube.com/embed/_y3idhPui4Y"
/>