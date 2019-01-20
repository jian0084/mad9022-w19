# Private Data with Closures

JavaScript does not have the concept of public and private modifiers for variables. However, we can still write code that will hide variables from other parts of our code.

If we declare variables inside loops or functions with `let` or `const` then those variables only exist between their containing curly braces.

```js
function hello(msg) {
    let name = 'Fred';
    for(let i=0; i<10; i++){
        console.log(i);
        let temp = Math.random();
    }
}
```

In this code sample, the variables `msg` and `name` can only be accessed inside the function `hello`. The variable `i` can only be read while the `for` loop is running. The variable `temp` is only accessible during each individual pass through the loop. `temp` is recreated each time the loop runs and is destroyed after each pass through the loop.

After the function is finished running, there is NO way for code outside the function to access the value of any of those variables. In fact, before or during the running of the function there is also no way for any other code to access the values of any of those variables.

Closures give us a way to remember variables after the enclosing scope is no longer being used. Closures will allow us to hang on to the value of any variable to be used later, while still preventing other code from access the value.

```js
function outer(){
    let privateThing = 'secret value';
    return function (){
        let num = Math.random();
        console.log(privateThing, num);
    }
}

let saveForLater = outer();

saveForLater();
```

In the example above, in the second last line, we are running the function `outer`, which will return the inner function. The inner function is a closure. It can access the variable `privateThing` and its value. When we run the final line it will log out the values of `privateThing` and `num`. However, if we were to add any of these lines:

```js
console.log( privateThing );  //undefined
console.log( saveForLater.privateThing );  //undefined
console.log( outer.privateThing );          //undefined
```

They will all fail. We can consider the variable `privateThing` a private variable held inside of the function `saveForLater`.

<YouTube
    title="Private Data in JS"
    url="https://www.youtube.com/embed/kMNHAc7m_6A"
/>

## ES5 Getters and Setters

Another way that we can hide variables from other code is through using Getters and Setters.

<YouTube
    title="ES5 Getters and Setters"
    url="https://www.youtube.com/embed/kMNHAc7m_6A"
/>

