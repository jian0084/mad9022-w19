# ES7 Optional Chaining

There is a new feature coming to JS called optional chaining. It is intended to shorten your if statements where you need to test for the existence of multiple properties.

Here is an example of the code that we would be looking to replace.

```js
if(myObject && myObject.bigprop && myObject.bigprop.smallprop && !isNaN(myObject.bigprop.smallprop) )
    console.log("The object exists, it has a property called bigprop, which in turn contains a property called smallprop, and smallprop is a number");
}
```

With the new syntax we can combine that into a single statement and put question marks for each item we are wanting to check for existence. Here is the new version of the above code.

```js
if( myObject?.bigprop?.smallprop && !isNaN(myObject.bigprop.smallprop)){
    console.log('saving time makes me happy');
}
```

If you didn't need to check that the last property in the chain was a number then it could just be this:

```js
if(myObject.bigprop.smallprop){
    console.log('success');
}
```

## References

[Learn more about ES7 features and the approval process](https://medium.freecodecamp.org/here-are-three-upcoming-changes-to-javascript-that-youll-love-387bce1bfb0b)

[Node support for JS features](https://node.green/) As of February 2019 there is NO support for this feature in Node.

If you are using Babel to do transpiling for this then you will need to add a Babel plugin. [Babel optional chaining plugin reference](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
