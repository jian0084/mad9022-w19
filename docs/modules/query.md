# Questions in Class

## Week 1 - Cordova Basics

1. What is the command to install cordova globally on your computer? [npm i -g cordova][yarn global add cordova]
2. What is the command to create a new cordova project? [cordova create folder ca.example.app appname]
3. What is the command to add the android platform to a cordova project? [cordova platform add android]
4. What is the name of the file that holds all the project settings? [config.xml]
5. What is the alternative file for holding project settings? [package.json]
6. What is the IDE application that we use to launch the Android Emulator? [Android Studio]
7. What is the current major version of Cordova that we are using? [8]
8. What do you call the image that gets displayed on a device for a user to click and start an app? [launcher icon]
9. What is the command to add the device plugin to a cordova project? [cordova plugin add cordova-plugin-device]
10. What is the command to get a list of all the plugins that have been installed in your project? [cordova plugin ls]

## Week 2 - Canvas

1. What are the two types of context that you can use with the Canvas element? [2d, 3d]
2. What is the property to set the color of the lines when drawing on Canvas? [strokeStyle]
3. What is the property for setting the background area of a shape? [fillStyle]
4. What is the method to move the starting point for a line or shape? [moveTo()]
5. What is the method to draw a line from the current position to a new point? [lineTo()]
6. Name two of the methods to draw part of a circle? [arc(), arcTo(), bezierCurveTo(), quadtraticCurveto()]

7. What is the method to grab all the pixel data from the Canvas? [getImageData()]
8. What is the name of the property inside the object returned from `getImageData` which holds the array of pixel data? [data] NOT ASKED
9. If you loop through the array of image data and change the values, what is the method to put it back on the Canvas? [putImageData()] NOT ASKED
10. What are the two methods for drawing a square? [fillRect(), strokeRect()]
11. What is the method for placing an image on the Canvas? [drawImage()]
12. What are the two methods for writing some text on the Canvas? [fillText(), strokeText()]

## Week 3 - Arrays

1. What is an example of a method that can be used to combine two arrays? [concat, splice]
2. What is the return value from an Array `forEach()` method? [undefined]
3. What is the return value from an Array `map()` method? [a new Array]
4. What is the return value from an Array `filter()` method? [a new Array]
5. In the function that you pass to the `forEach` `map` or `filter` methods, what are the three parameters that you are given? [item, index, array]

6. What are the two parameters that you pass to the Array `reduce` method? [function, accumulator]
7. If you wanted to put the elements of an array in alphabetical order, what is the Array method you should call? [sort]
8. If you want to put an array of strings that each start with a number, in numerical order, what would you do differently? [custom sort function(a, b){}]
9. What is the difference between a method that says it `edits in place` vs one that says it returns a `shallow copy` [change the original array, creates a new copy]
10. What is a shallow copy vs a deep copy?
11. What is a method that could be used to actually remove elements from the middle of an array? [splice]
12. What are the four methods for adding or removing elements from the beginning or end of an Array? [pop, push, shift, unshift]

## Week 4 - DOM

1. What is the difference between the return values of `querySelector` and `querySelectorAll`?
2. Name two classList object methods? [`add`, `remove`, `toggle`, `contains`]
3. What is the difference between `innerHTML` and `textContent`? [first contains elements]
4. What is the command for creating a new paragraph element? [document.createElement()]
5. After you have created a new HTML Element, how do you add it to the page? [appendChild]
6. If you wanted to invent your own HTML attributes how would you name them? [data-]
7. If you want to delete an HTML element from the page what property or method would you use? [innerHTML, removeChild()]
8. How would you retrieve the value of a `data-` attribute? [getAttribute()]
9. What is an alternative to using `classList` to change an element's CSS classes? [className]
10. If you want to add a bunch of elements at the same time without adding an extra HTML element around them, what could you use to hold them together and add them? [DocumentFragment]

## Week 5 - DOM

1. Other than the document object, what kind of object can use the `querySelector` method? [Element nodes]
2. What is the e vent name used with `addEventListener` to capture right-click events? [contextmenu]
3. What are two events associated with a user typing? [keyup, keydown, keypress, input]
4. What is the event to capture changes made to an input field as the user is typing? [input]
5. What is the event to capture the event when a user clicks in or tabs to a form field? [focus]
6. What is the event to capture when a user clicks or tabs away from a form field? [blur]
7. What is the attribute that you can use to set the order in which a user tabs through a form? [tabindex]
8. What is the method you would use to get rid of an event listener? [removeEventListener]
9. If I wanted to set the CSS background-color property in JS how would i write that? [element.style.backgroundColor]
10. What is an alternative way of referencing the body element, other than document.querySelector('body')? [document.body]

## Week 6 - Cordova

1. What is the command to launch a Cordova app in the emulator? [cordova emulate ios]
2. What is the name of the plugin for the Camera that you would use when installing the plugin? [cordova-plugin-camera]
3. What is the current major version of Cordova? [8]
4. What is the name or number of the latest API of Android? [Oreo 26, Nougat 27, Pie 28]
5. What is the current major version of iOS? [12]
6. If you wanted to have some code that runs when your Cordova app is being put into the background then what event would you add a listener for? [pause]
7. What plugin do you use to set a reminder in Cordova? [local-notification]
8. What is the name of the extra permission that you have to set in iOS for the Camera? [CAMERA_USAGE_DESCRIPTION or PHOTOLIBRARY_USAGE_DESCRIPTION]
9. What is the name of the xml settings file for Cordova projects? [config.xml]
10. What is the name of the settings file that is used by npm to manage the project? [package.json]

## Week 7 - Objects

1. What type of inheritance does JavaScript use? [Prototypical]
2. What is the keyword that you can use to add a method to the prototype of an Object created with a constructor function? [prototype]
3. How does putting `new` in front of a function call change the return value from the function? [Object]
4. Inside a function called with `new`, what does the keyword `this` represent? [the returned object]
5. When we use `call` `apply` or `bind`, what is the first argument? [the context, `this`]
6. Name a way to create an Object. [Object.create(), {}, new Object(), new Func(), class ]
7. Name two primitive types in JS. [String, Number, Boolean, null, undefined, Symbol]
 
## Week 8 - Loops

1. how would you write a for loop that counts down from 10 to zero? [for(let i=10; i<=0; i--){}]
2. Name another kind of for loop. x2 [for...in for...of]
3. Name a method that will loop through an Array. x4 [forEach, map, filter, reduce]
4. Name a loop that is not a for loop or an Array method. x2 [while, do while]

## Week 9 - CSS

1. If you wanted to create space around an element with no background colour, what property would you use? [margin]
2. If you want to use flexbox to define a single column or row, what property would let you select between the two? [flex-direction]
3. What is the property used with CSS Grids to define the size of the columns in every row? [grid-template-columns]
4. What is the value for the `background-size` property that will make a background-image fill all the width AND height of the container without hurting the aspect ratio? [cover]
5. If you have an HTML `<img>` element and you want it to fill all of it's parent container without altering the aspect ratio, then what values would you use for CSS width and height? [100%, auto]
6. IF you have an element that is floated either right or left and you want to make sure that the next element sits below the floated element, what CSS property do we use? [clear]
7. What is the CSS property for controlling the underline of an anchor? [text-decoration]
8. What value/method do we use for the CSS transform property if we want to shift the position of an element vertically on the page? [translateY]
9. Name three possible properties we can use in a media query? [min-width, min-height, max-width, max-height, min-aspect-ratio, max-aspect-ratio, orientation]
10. What is the CSS property that controls the calculation of an element's width and whether or not to include the padding or border in that calculation? [box-sizing]
11. What @ rule do you use to load another CSS file from inside your existing CSS file? Like Google Fonts. [@import]

## Week 10 - Promises

1. What is the method that you call to handle a resolved Promise? [then()]
2. What is the method that you should always call to handle a rejected Promise? [catch()]
3. What is the Promise method for handling a group of Promises? [all()]
4. What is the Promise method that you use to get the first of a group of resolved Promises? [race()]
5. If you chain together a bunch of `then()` methods how to do pass a value from one to the next? [return]
6. If you create your own Promise object like `new Promise(a, b)` what are the two parameters that you should provide? [the resolve and reject callback functions]
7. What is an example of a method we use that returns a Promise? [fetch(), Response.json()]

## Week 11 - fetch and AJAX

1. What two methods should you always chain on to the end of a fetch() call?[then, catch]
2. What is the old object that was used for AJAX calls before fetch()? [XMLHttpRequest]
3. If the Response object gives us a JSON file, what method do we use to extract the json data from the Response object. [json()]
4. If the Response obejct give us back a text file, what method do we use to extract the string data from the Response object? [text()]
5. If the Response object gives us back an image file, what method do we use to extract the image from the Response object? [blob()]
6. When you call the `fetch()` method, there are two different things you can pass it in as the parameter. What are the things? [url, Request object]
7. When you call `new Request()` there are two parameters that can be passed in. What are the two parameters? [url, options]
8. If you create a `Header` object. How do you make it part of your fetch call? [in the Request options {headers: h}]

## Week 12 - ES6 Features

1. async - await
2. let const
3. template literals
4. yeild
5. default params
6. destructuring
7. for of loop
8. Set
9. Map
10. spread operator

## Week 13 - ES6 Features

1. classes
2. iterators
3. generators
4. Object.values
5. Object.entries
6. Array.includes
7. Modules
