## Local Notifications

Local Notifications are the system notifications that the device will display to the user. You can have your app display a notice at any time, or schedule ones that will appear at a later time.

These are not **PUSH Notifications**. They do not originate on the server. They are like reminders from your app. Use them sparingly. While they can be effective at reminding the user about your application, if you have too many notifications that disturb the user then they may decide to uninstall your application.

There are a number of these plugins for creating the local notifications. This is NOT a core feature of Cordova. This is NOT a core plugin from cordova. We will be using one from GitHub by the user [@katzer](https://github.com/katzer).

[LocalNotifications Plugin website](https://github.com/katzer/cordova-plugin-local-notifications)

[LocalNotifications Wiki with full documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki)

Now it is worth noting that there are different versions of the plugin and that the script changes slightly depending on the version that you have installed. Use [this page](https://github.com/Salesfloor/cordova-plugin-local-notifications) as the starting point for the methods and script if you are using the current default version that you get when you install the plugin.

## Installation

To add the plugin, after adding your platform, use the following command in the Terminal.

```
cordova plugin add de.appplant.cordova.plugin.local-notification
```

If you look in your package.json file you will actually see three different things installed as dependencies after doing the install.

## Basic Scripts

All of the commands for the local notification plugin are built on the `cordova.plugins.notification.local` object. All the properties and methods we want will be located inside of this object.

If you want to find out which properties are supported on the device for a notification object you can use this method:

```js
let defaultObj = cordova.plugins.notification.local.getDefaults();
```

### Scheduling Notifcations

To create notifications we will be be calling the `schedule()` method.

```js
cordova.plugins.notification.local.schedule({
  id: id,
  title: "This is the Title",
  text: "Don't forget to do that thing.",
  at: inOneMin,
  data: { prop: "prop value" }
});
```

If you need to change any of the information in a notification before it is triggered then we can call the `update()` method.

```js
cordova.plugins.notification.local.update({
  id: id,
  title: "Updated Notification",
  data: { updated: true }
});
```

[Scheduling wiki](https://github.com/katzer/cordova-plugin-local-notifications/wiki/04.-Scheduling)

### Finding Notifications

There are a number of methods that we can call to locate notifications that have been created. The notifications can be found in one of three categories `present`, `scheduled` or `triggered`. Present will give you all of them. Scheduled are ones that have been scheduled but not yet triggered. The triggered ones will have been added to the notification center or have gone off.

To get a list of notifications on the device in any one of these categories we would use one of these methods.

```js
cordova.plugins.notification.local.getAllIds(ids => {
  // ids is an array of all the ids for notifications in all categories
});

cordova.plugins.notification.local.getScheduledIds(ids => {
  // ids is an array of all the ids of scheduled notifications
});

cordova.plugins.notification.local.getTriggeredIds(ids => {
  // ids is an array of all the triggered notifications
});
```

Once you have the id that you want then you can actually get the notification and all of its details.

```js
cordova.plugins.notification.local.get(id, note => {
  //note will be the object with all the details about the notification.
});

cordova.plugins.notification.local.getAll(notes => {
  // notes is an array of all the notifications
});

cordova.plugins.notification.local.getScheduled(notes => {
  // notes is an array of notification objects
});

cordova.plugins.notification.local.getTriggered(notes => {
  // notes is an array of notification objects
});
```

If you have an id and you want to know the status / category it falls under then we would use the following.

```js
cordova.plugins.notification.local.isPresent(1, present => {
  //present is a boolean
});
cordova.plugins.notification.local.isScheduled(1, scheduled => {
  //scheduled is a boolean
});
cordova.plugins.notification.local.isTriggered(1, triggered => {
  //triggered is a boolean
});
```

[Querying Reference](https://github.com/katzer/cordova-plugin-local-notifications/wiki/08.-Querying)

### Cancelling Notifications

We can cancel notifications if they have not been triggered yet. We can clear notifications after they have been added to the notification center or triggered.

```js
cordova.plugins.notification.local.cancel(id, () => {
  // will get rid of notification id 1 if it has NOT been triggered or added to the notification center
  // cancelAll() will get rid of all of them
});

cordova.plugins.notification.local.clear(id, () => {
  // will dismiss a notification that has been triggered or added to notification center
});
```

[Cancelling Reference](https://github.com/katzer/cordova-plugin-local-notifications/wiki/07.-Cancelation)

[Clearing Reference](https://github.com/katzer/cordova-plugin-local-notifications/wiki/06.-Clear)

### Notification Events

If you want your app to run either when a notification is triggered or when the user taps on the pop up notice we can use an eventlistener to connect with that event.

```js
cordova.plugins.notification.local.on("click", function(notification) {
  //function runs when the user has tapped on the notification pop up
});

cordova.plugins.notification.local.on("triggered", function(notification) {
  //function runs when the notification pops up
});
```

[Event Reference](https://github.com/katzer/cordova-plugin-local-notifications/wiki/09.-Events)

## Android Notes

The older version of the local notification plugin worked well with the older versions of Android. However, if you have the newer versions of Gradle and the Android SDK installed or you are trying to build an app for Android 8 (Oreo) or higher then you will need to use the newer beta version of the plugin.

```
cordova plugin add cordova-local-notification@0.9.0-beta.1
```

I would recommend that you use the new beta version of the plugin for any Android project that you create with Cordova.

When you are building for Android you may run into an error during the build process. If you do, then you should edit the `project.properties` page.

Go to `platforms/android/` and open the `project.properties` file.

Edit the line that points to the android support library. change the value from `:support-v4:+` to the following.

```
cordova.system.library.1=com.android.support:support-v4:27.1.0
```

You can change the target build version of the API in this file too.

<YouTube
  title=""
  url=""
/>
