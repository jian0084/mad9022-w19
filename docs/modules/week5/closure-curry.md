# Closures and Currying

## Closures

Now, let's get back to what the purpose of this page was - to explain what a closure really is. First I want to show you an example of what a closure looks like. Then we will look at code that you would expect to work but it doesn't work as a expected because no closure exists. Finally we will look at how to fix the practical code with closures.

```js
var foo = function ( msg ){
  return {
    say_msg: function ( ) {
      return msg;
    }
  };
};

var bar = foo("Hello World");

console.log( bar.say_msg( )  );
```

This is a closure. Not a useful one, but a closure all the same. The `function` `foo` accepts a parameter `msg` and then returns an object that contains a `function` called `say_msg`. The `function say_msg` returns the string that was passed to the function `foo`.

`say_msg` has access to the variable `msg` that was created within the scope of the function `foo`, because `say_msg` was created within the same `scope`.

The variable `bar` is assigned the return value from the function `foo`, which is the function `say_msg`.

In the final line of our code the function `say_msg`, which is now a property (object) inside of `bar`, is called. It doesn't matter that the other function is being called later. Nothing needs to be passed to `say_msg` because it has access to the variable msg that existed in the same scope when it was declared. `Closure`.

## FAILED Closure in Practical Example

Let's create a function that creates a series of paragraph nodes, writes filler text as the innerHTML of each, then adds a click handler to each paragraph which will console log the index number.

[This Codepen example](http://codepen.io/mad-d/pen/zxzMwe) demonstrates the typical pattern that most people start with. 

It all looks good. The paragraphs are created. The click listeners work. Unfortunately they all report the same number when clicked. They have lost their individual values. When the user clicks on a paragaph this is being done long after the for loop has finished. When the for loop finished the value of the variable p was 5.

## Closure FIXED in Practical Example

So, now we know how to recognize the symptoms of the lack of a closure. Let's create a proper one.

[This CodePen Sample Works](http://codepen.io/mad-d/pen/rawQog) It works the way we intended. The main difference between the two scripts is this part:

```js
para.addEventListener("click", function(p){
  return function( ){
    alert(p);
  }
}( p ) );
``` 

Notice that the function being attached to the click listener is an `IIFE`? The current value of `p`, our loop counter, is being passed as the first argument to the function. That means we are assigning the result of the function to the click listener instead of a reference to this function.

The result of the function is ANOTHER function. Since this second function is created within the scope of the click listener function they have access to the same variables. The variable p exists in the scope of the click listener function. The returned function therefore creates a closure and has access to the original value of p at the time where it was created.

Now the paragraphs will report 0, 1, 2, 3, and 4 as we originally intended.

Here is another [reference tutorial](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/) that may help with the concept of hoisting. 

and [another about closures](http://www.sitepoint.com/understanding-variable-scope-closures-without-losing-mind/) which includes a video.

[One more article about Closures](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#x3fu6fwer)

If the idea of closures is still not clear, please watch these videos where I walk through a code sample and use closures in different ways.

<YouTube
    title="Closures"
    url="https://youtube.com/embed/K9fjMX6F5fE"
/>

<YouTube
    title="Closures in Loops"
    url="https://www.youtube.com/embed/oCmLy7ecQRU"
/>

# Currying

Once you understand how closures work then you can start to create Curried functions.

<YouTube
    title="Currying Functions"
    url="https://www.youtube.com/embed/F_N97iovVbQ"
/>

Currying is a great way of creating reusable code in stages. Let's start with this basic code sample.

```js
var doThis = function(action, object){
  console.log("I want you to ", action, " a ", object);
}
doThis("drink", "beer");
doThis("eat", "pizza");
doThis("eat", "cake");
```

So, we have a function called `doThis` which can be called repeatedly and reused to output different messages. The downside to this is that our function name doesn't give us any indication about what kind of task we are trying to accomplish. Also, whenever we call the function we need to know BOTH parameters and we have to provide BOTH parameters every time.

A nicer approach might be  to create functions which are tied to the value of the first parameter which can still be reused. This way of writing the function is called `CURRYING`. We are breaking the function into two steps. The first step accepts the action. The second step accepts the object.

```js
var doThis = function(action){
  return function(object){ 
    console.log("I want you to ", action, " a ", object);
  }
} 
```

Now, to use the functions we would do this:

```js
var eat = doThis("eat");
var drink = doThis("drink");
var sing = doThis("sing");
```

We have now created three functions which can all be reused and they will all accept a single parameter.

```js
eat("pizza");
drink("beer");
eat("cake");
sing("song");
sing("shanty");
```

Calling `doThis` will create a function the outer function returns the inner function. The closure created here allows use to save the first value to be used in the second, inner, returned function.

## References and Resources For Currying

[https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.2o4l4uqxk](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.2o4l4uqxk)

[http://www.sitepoint.com/currying-in-functional-javascript/](http://www.sitepoint.com/currying-in-functional-javascript/)