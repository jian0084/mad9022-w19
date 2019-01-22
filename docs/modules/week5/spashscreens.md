# Cordova Splashscreens

Similar to the way that the icons work [Cordova App Icons](../week4/icons.md) we can add custom Splashscreens to our Cordova apps. Remember that you may need to have both portrait and landscape versions of your splashscreen, especially if you are using a graphic like a logo as part of the image.

You will want to be sure that you have multiple sizes of your splashscreen to work at all the different resolutions.

This page has the [Cordova reference for icons and splashscreens](http://cordova.apache.org/docs/en/latest/config_ref/images.html#configuring-splash-screens-in-the-cli)

```xml
<platform name="android">
   <splash src="www/screen/splash-land-hdpi.png" density="land-hdpi"/>
   <splash src="www/screen/splash-land-xxhdpi.png" density="land-xxhdpi"/>
   <splash src="www/screen/splash-land-mdpi.png" density="land-mdpi"/>
   <splash src="www/screen/splash-land-xhdpi.png" density="land-xhdpi"/>
   
   <splash src="www/screen/splash-port-hdpi.png" density="port-hdpi"/>
   <splash src="www/screen/splash-port-xxhdpi.png" density="port-xxhdpi"/>
   <splash src="www/screen/splash-port-mdpi.png" density="port-mdpi"/>
   <splash src="www/screen/splash-port-xhdpi.png" density="port-xhdpi"/>
</platform>
```

Here is a sample entry from the config.xml file that points to the different splashscreens for a project.

The file names and the density both make it clear which orientation and screen density the images are meant for. Both the splashscreen and icon images will be copied into the platforms/android/res/ folder.

Here is a look at the android res folder:

[android-res-folder.png] - image missing - 

res stands for resources. You can see that there are folders for each orientation and resolution. The names of the folders are really important. The folder names are how Android determines which images to use.

With Cordova, each time you compile your app you will be overwriting the contents of these folders with the images that the `config.xml` points to, relative to the root project folder.

 