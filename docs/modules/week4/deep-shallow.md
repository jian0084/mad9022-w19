# Deep vs Shallow Copying

Deep vs Shallow copying is not something that you have to learn how to implement in JavaScript. It is a language feature that you need to understand to avoid problems as your code becomes more complex.

## Primitive Data Types

JavaScript has six primitive datatypes. [MDN Primitive Reference](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

```js
null
undefined
Number
String
Boolean
Symbol
```

<YouTube
    title="JavaScript Primitives"
    url="https://www.youtube.com/embed/fLKzh4L00TI"
/>

If you want to learn about Symbols too...

<YouTube
    title="Symbols"
    url="https://www.youtube.com/embed/PyyndIv4ABI"
/>


## Complex | Compound Data Types

Everything else in JavaScript is an Object. You can think of them as Complex or Compound datatypes. 

EVERYTHING ELSE in JavaScript is an OBJECT.

EVERYTHING.

Name something that is not one of the primitives. It's an Object.

Did I mention that EVERYTHING ELSE in JavaScript is an OBJECT?  It is.

Functions? - Objects.

Arrays? - Objects.

HTML Elements? - Objects.

Dates? - Objects.

Events? - Objects.


## Copying and Passing Values

So, what does this mean for us?

If you are calling a method that creates a copy of an Array (which is an Object), what you are really getting is a `shallow` copy. The copy is only one level deep.

If the Array contains primitives then you are getting an **actual copy** of each `value`. 

If the Array contains anything else, it means that those things are Objects. The shallow copy will not give you copies of those Objects. Instead, it will give you a `reference` to the Object. Somewhere in memory the values inside that Object are being stored. When you copy an Array that is filled with Objects, what you get are copies of the references to those Objects. 

This means, in your new Array, if you change the value of one of the Objects, then you are changing the Object which is `referenced` by BOTH Arrays.

<YouTube
    title="Deep vs Shallow Copying"
    url="https://www.youtube.com/embed/duyshh9Fs1U"
/>

There are a few ways that you can create actual true deep copies of Objects. They are all a little bit processor intensive but if you want a real copy then that is what you need to do.

Here is a [great article](http://dassur.ma/things/deep-copy/) on the different ways that you can create deep copies.

