# Google Maps JavaScript API

Last semester we used the Google Static Map API. This was a simple matter of adding an HTML `<img>` element to your page and setting the src attribute of the image to point to the Google API server and include a latitude and longitude in the query string.

Now we want to create Dynamic Maps, which can be controlled with Javascript. We want our users to be able to zoom in and out, to pan around on the map, and even add markers. With an API key and a little bit of JavaScript we can build Geolocation powered websites and applications.

It's important to note that there are different versions of the Google Maps API, including ones for Android and iOS.

## Get Your API Key

To get your Google API key, if you don't already have one, then [visit this page](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Getting Started

To use the Google Maps Javascript API you will need to add the Google Maps Javascript to your webpage.

Best Practice: USE HTTPS for all your scripts, css, images, and HTML files.

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

Add this script tag to your page and replace `YOUR_API_KEY` with the API key that you got from the developer site. The "callback" parameter in the querystring would be the name of a function in your own script that you want called once the google map JavaScript has finished loading. This function can be called whatever you like.

You will need an HTML element, like a `<div>`, where the map will be generated. Put the `<div>` into your HTML and give it an id, like `map`.

```html
<body>
  <div id="map"></map>
</body>
```

Next, we need to make sure that we give some dimensions to the map element. Here is some CSS for that.

```css
#map {
    height: 100%;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
```

Next, in your own Javascript file we need to initialize the map with the coordinates `45.3496711,-75.7569551`

```js
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.3496711, lng: -75.7569551},
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}
```

At this point, if you run your webpage through a web server you should see a roadmap of Algonquin College at level `16` zoom. Make sure you have the valid API key in your call.

**Zoom Level Number Reference**:

```
1 - World
5 - Continent
10 - City
17 - Buildings
```

[Map Type reference](https://developers.google.com/maps/documentation/javascript/maptypes).

Here is a video by a couple of Google's Developers talking about some common errors when working with the Google Maps API.

<YouTube
    title="Common Google Maps Errors"
    url="https://www.youtube.com/embed/21PDd17dnnI"
/>

The following pages cover adding controls, makers, and managing events on your maps. 

Beyond those things there are additional, related APIs from Google that let us do things like get directions, geocode for addresses, or calculate distances on the map. See the links below for more information on these topics.

## Reference Links

[to get a Google API key](https://developers.google.com/maps/documentation/javascript/get-api-key)

[Home page for Google Maps API](https://developers.google.com/maps/documentation/javascript/)

[GeoCoding API](https://developers.google.com/maps/documentation/geocoding/start?hl=en_GB)

[Maps Distance and Direction API](https://developers.google.com/maps/documentation/distance-matrix/)

[Localizing the Map in different languages](https://developers.google.com/maps/documentation/javascript/localization)