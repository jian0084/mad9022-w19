# Cordova File Assets

When you are working with file assets in a Cordova app, like sounds, you will often see documentation about a folder called `android_asset`. The folder android_asset refers to the project's root folder.

```
file:///android_asset/www/sound/mySound.mp3
```

The link above would be pointing to an mp3 file that is inside of a sound folder that is inside the `www` folder which sits at the root of your project.

When you `build` your cordova project the contents of your `www` folder get copied to  `/platforms/android/assets/www/`. So, `file:///android_asset/www` is actually pointing to that copied version of the folder.

Cordova has a `File` plugin which will allow you to access the File System on the device, and manage files and folders. [Cordova File Plugin reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html)

When working with Android apps the path can be relative when working with things like images or sounds.

```html
<img src="./img/myPhoto.jpg" />
```

This image is pointing to a JPG that is in a folder called `img` that sits at the same level as the HTML file containing this tag.

Another type of asset link will start with the http protocol.

```html
<img src="http://www.example.com/img/photo.jpg" />
```

For all of these we need to be sure that we are adding these to the `content-security-policy` meta tag too.

 

When you are playing Sound files you should be using a Media object in your scripts or `<audio>` and `<source>` tags in your HTML. These can use relative paths too. It is also recommended that you have the `cordova-plugin-media` plugin in order to play the sounds.

[Cordova Media Plugin Reference](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media/)

`file///android_asset/www/sound/errorSound.mp3` If you want to provide a full absolute path then you should start your URL with `file:///`. Note the THREE forward slashes.

```
file:///android_asset/www/img/myPhoto.jpg
file:///android_asset/www/sound/mySound.mp3
``` 

One other type of URI is the `res://` protocol. Anything that starts with `res://` will be relative to 

**iOS** - the `Resources/` folder

**Android** - the `res/drawable/` folder inside `/platforms/android/`

 
## Checking the Platform

If was a requirement in your app to check on which OS you were loading the files then you should include the `cordova-plugin-device` plugin. That way we can check and set the proper URL protocols.

```js
var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';
```

This example shows a ternary operator check to see if the device platform is Android or not. If it is Android then `file://sound.mp3` will be saved inside the variable sound. If not Android, then `file://beep.caf` will be saved in the variable.

The [device plugin reference](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/index.html)

<YouTube
    title="Cordova Device Plugin"
    url="https://www.youtube.com/embed/WyjmmDWqmzk"
/>
