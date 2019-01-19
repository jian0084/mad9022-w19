# Geolocation

One of the new APIs that was made available as part of the evolution of HTML is Geolocation. That is the ability for the browser to return a device's latitude and longitude based on actual GPS data, ISP, IP address, or wi-fi network.

Step one is determining if the device / browser supports geolocation.

```js
if( navigator.geolocation ){ 
  //code goes here to find position
}
```

Once you know that it is supported then you can write the code to use it.

The `navigator.geolocation` object has a getCurrentPosition method which takes three arguments - a callback function for success, a callback function for failure, and a properties object.

```js
let params = {enableHighAccuracy: true, timeout:360000, maximumAge:0};
navigator.geolocation.getCurrentPosition( watchPosition, gpsError, params ); 
``` 

The three parameters - enableHighAccuracy, timeout, and maximumAge - can be passed to the getCurrentPosition method. enableHighAccuracy means actually making a call to the GPS satellite data. This means using the device radio antenna and having to wait for the data. So, it can cause a delay in your application and a drain on the battery. The trade off is more accurate information (within 3m). timeout is the number of milliseconds to wait before requesting new info. maximumAge is how long to keep data before considering it out of date. A value of zero for maximumAge means request a value immediately.

The successful callback function will be passed a position object when called. The position object will give you access to all the GPS info you need, like latitude, longitude, altitude, and accuracy. Inside the position object is a coords object which contains all the properties.

```js
function watchPosition( position ){ 
  console.log( position.coords.latitude );
  console.log( position.coords.longitude );
  console.log( position.coords.accuracy );
  console.log( position.coords.altitude );
}
``` 

The error callback function will be passed an error object that has a numeric value. You can see the meaning of the numbers in this function.

```js
function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}
``` 

Note: it is important to remember that the user will always be prompted by the browser for permission to access their location. If they say no, then none of your geolocation code will run. 


## Links to help with Geolocation

[CODEPEN sample](http://codepen.io/mad-d/pen/mymOBy?editors=101)

Here are some URLs with helpful information:

[HTML5 Doctor](http://html5doctor.com/finding-your-position-with-geolocation/)

[MDN Reference](https://developer.mozilla.org/en/docs/WebAPI/Using_geolocation)

[Dive Into HTML5](http://diveintohtml5.info/geolocation.html).

[HTML5 Demos](http://html5demos.com/geo).

[Sitepoint]http://www.sitepoint.com/html5-geolocation/)
