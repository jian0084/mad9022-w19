# Cordova Projects

The **minimum requirements** for ALL project submission are:

    - The App has a unique launcher icon CREATED BY YOU
    - The App has a unique splashscreen image CREATED BY YOU
    - The App has been demonstrated, in class, to the instructor, installed and running on a phone.
    - A Private repo exists on GitHub which includes your whole project except the node_modules folder.
    - Your GitHub account name is the same as your Algonquin username.
    - Your Instructor has been invited to collaborate on the GitHub Repo.
    - The GitHub Repo name is EXACTLY as written in the assignment description.

If the project does not meet these requirements it will not be graded.

**All late submissions must be demonstrated and uploaded to GitHub a maximum of 7 days following the due date.**

[Setup Instructions for all Cordova Projects](./project-setup.md)

## Project 1 - REVIEWR

- REVIEWR : Cordova Android App built on Windows

```
package name:  ca.edumedia.[your username].reviewr
github repo:  https://www.github.com/[your username]/reviewr
App name: [your username]
```

- Create an Android app with Cordova on Windows that allows the user to take a picture of anything and review it.
- The app will be a single page application - a single HTML file with a series of divs where only one of the divs appears at a time.
- Use of the History API is optional for this assignment.

#### Home Page

- The home page for the app is a list which will show either a message saying that there are no reviews or a list of titles.
- The list of reviews will be stored in localStorage as an Array of objects.
- Each item reviewed needs to be an object like this:

```js
{
    "id": 134128716842,
    "title": "thing being reviewed",
    "rating": 4,
    "img": "path/on/phone/to/image"
}
```

- Use the current timestamp when taking the picture as the id for each item.
- Clicking on any of the titles will take you to the details page and show the image, title, and rating for the reviewed item.
- The home page needs a FAB to add new reviews by taking the user to the Add Page.

#### Details Page

- The image should fill the whole width of the container.
- The title should be a label for the thing in the picture being reviewed.
- The rating system needs to be a number between 1 and 5 OR a star rating system displaying 1 to 5 stars.
- There needs to be a `delete` button which will remove the data from localstorage and return the user to the home page.
- There also needs to be a way for the user to navigate back to the home screen.

#### Add Page

- The Add Page should show a button to take the picture.
- After the picture is taken and displayed (on a canvas or img element) then show the input field for the title and some type of input for the rating (number input or star system).
- After the picture is taken there should be a `save` and a `cancel` button. Both will take the user back to the home page. The `save` button will also update localStorage adding the new item.

To get you started, here is the [official reference for the Camera plugin](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-camera/index.html), here is the [github repo for the camera plugin](https://github.com/apache/cordova-plugin-camera), and here is the tutorial on using the Cordova Camera Plugin.

<YouTube
    title="Cordova Camera Plugin"
    url="https://www.youtube.com/embed/jlL1RuW9Kiw"
/>

## Project 2 - PLAYR

- PLAYR: Cordova audio player Android App built on OSX

```
package name:  ca.edumedia.[your username].playr
github repo:  https://www.github.com/[your username]/playr
App name: [your username]
```

- This cordova app will be a SPA that shows a scrollable playlist of audio files.
- The app will **NOT** use the HTML5 Audio player to play the audio, but the player itself will not be visible on the page.
- The [Cordova Media Plugin](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media/index.html) will be required to play the audio on the device.
- The audio controls will be created by you.
- This [StackOverflow Page](https://stackoverflow.com/questions/22885702/html-for-the-pause-symbol-in-audio-and-video-control) has lots of references to Font Awesome, Google Font Icons, plus the Unicode characters for creating the control characters.
- Each of the entries in the playlist should show a title, an artist, and a thumbnail image that represents the audio file.
- Nothing plays by default when the app loads. The user will have to top on an item in the list to play.
- When an audio file reaches the end, the next item in the list should play.
- Minimum of 4 items in the playlist.
- User should be able to click on another item to start it playing. This will stop the current one playing.
- The user should be able to pause the playback, as well as seek to another part of the song. This could be a drag bar or simply a couple buttons for jumping ahead or back 10 seconds.

## Project 3 - REMEMBRALL

- REMEMBRALL: Cordova iOS App

```
package name:  ca.edumedia.[your username].remembrall
github repo:  https://www.github.com/[your username]/remembrall
App name: [your username]
```

- The app will use `localNotifications` to save the dates of special occassions.
- The home page will show a list of saved dates with labels.
- Each date should have a `remove` button.
- There will also be an `add` button in the header bar, which will show a new screen where you can enter a new label and date.
- The app should pop up a `localNotification` one week before the date. You will take the date that is entered and then add the current year, if the date is in the future, or add next year if the date is past, to set the reminder.
- [localNotification Plugin page](https://github.com/katzer/cordova-plugin-local-notifications)
- Each notifcation will need to have a unique id. The timestamp of the reminder time is a good choice.
- You will need to have an icon to use on the notifcation.
- Remember to adjust the saved date so the reminder appears a week before the actual date.
- Save the entered dates in localStorage.
- Sort the list by month and day.
- When the user taps on the notification, it should open your app.

## Project 4 - FINDR

- FINDR: Cordova iOS App
- Using Geolocation and Google Maps JS

```
package name:  ca.edumedia.[your username].findr
github repo:  https://www.github.com/[your username]/findr
App name: [your username]
```

This app will only have one screen. The whole screen will be filled with an interactive Google Map.

After the app has loaded check for the dimensions of the device screen and resize your map and map div to match those dimensions through JavaScript, not CSS. Next, use Geolocation and center the map on the user's current location.

Double tapping on the map will add a marker to the map. Let the user enter a label for that marker. The coordinates for the tap and the label need to be saved in localStorage. This way, every time the app loads it can add the markers to the map that were saved previously. You can use the built-in JavaScript `prompt()` method to collect the label OR a modal window with a form input.

Each marker needs to have an InfoWindow which will appear when the marker is tapped. Inside the InfoWindow you should display the label that was entered and a button or link that can be tapped to remove the marker from the map and localStorage.

## Project 5 - THUMBED

- THUMBED: Cordova App for platform of your choice

```
package name:  ca.edumedia.[your username].thumbed
github repo:  https://www.github.com/[your username]/thumbed
App name: [your username]
```

You will be creating a Cordova App with two screens whic lets a user record a video using the device camera (front or back). After recording and saving the video to the application's `data` directory (not `cache`) you will then use the HTML5 canvas element(s), HTML video element, and IMG element(s) to gather a series of screen grabs from the video. Combine all the screengrabs into a single image that shows 4 thumbnails from the video.

The image with the 4 thumbnails is to be used as the poster image for the saved video. One screen lets the user record videos and generate the thumbnails. The second screen will show the saved videos as a vertical column of video players. Each video player will show the generated poster image.

Disable the native controls on the video player elements. Do NOT have them automatically start playing. Create your own `Play | Pause` button and a `Delete` button for each video. Set the volume for each video to a low level. Clicking the delete button should:

1. remove the video player from the page;
2. delete the poster image from the device storage;
3. delete the video file from the device storage.

## Project 6 - Tundra: The Canadian Dating App

- TUNDRA: Cordova App that runs on BOTH iOS and Android

You will building a two screen Single Page Application as a Cordova App.

The first screen will show cards with pictures, names and other details. The user will be able to swipe left or right on the card. When the user swipes left or right you need to use a CSS transition to animate the card off the screen in the correct direction.

Swiping left will delete the card and discard all that data.

Swiping right will save the person's information in an array that gets stored in `sessionStorage`, **NOT localStorage**. By using sessionStorage, the list of saved people will be cleared out each time the browser is closed.

The second screen will show a list view of all the people that the user swiped right on. This list will be retrieved from `sessionStorage`.

When the app starts, you need to make a fetch call to the Tundra API - [http://griffis.edumedia.ca/mad9022/tundra/get.profiles.php?gender=female](http://griffis.edumedia.ca/mad9022/tundra/get.profiles.php?gender=female).

The queryString parameter `gender` can be `female`, `male` or left blank. If left blank, you will get a random selection of people from either gender from the API.

The data that returns from the fetch will look something like this:

```js
{"imgBaseURL":"%2F%2Fgriffis.edumedia.ca%2Fmad9022%2Ftundra%2Fprofiles%2F",
"profiles":[
    {"id":"15180942060", "first":"Joanne", "avatar":"f-028.jpg", "last":"Eastwood", "gender":"female", "distance":"19km"},
    {"id":"15180942061", "first":"Alina", "avatar":"f-026.jpg", "last":"King", "gender":"female", "distance":"11km"},
    {"id":"15180942062", "first":"Janki", "avatar":"f-016.jpg", "last":"Cameron", "gender":"female", "distance":"9km"},
    {"id":"15180942063", "first":"Gwen", "avatar":"f-022.jpg", "last":"Jackson", "gender":"female", "distance":"9km"},
    {"id":"15180942064", "first":"Sam", "avatar":"f-028.jpg", "last":"Polanski", "gender":"female", "distance":"28km"},
    {"id":"15180942065", "first":"Tasneem", "avatar":"f-005.jpg", "last":"Lee", "gender":"female", "distance":"2km"}
]}
```

Note that each person object will contain a first name, last name, and an avatar image. The images all sit inside the folder defined in the `imgBaseURL` property at the root level.

The `profiles` array from the data should be looped through and a single card created for each profile.

After the user swipes the profile card, and after the transition animation has finished be sure to remove the card from the DOM.

## Getting New Profiles

We don't want the user to have to ask for more profiles to be downloaded.

So, each time we remove a card from the DOM, following a swipe left or right, check the number of cards left. If the number of cards is less than 3, do another fetch to get more profiles. When those profiles are returned, create more cards.

**Hint**: reuse your functions from the original fetch and building of cards.

## After Swiping Cards

After the user has swiped a card to the left or the right, then you need to display a message to them confirming that the the profile has been rejected | dismissed | deleted OR saved | favourited | kept | stored. The terminology is up to you. What is important is that you show a confirmation.

The message should be an overlay. The user needs to be able to read it while the card is being animated off the screen. Then the message disappears while the new card appears.

## Demo Animation

![Tundra Animation](2018-tundra-demo.gif)

## Favourites Screen

On the second screen when you display the saved profiles, you should show three things:

1. The full name of the profile
2. A small version of the image as an avatar
3. A delete icon button

When the user clicks on the delete button you will need to remove that profile from BOTH the list view AND `sessionStorage`. You will need to use the id from the profile to identify which person to delete from `sessionstorage`.

## Tiny\$hell Framework

Here is a framework that you can use for your interface. It provides the basic CSS to give structure to your pages plus it has three gesture events that you can add to your cards - 'swipeleft', 'swiperight', and 'tap'.

[https://github.com/prof3ssorSt3v3/tinyshell](https://github.com/prof3ssorSt3v3/tinyshell)

A new version of the Framework is being developed currently. Make sure that you are using version 1.0+ of Tiny\$hell.

You are **NOT** required to use this framework. You can write all your own CSS and JS if you want.

OR you can just use the JavaScript from the framework and write your own CSS.

There are instructions in the ReadMe.MD file, which are displayed on the home page for the Framework Repo.

Note: that the framework is still under development. I will be updating it regularily to add new features to both the CSS and JS. As things get changed in the framework, I will update the ReadMe file. Watch for changes to the Last Update date in the readme.

If you find any problems with the framework you can report them here: [Tiny\$hell Issues page](https://github.com/prof3ssorSt3v3/tinyshell/issues).
