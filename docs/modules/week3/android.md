# Setting Up for Android

## Common Setup Requirements

To be able to develop Android applications there are a number of things that you need to have installed and prepared regardless of whether you are doing Android native, Cordova, NativeScript, Xamarin or ReactNative.

1. Android Studio IDE - when you install this, you will get the basic Android SDK
    - To download Android Studio visit [this site](https://developer.android.com/studio/?gclid=CjwKCAiA4OvhBRAjEiwAU2FoJbrHs3natxQUwCehaStAbkhuA7z_gCk-v32LuvGidCOsM9ELY0xlehoCv1oQAvD_BwE)
    - Android Studio [Official Documentation](https://developer.android.com/studio/intro/)

2. JDK - Java Developer Kit. This is **NOT** the same thing as the JRE (Java RunTime Environment). You need the JDK to compile your Android apps. For Cordova we need version 8.x.x of the JDK.
    - To download the JDK [find your OS on this page](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - Make sure that it is version 8.

3. Android SDK updates to APIs and tools. For each version of Android - KitKat, Marshmallow, Nougat, Oreo, etc. there is an individual API. For all the build tools and supporting code there are multiple things to update.
    - To Update the APIs and Tools for the Android SDK you will need open Android Studio.

4. Updating your Environmental Variables to indicate where the JDK and SDK are installed as well as the location for the various tools for the SDK.
    - [Official Reference for Environmental Variables](https://developer.android.com/studio/command-line/variables)
    - Here is a video that will help you update your Environmental Variables on OSX

    <YouTube
        title="Managing ENV variables on OSX"
        url="https://www.youtube.com/embed/3XjkaN8psp0"
    />

    The variables we should create are:

    ```
    ANDROID_HOME  - the location of the Android SDK folder
    STUDIO_JDK    - The location of the JDK to use with Android
    ```

5. AVDs - Android Virtual Devices are the different version files for each Emulator that you would run. An AVD contains things like screen size, memory, Android API version, and device capabilities. When the emulator runs it needs one of these files to know how it is supposed to behave. Think of them as the Operating System for your emulator.
    - You can create AVDs from the CLI but it is much easier to do through Android Studio.
    - This video should help

    <YouTube
        title="Creating AVDs"
        url="https://www.youtube.com/embed/p4l2ATShaEY"
    />

6. Android Devices with the development options turned on.
    - Go to the `Settings` for the device and location the `Build Number`, usually in the `About this phone` section.
    - Tap 7 times on the `build number` to unlock development features.


## OSX Terminal

Here is a tutorial on some of the basic Terminal Commands for OSX. Many, but not all of them, will be the same on Windows.

<YouTube
    title="OSX Terminal Basics"
    url="https://www.youtube.com/embed/fO8ontWnlwk"
/>

Some common commands that are different on Windows:

**clear screen**

- OSX: clear
- Win: cls

**current directory**

- OSX: pwd
- Win: cwd

**directory listing**

- OSX: ls
- Win: dir

## Windows Android Config

When updating Environmental Variables on Windows you need to go to the system settings to add new variables or to edit the values in the PATH variable. Depending on which version of Windows you might have to edit a long string for the PATH, with semi-colons between each value, or you might get a list of values that can be edited or removed.

<YouTube
    title="Cordova ENV variables on Windows"
    url="https://www.youtube.com/embed/nQ498PINsws"
/>

If you ever want to add a temporary ENV variable on the CLI that will only exist as long as the CLI is open then type the following. Use double quotation marks if there is a space in the value.

```
set MYVAR="some Value"
```

To reference existing values the old variables get percentage signs around them and then a semi-colon between the variable and the new value.

```
set MYVAR=%MYVAR%;someNewValue
```


## OSX Android Config

See the notes and video above to managing the ENV variables for OSX.

If you ever want to add a temporary ENV variable on the CLI that will only exist as long as the CLI is open then type the following. Use quotation marks if there is a space in the value.

```
export MYVAR="some Value"
```

To update the PATH variable and add something to the end of it then we use a syntax that puts the old PATH variable at the start of the new value. Put a colon between the old PATH and the new value.

```
export PATH="${PATH}:someNewValue"
```

Don't forget that you can always edit the `.bash_profile` file inside your `~` folder.
