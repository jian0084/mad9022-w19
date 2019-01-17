# 3. Cordova Configuration & More...

## Installing Cordova

We use [NPM](https://npmjs.com) to install Cordova. With `Node JS` installed, we can run the npm commands from the command line and we can install Cordova as a global package on our computer, both OSX and Windows. Alternatively you could use the `Yarn Package Manager` to install it.

```
npm i -g cordova
yarn global add cordova
```

Keep an eye on the current version of Cordova. You will likely want to update the version that you have installed globally. We can do this from the CLI with either `NPM` or `Yarn`.

```
npm update -g cordova
yarn global update cordova
```

## Cordova Basic Commands

Here is a basic cheatsheet for the Cordova Commands and the Android CLI commands that would be used in conjunction with Cordova. [Cordova Cheatsheet](https://codepen.io/mad-d/pen/OPPyOw)

[More detail about Cordova Commands](./cordova-commands.md)


## Android Platform Requirements

Creating Android Applications requires slightly different approaches on Windows and on OSX.

[Android Windows Setup Information](./android.md)


## Single Page Application (SPA)

SPA is a term used to refer to applications that use a single HTTP Request to load one HTML file. Then everything that you need is either:

1. contained in the original HTML file and shown or hidden as needed.
2. downloaded with `fetch()` and displayed as needed.

<YouTube
    title="Single Page Applications"
    url="https://www.youtube.com/embed/wlVmmsMD28w"
/>

[Learn More about SPA](./spa.md)

## History API

The History API is how you can create an SPA and mimic the browser's natural navigation behaviour and work with the built-in back button to create your own custom URLs for every page without having to have multiple HTML files.

[More History API Info](./history.md)


## LocalStorage

`sessionStorage` and `LocalStorage` are part of the HTML5 Web Storage API. They allow you to take any JavaScript Array, Object, String, Boolean, or Number and save them in the Browser as a String equivalent. The `JSON` Object has two methods - `stringify()` and `parse()` to convert the data object to a string or from a string back into the data object.

<YouTube
    title="Web Storage API"
    url="https://www.youtube.com/embed/hOCYNdgsUfs"
/>

<YouTube
    title="Caching Data with LocalStorage"
    url="https://www.youtube.com/embed/fe6rCk7a6u0"
/>


## Content Security Policy

The Content Security Policy is a `<meta>` tag that provides a set of instructions to the browser on what sources it is allowed to use to load different types of related assets for your website.

[Learn More about the Content-Security-Policy meta tag](./csp.md)

Related to the Content Security Policy is the concept of CORS. If you are working the AJAX calls then you really should understand [CORS](./cors.md) too.

## Timers

There are two types of Timers that you can use in JavaScript: `setTimeout()` and `setInterval()`. The `setTimeout` method will run the provided function one time after a minimum delay. The `setInterval` will run the function repeatedly with a minimum delay between each call.

[Learn More](./timers.md)


## Introduction to Single Page Applications

A Single Page Application is a website built into a single HTML file. There are different areas, usually `<div>`s that are shown and hidden and made to act as if they were separate webpages. 

The advantage of them is that they only have to download one HTML file, one JS file, and one CSS file. All the navigation after the initial load is just a series of CSS transitions. Nothing more needs to be downloaded by the browser.

Optionally, you can download new content via `fetch` calls. However, this will still be more efficient than fetching HTML files and all their related files. Additionally, you can always cache the content of a page once it has been requested the first time.

[Learn More about SPAs](./spa.md)


## OSX Show Hidden Files in Finder

If you want to change how OSX displays hidden files in Finder.

1. Open Terminal found in Finder > Applications > Utilities.
2. In Terminal, paste the following: `defaults write com.apple.finder AppleShowAllFiles YES` 
3. Press return.
4. Hold the `Option/alt` key, then right click on the Finder icon in the dock and click Relaunch.

<YouTube
    title="Show Hidden Files"
    url="https://www.youtube.com/embed/Gky4lD8yNJE"
/>
 
## Useful Textbooks

Here is a [collection of books](./orly.md) that every programmer should have.