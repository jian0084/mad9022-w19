# Google Maps Events
When you create a Google Map, there are a variety of events that we can work with. Not just the typical mouse events that you would have on a web page, but ones specific to the types of interactions you would have with a map, or things that the map could do.

```
bounds_changed
center_changed
click
dblclick
drag
dragend
dragstart
heading_changed
idle
maptypeid_changed
mousemove
mouseout
mouseover
projection_changed
resize
rightclick
tilesloaded
tilt_changed
zoom_changed
```

Here is an example of events on a google map. The google maps API has a method called `addListener` which is similar to the native `addEventListener` method that you use in JavaScript. It takes the name of the event followed by a function which will run when the event happens to the `map` object. (Events can also be added to `marker` objects). This example waits for the center of the map to change. When it does it sets a delay of 3 seconds to call a function which will reset the center of the map to the position of the marker.

```js
map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
```

It will also add a listener to the marker which sets the level of zoom on the map to 8 and sets the center of the map to the location of the marker.

We can use the same approach to add listeners for any of the events.

## Reference

[Google Map Event reference](https://developers.google.com/maps/documentation/javascript/events)
