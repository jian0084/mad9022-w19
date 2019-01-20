# Throwing and Catching Errors and Exceptions in JavaScript

An `Error` is something which occurs in your script that the JavaScript engine does not know how to handle.

`If..else` blocks test for and compare values.

`Try..catch` blocks attempt to run some code with the understanding that there may be an Error. There are times when you want to attempt some code which may end up in an Error.

[MDN throw reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

So, if it is possible to write code that listens for and handles errors then why not take advantage of that capability and create our own custom Errors? Write if statements that compare values and if you don't get the correct answer then Throw your own Exceptions. 

The `catch` part of the `Try..Catch` block "catches" Exceptions that are "Thrown".

```js
try{
  var num = 5;
  7 = num;
  //this will fail because you cannot change the value of the number 7 to be equal to anything else
} catch (err) {
  //in here we CATCH the Error that was THROWN in the Try block.
  //the variable err will hold our error so we can access it's details
  //The err object will contain four properties - name, message, pageNumber, and lineNumber.
  //The name property tells you which of the seven types of errors occurred.
  //The message property tells you what the problem was.
  //the pageNumber and lineNumber properties tell you the file name and line number which threw the error.
}
``` 

## Finally

There is a third clause that can be added to your Try Catch block. It is called finally.

```js
try{
  //code you are attempting goes here
}catch( err ){
  //code that runs if an error is thrown goes here
}finally{
  //this code runs regardless of whether or not the error is thrown.
}
```
 
## Creating and Throwing an Error

To create a generic type of Error just write this:

```js
var e = new Error( );
```

The variable `e` now holds an `Error` object. If we want to `Throw` the `Error`, which will make the browser stop running scripts on the current page, then do this:

```js
throw e;
```

We can also combine these two steps into a single line of code:

```js
throw new Error( );
```

## Error Types

There are seven error types in Javascript.

```
Error - Generic error from which all other Error Types are created.
SyntaxError - mistake in how your code is written.
ReferenceError - tried to reference a variable that is not declared.
TypeError - an unexpected datatype that cannot be converted to something useful for the current context.
RangeError - Number not in acceptable range.
URIError - URI methods used incorrectly.
EvalError - eval function used incorrectly.
``` 

## Creating a Custom Error

There are standard types of Errors that JavaScript will Throw. The standard types are `SyntaxError`, `RangeError`, `ReferenceError`, `TypeError`, `EvalError`, `URIError`, and `InternalError`.

However, if you want to create your own type of `Error` then we need to extend the generic `Error` object's prototype and give it at least a name. We will create a function that uses the new operator to create the `Error` Object which will extend the prototype of the generic `Error` object. 

```js
function MondayError ( _message ) {
  this.message = _message;
  this.stack = ( new Error() ).stack;
}
MondayError.prototype = Object.create(Error.prototype);
MondayError.prototype.name = "MondayError";
//now we have a MondayError object that we can instantiate whenever we need
```

Once we have this custom `MondayError` object we can use it and Throw it anywhere in our code that we want or need.

```js
var date = new Date();
var day = date.getDay( );  //0 - Sunday, 1 - Monday, 2 - Tuesday, ...

try {
  if ( day === 1 ) {
    throw new MondayError("I hate Mondays");
  }
} catch (err ) {
  console.log( err.name + " - " + err.message );
}
```

## Error Event Handling

An alternative way that you can handle ALL errors on your page is by adding an event listener for the `onerror` event. Typically we would want to use `addEventListener` to add the error listener. However, this can be unpredictable in some browsers. So, we will fallback on the older method of adding event listeners.

```js
window.onerror = function(msg, url, line){
  //msg is the error message
  //url is the page where the error occurred
  //line is the line number where the error occurred
  return true;
}
``` 

We can add any code that we want inside of our error handling function but be sure to add a return true at the end. This will stop the error being thrown to the browser, which will kill all the other scripts running on the page.

Here is an [example page on CodePen(http://codepen.io/mad-d/pen/QwGzLy/?editors=101) showing how to use this instead of a try catch block. 
 
<YouTube
  title="Handling Global Errors"
  url="https://www.youtube.com/embed/KD4Znk9KsL4"
/>
 
 <YouTube
  title="Debugging tips, tricks, and best practices"
  url="https://www.youtube.com/embed/-rxYde_ESxA"
 />