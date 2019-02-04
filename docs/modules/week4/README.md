# 4. Cordova, Copying, Markdown, & Errors

## Working with the Camera in Cordova

If you want to be able to take pictures from your Cordova mobile app then you will need to use the `cordova-plugin-camera` plugin. 

[Learn more about Cordova Camera Support](./cordova-camera.md)

## Deep vs Shallow Copying in JavaScript

When you create new Arrays or Objects by using built-in methods or by passing things to functions you need to understand how JavaScript is dealing with these Objects internally.

[What is Deep Copying and Shallow Copying?](./deep-shallow.md)

## Learning to Write Markdown

MarkDown is a great simple syntax for writing documentation. When you create a new GitHub Repo you are always prompted to create a `README.md` file. The `.md` files are MarkDown files. It is an easy syntax to use and provides nearly all the functionality that the first version of HTML did.

Actually, this whole website is built using MarkDown for the content. A JavaScript framework called [VuePress](https://vuepress.vuejs.org/) that uses the [Vue.js](https://vuejs.org/) library to convert the MarkDown into HTML and add some custom CSS.

[Learn more about Markdown](./markdown.md)

## Throwing and Catching Errors and Exceptions

All that red text that you have seen in the browser console is just the `message` property values from `Error` objects. You can create your own custom `Error` objects for your code and you can also use `Error Event` listeners as well as `try...catch` statements to capture and handle the errors without crashing your webpage.

[Learn how to throw errors and catch them](./throw-catch.md)

## Star Rating Systems

I'm sure you've seen lots of websites where you can rate things using stars. There are many approaches to doing this using HTML, CSS, and JS. Here is one approach.

[Learn more about Building Star Rating Systems](./star-rating-system.md)

## Icons in Cordova

Learn about sizing favicons and launcher icons and app icons. Learn about sizes of icons for iOS and Android. Learn about adding the icons to Cordova projects.

[Learn about Icons for Cordova](./icons.md)

## How to Inject User Input into a JS Object

When you are working with LocalStorage, usually you will be working with Arrays and Objects. So, it is important to know how to build those Arrays and Objects before you `stringify` them and add them to localStorage.

Here is a CodePen example with a simple form that has two elements: string and a number. Those values are turned into an Object along with a generated `id` and then added to an Array.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="mad-d" data-slug-hash="PVzWNz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Putting User Input Into an Object">
  <span>See the Pen <a href="https://codepen.io/mad-d/pen/PVzWNz/">
  Putting User Input Into an Object</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<YouTube
  title="Saving user input in JavaScript Objects"
  url="https://www.youtube.com/embed/NxVCq4p0Kb0"
/>

