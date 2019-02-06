# Call Apply and Bind

Want to pass some context or data to your function and then save it to run later? This is what `call()`, `apply()` and `bind()` let us do.

<YouTube
    title="call, apply, and bind"
    url="https://www.youtube.com/embed/uBdH0iB1VDM"
/>

The `call()` and `apply()` methods are effectively the same thing. They will both run a function immediately under the new context that you provide. 

The only different is that the `call` method lets you pass any number of arguments after the context parameter. Each parameter will then be passed to the function you are calling.

The `apply` method only takes two parameters - the context and an array. The array that is passed as the second parameter is a container for all the parameters being passed to the function.

```js
const f = function(greeting, name){
    console.log(greeting, name);  //  hello steve
    console.log(this);          // the window object
}

f.call(window, 'hello', 'steve');

f.apply(window, ['hello', 'steve']);
```

The example above will call the function `f` twice with the exact same result.

The `bind()` method does NOT execute the function immediately. It lets you provide a context for the function. It lets you provide a list of parameters for the function. However, instead of running, it will create a reference to the function that holds the context which you provide so that it may be run later.

```js
const f = function(greeting, name){
    console.log(greeting, name);   // hello steve
    console.log(this);    // the window object
}

let hola = f.bind(window, 'hello', 'steve');

hola();  //the function f() does not run until this line of code.
```

Context means what object does the keyword `this` point to when the function runs.
