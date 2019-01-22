# 12. Regular Expressions, ES6 Classes, Binary and Hex Numbers

## Regular Expressions

Regular Expressions is a feature common to most programming languages. It allows you the ability to do pattern matching to determine whether a number, date, or string is valid.

[Learn more about RegExp](./regexp.md)

[Common RegExp Patterns](./common-regexp.md)

## Hexadecimal, Decimal, Binary, and Base-64

To be a programmer means to understand the different ways that information can be displayed, stored, or transmitted. JavaScript has many methods that let us deal with raw data in different formats.

Hexadecimal gets used for HTML character entites and CSS colours. Decimal is how humans work with numbers. Binary is the internal base-2 system that computers all use to save data. JavaScript has a bunch of Bitwise operators to allow use to work directly with the binary data. Base-64 is a format used to represent binary files like images as strings. Great for embedding images in a webpage or for transmitting images inside a text file like XML or JSON.

[Learn more about data formats](./hex-bin-64.md)

## Steganography

A practical application of working with binary data to hide messages inside images.

[Learn about Steganography](./steganography.md)

## Uploading Files with Fetch

We can use `fetch()` to upload actual files to a webserver.

[Learn how to upload files with fetch](./upload-files-fetch.md)

## ES6 Classes

While Javascript is a prototyped language with functional programming features, ES6 introduced the keyword `class` and gave us a syntax that makes it look like JavaScript is capable of creating classes.

JavaScript DOES NOT HAVE CLASSES.

The `class` keyword is simply a syntactical sugar added to the language to make it look like classes. This was done to help programmers from other languages migrate to JS. 

[Learn more about JavaScript Classes](./es6-classes.md)

## TypedArrays

Standard Arrays in JavaScript can contain anything you want. A single array could contain a String, a Boolean, a Number, an Object, and another Array.

TypedArrays are used to hold different chunks of data. But all the chunks have to be the same size. They could all be represented as numeric values. But this is only while they are being stored. You can have TypedArrays that hold 8bit, 16bit, or 32bit values. They can be signed or unsigned or clamped.

Once the data is taken out of the TypedArray you can convert the bytes to whatever you like and combine them in any way that you want.

[Learn more about TypedArrays](./typed-arrays.md)

## HTML5 Speech API

The HTML5 Speech API lets us to simple text to speech operations from JavaScript

[Learn more about the Speech API](./speech.md)
