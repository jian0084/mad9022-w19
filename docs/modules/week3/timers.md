# JavaScript Timers

There are times when you want to run some code after a delay. JavaScript has two built-in methods for doing exactly this.

## setTimeout

The `setTimeout` method will run only one time, after a minimum delay. There are a few ways that you can call it.

```js
setTimeout( myFunc, 3000);                      //call the function myFunc after 3000ms
setTimeout( function(){ alert('hi'); }, 2500);  //run the anonymous function after 2500ms
setTimeout( 'myFunc()', 1000);                  //call the function myFunc after 1 second
window.setTimeout( myFunc, 3000);                //same as first example
```

It is important to note that you can use zero as the value for the delay. This will make it run as soon as the current stack of commands in main stack are finished. Think of this as having it run as soon as the current function is completed.

## setInterval

The `setInterval` method will run repeatedly until you tell it to stop. It works the same way as the `setTimeout` except it keeps waiting for the delay and then running again.

```js
setInterval( myFunc, 3000);  //call the function myFunc after 3000ms
setInterval( function(){ alert('hi'); }, 2500);  //run the anonymous function after 2500ms
setInterval( 'myFunc()', 1000);     //call the function myFunc after 1 second
window.setInterval( myFunc, 300);   //same as first example
```

## Cancelling a Timer

When you call either method you get a value returned which will be a numeric identifier for the timer. This identifier can be passed to the `clearTimeout` or `clearInterval` methods to stop the function from being called.

```js
let timmy = setInterval( someFunc, 1234);
clearInterval(timmy);
```

While it does work for setTimeout, it is more commonly used with a setInterval to stop it being called again.

## Passing Arguments to the Timers

If you need to pass data to the function being called after the delay we can do this a few ways. We can pass extra arguments to the `setTimeout` or `setInterval` method, we can use the `bind` method to set a context and pass in arguments, or we can use an IIFE that returns a new function that will be called later.

```js
setTimeout( someFunc, 1234, 'abc', 123, true);  //3 arguments being passed to someFunc after 1234ms

setTimeout( someFunc.bind(this, 'abc', 123, true), 1234);  //same as first line

setTimeout( (function(str, num, bool){
    //this is the function that will run after 1234ms
    //the variables str, num, and bool will contain the values 'abc', 123, and true
})('abc', 123, true), 1234);
```

There is one other way that we can pass in extra arguments but it is rather awkward to write. You create a string and concatenate the function call as a string, with the variables you want to pass.

```
let str = 'abc';
let num = 123;
let bool = true;
setTimeout( 'someFunc(' + str + ',' + num + ',' + bool + ')', 1234);
```

Don't use this approach.

## Recursive Timers

We can put a `setTimeout` method call inside a function and have the method call it's containing function. This is similar to using the setInterval but we get a chance before each call to determine if we want to change the value of any arguments being passed to the function or if we want to no longer call the function.

This is known as recursively calling a function.

Here is a [CodePen with an Example](https://codepen.io/mad-d/pen/xEAwkw)
