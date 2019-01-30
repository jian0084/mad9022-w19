# Cordova Camera Plugin

Cordova has a Camera plugin that allows us to use JavaScript to take and save pictures and videos from our webpages. The plugin we need to add is:

```
cordova plugin add cordova-plugin-camera
```

There are not that many methods and properties to learn. However, there are a few gotchas and things to be aware of. 

First, iOS Simulators will **NOT** allow you to access the camera.

Second, be aware that there are two similarly named Objects in the plugin. `camera` and `Camera` are both objects but they have different purposes.

If you are working with iOS then you need to be careful about the additional permissions that are required for the plugin. See the second video below for details on this.

[Camera Plugin Reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-camera/index.html)

<YouTube
    title="Cordova Camera Plugin"
    url="https://www.youtube.com/embed/jlL1RuW9Kiw"
/>

[Code Gist from the Camera video](https://gist.github.com/prof3ssorSt3v3/75092fbba5428fb9369fa02b75fa73b2)

<YouTube
    title="Cordova Camera Permissions for iOS"
    url="https://www.youtube.com/embed/mMgjaPeof5c"
/>

Here is the sample permission install that you need for iOS. Note that there are two permissions. The first one is for general use of the Camera. The second is for being able to access the PhotoLibrary.

```
cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="your usage message"  --variable PHOTOLIBRARY_USAGE_DESCRIPTION="your usage message"
```

## Saving the Camera Image

After you take a picture with the Android Emulator Camera, if you have selected `Camera.destinationType.FILE_URI` as the result from calling the camera, then you will get back a string that looks something like this:

```
file:///storage/emulated/0/Android/data/ca.edumedia.griffis.cordcam/cache/1548683871642.jpg
```

Things to note about this path:

- it starts with `file:///`.
- Your `package name` is part of the path. This is where your application is installed on the device / emulator.
- The `cache` folder is where it is saved by default.
- If you have the `cordova-plugin-file` installed then you can use `cordova.file.cacheDirectory` as a reference property for that cache folder.
- To permanently store images or videos or other files we would use `cordova.file.dataDirectory` as the folder which is private to the application but considered permanent storage.

## Sample Options for the Camera

When you are calling the `getPicture()` method there are lots of possible options that you can pass to the method as the third parameter. Here is a sample.

```js
let options = {
  quality: 80,
  destinationType: Camera.DestinationType.FILE_URI,
  encodingType: Camera.EncodingType.PNG,
  mediaType: Camera.MediaType.PICTURE,
  sourceType: Camera.PictureSourceType.CAMERA,
  allowEdit: true,
  targetWidth: 300,
  targetHeight: 300
}
```


## Potential Issues

When taking a picture on Android, it is possible for some devices to lack sufficient memory to keep your app in the background while taking and saving a picture. 

All Cordova apps have `pause` and `resume` events that we can listen for. When an app is shut down by the user or the system it will fire the `pause` event. When it is brought back to life, the `resume` event will fire. 

For Cameras taking pictures it means we might need to use the resume event to capture the image coming back from the Camera app and then pass it to our Camera success callback ourselves.

Here is [an example of this code](https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html#example)

<YouTube
    title="Cordova pause and resume events"
    url="https://www.youtube.com/embed/FfYXu-lhQ_A"
/>

### Additional Issue on iOS

There is also a method on iOS that you can call to clean up temporary image files that may have been created when you are taking a pictures and returning a file URI.

```js
navigator.camera.cleanup( successCallback, errorCallback );
```
