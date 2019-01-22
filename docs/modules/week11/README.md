# 11. Iterators, Generators, Async, Await...

## Dataset Properties

HTML is a fixed set of allowed elements and attributes. To have valid HTML you are not allowed to create your own attributes. To get around this problem, there is a loop-hole in the HTML5 spec. If an attribute name begins with `data-` then it will be considered valid. These attributes are called the `dataset properties`.

[Learn more about dataset properties](./dataset-props.md)

## ES6 Async and Await

In ES6 they added two keywords - `async` and `await` which let you turn any function into a method wrapped inside a Promise. You can take asynchronous tasks inside the function and effectively make them synchronous.

[Learn more about async and await](./async-await.md)

## ES6 Iterators and Generators

When you have an Object which is iterable, that means that the Object has a property called an `Iterator`. You can talk to the `Iterator` and ask it for the next item inside the Object. As long as there are more items inside the Object it will continue to pass you another item. 

`Generator`s are a simple syntax that lets you create and access an `Iterator`.

[Learn more about Iterators and Generators](./iterator-generator.md)

## Web Payment Request API


## WebRTC API

