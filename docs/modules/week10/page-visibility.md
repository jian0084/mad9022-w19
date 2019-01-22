# HTML5 Page Visibility API

## Active Tab Tracking

The Page Visibility API is a pair of properties belonging to the document object that are used to determine if the current page is on an active tab or a background tab as well as the current rendering state of the page.

The first property is the hidden property, used for checking if the page is on a background tab. It has a value of true or false.

```js
if ( document.hidden ){
  console.log("The page is not active. It is on a background tab.");
} else {
  console.log("The page is on the current active tab.");
}
```

The second property is the visibilityState property. It has four possible values: hidden; visible; prerender; unloaded

```js
console.log( document.visibilityState );
//hidden - page is a background tab
//visible - current active tab
//unloaded - page is about to be unloaded
//prerender - the page is being loaded off screen
``` 

<YouTube
    title="Page Visibility API"
    url="https://www.youtube.com/embed/MxF2WKAGWVk"
/>
