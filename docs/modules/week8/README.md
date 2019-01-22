# 8. Canvas Media Capture, Promises, and Advanced Properties in JS

## Working with Video on Canvas

When you want to put videos on to the Canvas we can simply use the video player as the source of the data and call `context.drawImage()`. This method will also allow us to resize the image being placed. Every time you call `drawImage` you are getting another image from the video player. If you use a timer you can repeatedly grab frames from the video as it plays. The video player doesn't even have to be on the screen to play. The video player can be off screen playing the video and providing frame images.

[Learn more about creating image thumbnails](./canvas-thumbnails.md)

## Image Sizing

It is important to understand the different dimension properties of images in the browser.

[Learn more about image dimensions](./sizing-notes.md)

## Promises

You have been working with Promises for quite a while already. The `fetch` method is Promise wrapped around an AJAX call. Whenever you see a `then()` method or a `catch()` method, you are working with a Promise.

[Learn more about Promises](./promises.md)

## Media Capturing

HTML5 has a number of methods that can be used for capturing audio and video on a mobile device. Much of the functionality is related to the WebRTC API and the MediaStream API.

Additionally, there is a Media and a Media Capture plugin for Cordova. This gives us lots of options for dealing with Audio and Video on a mobile device.

[Learn more about Media Capturing](./media-capture.md)

## Property Descriptors

JavaScript `Object`s have properties. The properties can be methods, events, or just properties. However, did you know that properties have built-in properties?  You can actually control what can be done with the properties. You can set default values, make properties readable, writable and enumerable.

[Learn More about Property Descriptors](./property-descriptors.md)

## Destructuring

Another great new feature in ES6 is the ability to Destructure objects. It uses the `spread` operator and does some cool things to make our code more efficient.

[Learn more about destructuring](./destructuring.md)

