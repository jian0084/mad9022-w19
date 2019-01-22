# 6. Local Notifications, Time and Private Variables

## Logical Short-Circuiting in JS

To properly understand how compound if statements, ternary operators, and JavaScript expressions work, you need to understand how JavaScript implements logical short circuiting.

[Learn more about Logical Short-Circuiting](./short-circuit.md)

## Private Variables in JS

While JavaScript does not support the private and public modifiers, there are ways that we can emulate this in JavaScript.

[Learn more about Private Variables](./private-data.md)

## Using Luxon to work with Time and Dates

`Moment.js` has been the industry standard library for working with Time and Dates for years. However, there are some limitations on this library. It doesn't have built-in support for locales or timezones. There is a new library called Luxon that supports new i18n and l10n features that are available in the browser.

[Learn more about Luxon](./luxon.md)

## Cordova Local Notifications

Cordova has a number of different plugins that can be used to create local notifications. The one that we will be using is [Katzer's Local Notification plugin](https://github.com/katzer/cordova-plugin-local-notifications).

[Learn more about Cordova Local Notifications](./local-notify.md)

## HTML5 Web Notifications

There is a new HTML5 API that allows you to display pop up notifications in the browser. Typically these are used in conjunction with Push notifications but you can use them on their own too.

[Learn more about Web Notifications API](./web-notify.md)

## Working on iOS with Cordova

To be able to build applications for Cordova on iOS, you need to understand how to install and use the iOS SDK, XCode, and different Simulators. Before you can build anything for iOS you need to have an Apple Developer Account, create a signing certificate, and a mobile provisioning profile.

[Learn More about setting up for iOS development](./ios.md)

## Call, Apply, and Bind

If you understand how `this` works in JavaScript then you know that sometimes it is not what you want it to be. In some languages they talk about having a delegate - an Object that will do things on behalf of something else.

Call, Apply, and Bind do just that. We can take a function and tell JavaScript to pretend that some other Object is the one calling the function. This will change the value of the keyword `this`.

[Learn how to use call, apply, and bind](./call-apply-bind.md)