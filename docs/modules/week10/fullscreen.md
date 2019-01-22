# HTML5 Full Screen API

While talking about screen orientation we should also consider the ability of browsers to programmatically go to full screen.

`document.documentElement.requestFullScreen();`

Current security restrictions state that a user action must be the thing that triggers the change to full screen.

```js
let elem = document.documentElement;
elem.addEventListener("click", function(){
  if (elem.requestFullscreen) {
    console.log('requestFullscreen');
    elem.requestFullscreen();
 
  } else if (elem.msRequestFullscreen) {
    console.log('msRequestFullscreen');
    elem.msRequestFullscreen();
 
  } else if (elem.mozRequestFullScreen) {
    console.log('mozRequestFullScreen');
    elem.mozRequestFullScreen();
 
  } else if (elem.webkitRequestFullScreen) {
    console.log('webkitRequestFullScreen');
    elem.webkitRequestFullScreen();
  }
});
```

This code snippet shows the versions that work for the different browsers.

NOTE: While the official spec uses the name "Fullscreen", the spelling varies between the methods with some of them using a `capital "S"`.

<YouTube
    title="Fullscreen API"
    url="https://www.youtube.com/embed/aEpQxlKDbwU"
/> 

[Official w3c API documentation](http://www.w3.org/TR/screen-orientation/)

