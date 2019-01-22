# Favicons & Launcher Icons

The icons that you see in your browser tabs, bookmarks, and favourites are called favicons. 

Typcially they are stored at the root level of your website and browsers will automatically search for a favicon.ico file to use. After IE8 the icon file no longer had to be an .ico file. PNGs and GIFs work too. PNGs work best if you have any transparency in the icon.

If you wanted to use a file from any other location or with any other name you would but you needed to add a link tag to the head of your webpages like this.

```html
<link rel="icon" type="image/png" href="/shortcut.png" />
```

Now that there are a variety of different browsers and devices that will use the favicons not just for tabs but also for launcher icons it means that we need icons in a variety of different sizes. We could use a single icon and allow the devices to resize it. However, this will only lead to poor quality icons on most devices.

Instead we need to create optimized versions at all these different sizes. See below for the dimensions, naming conventsions, and the different link tags.

```html
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon-194x194.png" sizes="194x194">
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
<meta name="theme-color" content="#ffffff">
```

Here is [a great site](http://realfavicongenerator.net/) that will do the icon resizing and generating of the code for you. 

You can upload your image and then fill out all the details for the different versions you want. The final HTML will be generated along with a package of all the icons.

There will also be code samples that you can use for tools like Grunt and Gulp, if you use those.

## Cordova App Icons
When building an application with Cordova you get the default launcher icons with the Cordova logo. That is fine when you are building a demo version or you are experimenting with Cordova functionality. However, when you start to build things that you want to share with the world then you need to create your own icons.

See [this page about sizing for Android icons](http://www.creativefreedom.co.uk/icon-designers-blog/android-4-1-icon-size-guide-made-simple/)

The above link talks about what sizes you need to use for your icons. It also talks about some of the design guidelines for creating launcher icons for Android. Here is the [official Android Developer guide to designing icons](https://developer.android.com/design/style/iconography.html) The Android guide talks about icons for all different locations in your app, not just the launcher icons.

 

## Cordova Launcher Icons

Once you have all your icons in the various sizes then we need to add them to our Cordova project in the appropriate location and add the appropriate tags to the config.xml file so that they get loaded.

Here is the [Cordova reference for adding icons](http://cordova.apache.org/docs/en/latest/config_ref/images.html)

We are going to be adding xml elements to the config.xml file for each platform to target the icons we want.

```xml
<platform name="android">
  <icon src="www/icons/ic_launcher-mdpi.png" density="mdpi" />
  <icon src="www/icons/ic_launcher-hdpi.png" density="hdpi" />
  <icon src="www/icons/ic_launcher-xhdpi.png" density="xhdpi" />
  <icon src="www/icons/ic_launcher-xxhdpi.png" density="xxhdpi" />
</platform> 
``` 

The `src` attribute points to the location for each of the icons. The `density` attribute tells Android when it should try to use each of the icons. If you omit the density and only put one icon tag then Android will scale it as best it can to the different sizes. All the paths will start at the root level of your app folder. You can put them in a new folder or inside your www. When the app is compiled these icons will be copied into the appropriate place in the platform folder.

Notice how the files are named to match the target resolutions.

The paths for the src attribute are relative to the location of the config.xml file. This means that they are relative to the project root.

Note: Sometimes the device or the emulator can cache the old icons. Uninstalling the old version of the app and installing the new one with the new icons is the best way to avoid this problem.

 

## iOS Icons

Check the Cordova config.xml documentation page link for an example of the icons for iOS. You will see that there are a lot more for iOS than Android.

[Cordova config.xml reference](http://cordova.apache.org/docs/en/latest/config_ref/images.html)

```xml
<platform name="ios">
    <!-- iOS 8.0+ -->
    <!-- iPhone 6 Plus  -->
    <icon src="res/ios/icon-60@3x.png" width="180" height="180" />
    <!-- iOS 7.0+ -->
    <!-- iPhone / iPod Touch  -->
    <icon src="res/ios/icon-60.png" width="60" height="60" />
    <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
    <!-- iPad -->
    <icon src="res/ios/icon-76.png" width="76" height="76" />
    <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
    <!-- iOS 6.1 -->
    <!-- Spotlight Icon -->
    <icon src="res/ios/icon-40.png" width="40" height="40" />
    <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
    <!-- iPhone / iPod Touch -->
    <icon src="res/ios/icon.png" width="57" height="57" />
    <icon src="res/ios/icon@2x.png" width="114" height="114" />
    <!-- iPad -->
    <icon src="res/ios/icon-72.png" width="72" height="72" />
    <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
    <!-- iPhone Spotlight and Settings Icon -->
    <icon src="res/ios/icon-small.png" width="29" height="29" />
    <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
    <!-- iPad Spotlight and Settings Icon -->
    <icon src="res/ios/icon-50.png" width="50" height="50" />
    <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
</platform>
 ```

## References

[PhoneGap reference for icons for all mobile platforms](https://github.com/phonegap/phonegap/wiki/App-Icon-Sizes)

[Material Design reference for building icons](https://www.google.com/design/spec/style/icons.html#icons-product-icons)

[iOS Design Guidelines for mobile icons](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Iconography.html#//apple_ref/doc/uid/TP40006556-CH59-SW1)

[Reference for icon sizes for iOS](http://mrgan.tumblr.com/post/708404794/ios-app-icon-sizes)

[Cordova reference for icons in Cordova Apps](https://cordova.apache.org/docs/en/latest/config_ref/images.html)

[Reference for Android Icon Sizes](https://www.creativefreedom.co.uk/icon-designers-blog/android-4-1-icon-size-guide-made-simple/)