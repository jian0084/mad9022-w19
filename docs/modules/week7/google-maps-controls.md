# Google Maps Controls

There are a variety of controls that you can add to a map. The types include:

```
Zoom control
Map type control
Street view control
Rotate control
Scale control
Fullscreen control 
```

If you want to add these controls to the map, it should be done when you are making your initial call to create your map object.

```js
let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: -33, lng: 151},
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: false
  });
```

By default the controls are mostly hidden. You can add any combination of them by using true and false values.

There are also other properties that let you manage the style and positioning of the different controls. See the documentation link below for more information. 

[Controls Reference](https://developers.google.com/maps/documentation/javascript/controls)
