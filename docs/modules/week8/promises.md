# Promises

Promises are a new feature added as part of the latest version of ECMAScript (JavaScript). They are widely supported across the browser platforms - http://caniuse.com/#search=promises (Links to an external site.)Links to an external site. . Internet Explorer did not support them but MS Edge does. All the other platforms - Firefox, Chrome, Safari, and Opera support them well.

So what are they? You can think of them as the new way to do callbacks whenever you want to run an asynchronous task.

The most common one of these was an AJAX call. Here is the old way of making an AJAX call.

```js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.example.com/api/call/');
xhr.addEventListener('load', myCallback);
xhr.send(null);
```

We add a listener to the xhr object waiting for the asynchronous load event. When the event happens, the function `myCallback` gets called. Remember that asynchronous means that other things can continue to happen in the browser, with the web page and the user, while waiting for the response from the server.  

Asynchronous things in JavaScript could include using setTimeout, AJAX calls, DOM events, File API, Web Workers, Service Workers, or Geolocation calls. 

Javascript is a single-threaded synchronous language. Things are designed to happen in the order that you ask them to happen. JavaScript has a stack. As it reads your commands they are put on to the stack and executed in order. However, sometimes there are things which are not part of the core JavaScript runtime and other things like the Web APIs are called on to do some work. Commands can be passed off to the Web APIs to run on another thread. Their results will come back at some time in the future that we cannot control. 

Promises are designed as a packaging system for these types of things. 

We create a Promise to hold something like an AJAX call. The Promise will come back with either a success or a failure. 

Promises have a `then( )` method to handle the success and a `catch( )` method to handle the failure.

Here is a simple example of a Promise.

```js
let p = new Promise(function(resolve, reject){
  //do something
  //if the result is good call resolve
  //if something goes wrong call reject
});

p.then(function(){ 
  //this runs when the resolve function inside the promise is called.
} ).catch(function(){
  //this runs when the reject function inside the promise is called.
});
```

Inside the Promise function you would carry out some asynchronous task. If it works then you call the function represented by the resolve variable. If it fails then you call the reject function. 

A cool thing about the Promise structure is that when you use it you can chain together a series of then methods. Each then method runs it's function and it's return value will be passed to the next `then( )` method function.

Once the Promise has been set up then you can use it. The last part shows the use of the `then( )` and the `catch( )` methods.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="mad-d" data-slug-hash="BKGoEG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Basic Promises">
  <span>See the Pen <a href="https://codepen.io/mad-d/pen/BKGoEG/">
  Basic Promises</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


The code pen above shows a simple Promise being used. It calls a setTimeout to wait and then randomly picks a number. If the number is zero then it calls the `reject` method which will trigger the `catch( )` method. Otherwise it just returns the random number to the first `then( )` method. The squared version of the number is then passed as a result to the second `then( )` method. 

 
## Built-in Promise objects

So, the basic Promise object can be used as a container for any asynchronous task you want. However, some objects are already built as Promises. 

The best example is the `fetch( )` method. This is the replacement for the `XMLHttpRequest` object. While it is not supported in all browsers, [Caniuse.com](http://caniuse.com/#search=fetch). it is supported in Chrome, Firefox, and Opera.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="mad-d" data-slug-hash="oxgLRK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="MAD9022 Fetch API">
  <span>See the Pen <a href="https://codepen.io/mad-d/pen/oxgLRK/">
  MAD9022 Fetch API</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The above code shows an example of the fetch method being used to make an AJAX call.

## Video Tutorials

<YouTube
    title=""
    url=""
/>

<YouTube
    title=""
    url=""
/>

<YouTube
    title=""
    url=""
/>

<YouTube
    title=""
    url=""
/>

<YouTube
    title=""
    url=""
/>

## More References

If you want to learn more about promises here is a great [tutorial by David Walsh](https://davidwalsh.name/promises)

Here is a short YouTube Video about Promises, using the `fetch( )` method

<YouTube
    title="Promises in Fetch"
    url="https://www.youtube.com/embed/g90irqWEqd8"
/>


<YouTube
    title="Fun Fun Function Promises"
    url="https://www.youtube.com/embed/2d7s3spWAzo"
/>


