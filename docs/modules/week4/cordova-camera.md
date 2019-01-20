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

<YouTube
    title="Cordova Camera Permissions for iOS"
    url="https://www.youtube.com/embed/mMgjaPeof5c"
/>