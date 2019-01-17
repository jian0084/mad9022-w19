# Cross-Origin Resource Sharing (CORS)

## CORS

CORS stands for Cross-Origin Resource Sharing. It refers to the process by which the browser can make HTTP Requests to load an HTML file from one domain and then other things like images, fonts, stylesheets, and scripts from different domains.

If the browser is making the request based on what it read in an HTML or CSS file then this can be done freely.

If the cross-domain request is coming from some JavaScript code then there are restrictions in place.

JavaScript can use the Fetch API or XMLHttpRequest objects to make requests for resources like XML, JSON, text, images, stylesheets, fonts, videos, audio files, etc. However, we have to follow a restrictive list of rules to be able to make those requests.

## Headers

When you configure the `fetch( )` call with the Request and Headers objects you can only use the following:

Method can only be `GET`, `HEAD`, or `POST`

The only headers that can be set are: `Accept`, `Content-Type`, `Accept-Language`, and `Content-Language`. No other headers can be altered for a CORS request.

Accept tells the server what types of files you are willing to accept as a response. `Content-type` tells the server what type of file you are sending. The only three values allowed for Content-Type are `text/plain`, `multipart/form-data`, or `x-www-form-urlencoded`.

## Mode

When using the Fetch API we can set the CORS mode for the request. Basically we are going to tell the server that we do or do not want to make a cross-domain request.

Inside our Request options we define the mode like this:

```js
let options = {
    method: "GET",
    mode: "cors"
}
```

The mode can be `cors`, `same-origin`, or `no-cors`. If we set it to `cors` then we are telling the browser to look for the proper permissions to come back from the remote webserver telling us that CORS is allowed. If we set it to `same-origin` then we are telling the browser that it should prevent the JavaScript from making calls to any domain except the one where the HTML came from. `no-cors` tries to make an opaque attempt to get external sources but does not currently work within the global scope of the page.

## Behind the Scenes

When you make a CORS AJAX call from your JavaScript code there are actually two requests being made. An initial request called a pre-flight request gets sent from the browser to the server. This request includes a header providing the domain from which the request is being made. 

For the communication between the server and the browser to finish properly, the server needs to respond to the initial preflight request with a Response that includes a header called `Access-Control-Allow-Origin`. The value for this header must match exactly your URL or be set to a wildcard.

With Apache, we can create a settings file called `.htaccess` and inside that file add this line:

```
Header set Access-Control-Allow-Origin "*"
```

This will create the required header to allow for cross origin requests.

The `.htaccess` file must be in the folder or a parent folder for the resource being requested.

 

## What Gets Restricted

There are actually quite a few things that can get restricted when requesting resources over CORS. For our immediate purposes, it is important to note that a webpage making a request from edumedia.ca to darksky.net would not be allowed to use the JSON data.

If you set the mode to `same-origin` or `no-cors` then the request would be entirely rejected.

If you set the mode to `cors` then the request would be sent and the JSON data returned but we would not be allowed to use the data in our JavaScript. 

[MDN CORS reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
