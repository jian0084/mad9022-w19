# Network Connections and Offline Info

## Network Connections

Part of the HTML5 spec is the ability of the browser to determine whether or not it is current connected to a wi-fi connection, a cell tower connection, or no connection at all. New developments also let us determine if the connection is metered as well as the general bandwidth of the connection.

The topics to be covered on this page include:

- onLine and offLine events
- navigator.connection API
 

## onLine and offLine

If you want to know whether or not a browser is connected to a network currently or in the future then you need to check the navigator property or add an event listener.

```js
if(navigator.onLine){
  alert('online')
}else{
  alert('offline');
}
``` 

The above code will check the status of whether or not the device is currently online. To have something happen in the future when the value of the online property changes we need to add an event listener.

```js
window.addEventListener("offline",function(e){
  alert("offline");
},false);

window.addEventListener("online",function(e){
  alert("online");
},false);
``` 

There is an online event and an offline event. Both events are attached to the window object.

<YouTube
    title="offline and online"
    url="https://www.youtube.com/embed/pV7ovhx8sAk"
/>

## Navigator Connection Information API

This is the most recent part of this whole system. With the connection API we an determine not only IF we are connected but to what kind of connection and how fast it is.

This is done exclusively through Javascript. There is nothing in HTML or CSS dealing with the connection API.

```js
let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection;
```

First, we will create a global variable called connection. It will point to a list of possibilities. navigator.connection is the proper object. If that object does not exist then the browser will return a false value. This will make the browser try to assign the next possible object to the variable. If that fails, it moves on to the next. This will continue until the first successful object is found.

Now we need to listen for the change event to occur on the object.

```js
connection.addEventListener("change", connChange, false); 
``` 

If you want to run the function immediately to get the information before a change occurs then you can just call the same connChange function directly.

```js
function connChange( ){  
  console.log("Bandwidth is approx: " + connection.bandwidth + "MB/s");
  if( connection.metered ){
    console.log("Connection is metered");
  }
}
``` 

As a reference for the connection bandwidth, consider that most network providers quote values in Megabits per second and a typical busy mobile 3G connection will be around 400Mbps ~= 400,000 bits/s ~= 50Kb/s ~= 0.05MB/s.

Also remember that the connection API is still under development and could change.

### Type of Connection

There is also a type of connection, such as `LTE`, `3G`, or `WIFI`. This part of the Network Connection API is still under development but has some mobile support.

```js
let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
let type = connection.type;

function updateConnectionStatus() {
  console.log("Connection type is changing from " + type + " to " + connection.type);
  type = connection.type;
}

connection.addEventListener('typechange', updateConnectionStatus);
//listen for changes to the type of connection
```

The above code sample would be useful if we wanted to keep track of when the user loses their WIFI connection and is now on a metered connection, i.e. is paying for the bandwidth.

Here is the W3C page talking about [the Network Connection API](https://w3c.github.io/netinfo/#type-attribute). This link points to the section that talks about possible values for the type property. 

<!--
<YouTube
    title="Network Information API"
    url="pending"
/>
-->

## Building Offline-First Apps and Sites

[This article](http://hood.ie/blog/minutes-offline-case-study.html) is a great summary of how `minutes.io`, a meeting note taking app, was built as an offline-first site.

PWA - Progressive Web Apps is the term used to describe apps that can work in an offline-first manner.
 

## Reference Links

[Sitepoint Network Info Tutorial](http://www.sitepoint.com/use-network-information-api-improve-responsive-websites/)

[HTML5Demos Online events](http://html5demos.com/nav-online) 

[MDN Online and Offline](https://developer.mozilla.org/en/docs/Online_and_offline_events)

[MDN Network Info API](https://developer.mozilla.org/en-US/docs/WebAPI/Network_Information)
