# Cordova Status Bar

When using some mobile CSS frameworks, you can end up in a situation where your content at the top of the page is conflicting with the built-in iOS or Android status bar.

Luckily, Cordova comes with a standard plugin that lets us change the appearance of the status bar's background or even make the status bar disappear entirely.

## Installing the Plugin

Like all Cordova plugins, you need to have the terminal open and be inside the root folder of your project. Then use the cordova command to add the plugin. For the Status Bar control:

```
cordova plugin add cordova-plugin-statusbar
```

## Default Values

To set up a default colour or appearance for the status bar, once you have the plugin installed you can add lines to the config.xml file such as:

```xml
<preference name="StatusBarOverlaysWebView" value="true" />
<preference name="StatusBarBackgroundColor" value=""#000000" />
```

## Controlling the Status Bar with JavaScript

After the deviceready event fires and your app is running we can make the bar appear or disappear with the show and hide methods. We can also determine whether it is showing with the isVisible property.

```js
if (StatusBar.isVisible) {
    StatusBar.hide( );
}else{
    StatusBar.show( );
}
``` 

## Resources & References

[Cordova StatusBar Reference](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-statusbar/index.html)