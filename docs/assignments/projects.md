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
- The app will use the HTML5 Audio player to play the audio, but the player itself will not be visible on the page.
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


## Project 6 - Tundra

- TUNDRA: Cordova App that runs on BOTH iOS and Android

- Details coming soon

