# HTML5 Screen Orientation API

Detecting what orientation your screen is in and when a change takes place to the screen orientation is a very important thing for mobile web apps and hybrid apps. Very often you will want to change the layout of your pages if the orientation changes. The old version was known as device orientation.

There have been some recent changes to the Screen Orientation API. Once again, I will point you to Sitepoint to explain the details. 

[Sitepoint tutorial](http://www.sitepoint.com/screen-orientation-api-reloaded/)

The API for Screen Orientation has recently been changed. This page talks about the latest version of the API.


## Determining the Current Orientation

The new API provides four different orientations plus an angle of rotation for the screen. Beyond just the portrait and landscape orientation are the primary and secondary versions of each which indicate whether or not the device is upside down too. The possible values for orientation are: portrait-primary, portrait-secondary, landscape-primary, landscape-secondary, portrait, landscape, default

```js
let prefix = 'orientation' in screen ? '' :
             'mozOrientation' in screen ? 'moz' :
             'msOrientation' in screen ? 'ms' :
             null;

let orientationProperty = ((!prefix) ? 'o' : prefix + 'O') + 'rientation';
```

Because this is still an experimental technology it means that some browsers use prefixes for the orientation property. orientation, mozOrientation, or msOrientation are all possible properties in the screen object. The above code snippet tests for all three possible values and saves the result in the variable prefix. With this variable we can determine if orientation is supported in the browser, and if so, which property we need to use. 

If prefix is null then it means that orientation is not supported in the current browser.

Next, create a string that will contain the proper name of the property for you to use.

```js
if ( prefix && (orientationProperty in screen) && ('angle' in screen[orientationProperty]) ) {
  /* this means that the NEW version of the Orientation API is supported. */
  console.log("The current orientation is " + screen.orientation.type);
}
``` 

## Listening for Changes in Orientation

There is a single event for us to listen for - change. We work with it as we would any other event, like click. The event can only happen to the window.screen.orientation object.

```js
screen.orientation.addEventListener("change", function(){
   console.log("The current orientation is " + screen.orientation.type);
});
``` 

## Locking the Screen's Orientation

Sometimes you will want to create a web site or web app that will refuse to change it's orientation. Now, this is not something that you typically do for every website but there will be times.

The main method to try and lock the screen is

```js
let success = window.screen.orientation.lock(orientation);
```

In this example, the variable orientation represents one of the possible values for orientation. If you use this method then make sure you test to see if the browser supports window.screen.orientation first.

The call to the method will return a true or false depending on whether or not it was successful in it's attempt.

So, as an example, if we wanted to lock the screen so that it could only stay in landscape orientation then we would use this:

```js
screen.lock('landscape');
```

If we wanted to lock it down to landscape but only one of the two landscape orientations then we would use this:

```js
screen.lock('landscape-primary');
```

This is the version for the new API. The old version used `screen.lockOrientation( )`.

 
<YouTube
    title="Screen Orientation API"
    url="https://www.youtube.com/embed/FujzCfH7Gzo"
/>