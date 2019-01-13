# Cordova Configuration

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


## OSX Show Hidden Files in Finder

If you want to change how OSX displays hidden files in Finder.

1. Open Terminal found in Finder > Applications > Utilities.
2. In Terminal, paste the following: `defaults write com.apple.finder AppleShowAllFiles YES` 
3. Press return.
4. Hold the `Option/alt` key, then right click on the Finder icon in the dock and click Relaunch.
 
## Useful Textbooks

Here is a [collection of books](./orly.md) that every programmer should have.