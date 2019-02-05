# Cordova File, Media, & Media Capture Plugins

These three plugins have closely related functionality. It is important to understand when you would use each.

The Cordova File plugin allows you to manage the file system through a Cordova app.
[Cordova File Plugin reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html)

The Cordova Media Plugin provides the ability to **RECORD** and **PLAYBACK AUDIO** files on a device.
[Cordova Media Plugin reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media/index.html)

The Media Capture Plugin provides access to the device's **audio**, **image**, and **video** **CAPTURE** capabilities.
[Cordova Media Capture Plugin reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media-capture/index.html)

## Media Plugin

The Cordova Media Plugin will provide the necessary permissions for the user to access and play an audio file.

```js
let media = new Media(src, mediaSuccess, mediaError, mediaStatus);
```

For an Android device, if you were saving your audio files inside the `www` folder, inside a `media` folder then the path would start with `file:///android_asset/www/`.

The primary Object that you will use with this plugin is the `Media` object. When you instantiate the Media object you should pass it a source string followed by three callback methods. The first method is the one to call upon successfully finishing playing the audio file. The second method would be called if an error occurred with loading or playing the audio file. The final one lets you know whenever there is a change in the status of the media playback.

The possible values that would be sent to the mediaStatus callback method are:

```
Media.MEDIA_NONE = 0
Media.MEDIA_STARTING = 1
Media.MEDIA_RUNNING = 2
Media.MEDIA_PAUSED = 3
Media.MEDIA_STOPPED = 4
```

You can use this callback and the numbers as logic in your program to decide if you want to do something like play another track.

When the error function runs, it will receive a number that represents the reason for the failure. The numbers and values are as follows.

```
MediaError.MEDIA_ERR_ABORTED = 1
MediaError.MEDIA_ERR_NETWORK = 2
MediaError.MEDIA_ERR_DECODE = 3
MediaError.MEDIA_ERR_NONE_SUPPORTED = 4
```


# Media Object Methods

Once you have instantiated a `Media` object then you can use the provided methods to control the media file.

[Media Object Method Reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media/index.html#methods)

- media.getCurrentAmplitude(): Returns the current amplitude within an audio file.
- media.getCurrentPosition(): Returns the current position within an audio file.
- media.getDuration(): Returns the duration of an audio file in SECONDS.
- media.play(): Start or resume playing an audio file.
- media.pause(): Pause playback of an audio file.
- media.pauseRecord(): Pause recording of an audio file.
- media.release(): Releases the underlying operating system's audio resources.
- media.resumeRecord(): Resume recording of an audio file.
- media.seekTo(): Moves the position within the audio file. Use MILLISECONDS.
- media.setVolume(): Set the volume for audio playback.
- media.startRecord(): Start recording an audio file.
- media.stopRecord(): Stop recording an audio file.
- media.stop(): Stop playing an audio file.

# Media Object Properties

There are also two properties of the `Media` object. They are READ ONLY though.

- position: the current position in the media file
- duration: the length of the media file

Use the `media.seekTo(ms)` method to move around the file. Use a **millisecond** value.

## Important Note for Android

When you are finished playing an audio file on Android, be sure to call the `media.release()` method to free system memory.

