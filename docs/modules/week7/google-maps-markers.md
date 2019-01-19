# Google Maps Markers

If you want to add markers to a google map using Javascript then you just need to create a new Marker object. The Marker object needs a few properties. One of those properties is a position. Another is the map to which the marker will be added.

```js
let marker = new google.maps.Marker({
      position: {lat: -35.543, lng: 150.123},
      map: map,
      label: 'B',
      title: 'This is the mouse over text'
    });
```

The map property in the code above is being set to a variable called `map`. That variable is the global variable which references the map Object assigned when the map was first created.

The label is a single letter that can be added to the marker. The title is the text to display when the user mouses over your marker.

If you want to replace the default marker with another image, you can like this:

```js
marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
```

Google has a set of these images. Just change the colour in the name of the image.

Each time you call the method:

```js
new google.maps.Marker( )
```

You will be creating a new Marker Object on your map. If you want to be able to remove the marker at a later time or add event listeners to the marker then you need to assign it to a variable, like the example does with the variable `marker`.

[Marker reference](https://developers.google.com/maps/documentation/javascript/markers).

## Animating Markers

When adding markers to the map you can animate their appearance so that they drop down from the top of the map or they bounce up and down on a specific point.

```js
let marker = new google.maps.Marker({
  map: map,
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: {lat: 59.327, lng: 18.067}
});
marker.addListener('click', toggleBounce);

function toggleBounce(ev){
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
```

The example above would add a marker at the specified position by animating it onto the map with a DROP animation. Then when the user clicks on the marker it would toggle the BOUNCE animation on or off.

[Marker Animation Reference](https://developers.google.com/maps/documentation/javascript/markers#animate)

## Map InfoWindows

An InfoWindow on a Google Map is an object placed on the map at a specific latitude and longitude which looks like a speech bubble. Here is some sample code that shows how to create an InfoWindow.

```js
let infoWindow = new google.maps.InfoWindow({map: map});
let position = {
              lat: 45.5678,
              lng: -75.5432
            };
infoWindow.setPosition(position);
infoWindow.setContent('Location found.');
map.setCenter(position);
```

This will create an infoWindow, place it at the defined position, set the text inside the `infoWindow` as `"Location found."`, and then center the map on that position. 

[InfoWindow reference](https://developers.google.com/maps/documentation/javascript/infowindows)

## References

If you want to be able to cluster markers when zooming out (so the user sees a single marker with a number of how many other markers are clustered together inside the cluster marker then have a look at this reference

- [Marker Reference](https://developers.google.com/maps/documentation/javascript/markers)
- [Marker Animation Reference](https://developers.google.com/maps/documentation/javascript/markers#animate)
- [InfoWindow reference](https://developers.google.com/maps/documentation/javascript/infowindows)
- [Marker Clustering](https://developers.google.com/maps/documentation/javascript/marker-clustering)

