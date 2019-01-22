# Uploading Files with Fetch

We have already used fetch to upload variables that can be read from $_GET and $_POST in PHP. Now we need to upload files that can be read from `$_FILES` in PHP.

For example, if you were to take a picture on a mobile device which was saved on the device, and then you wanted to upload that image to the web server. How would you attach that image to your fetch call?


## Request Object

When you make a fetch call to a server resource, the simplest form is to just provide a URL string. Beyond that we can pass in a Request object. This lets us add data and define parameters.

```js
let req = new Request(url);
fetch(req);
```

It's simplest form also allows us to just provide a URL. Then we pass the request object to the fetch method as its only parameter.

To set options within the Request we add a second parameter object where the parameters are defined.

```js
let req = new Request(url, {method:'POST', mode:'cors', body:{'name':'value'} });
fetch(req);
```

Then you pass the request with parameters to the fetch, same as before.

## Basic Fetch Call with Request Body

In the second example of Request above we had a parameter called body. It's value was a JavaScript object. This is a valid way to pass data to the server. However, we can also put a FormData object there that will hold strings, numbers, objects, or files.

```js
let fd = new FormData();
fd.append('name', 'value');
let req = new Request(url, {method:'POST', mode:'cors', body: fd});
fetch(req)
  .then(function(response){}) 
```

## Working with FormData object

The basic syntax for the FormData object uses the new constructor to create the object and then the append method to add items into the object.

```js
let fd = new FormData();
fd.append('name', 'value');
```

The value object can be a string, an object, a Blob, or a File object.

If you add a Blob or File object as the value then the optional third parameter lets you provide a name for the file.

## Putting Files into FormData

One of the possible form input types in HTML is type="file". This will allow the user to select a file from their computer to upload along with the rest of the form data.

```html
<input type="file" accept="image/*" id="myfile" />
```

When you access these elements through JavaScript, they have a property called files which is an array of file(s) that were selected by the user.

```js
let input = document.getElementById('myfile');
let file = input.files[0];
```

The variable file above would represent the first file selected and referenced by the input element.

The last step is to put that file object into the FormData object.

```js
let fd = new FormData();
fd.append('picture', file);
let req = new Request(url, {method: 'post', mode: 'cors', body: fd});
fetch(req);
```

Now we have the file from the OS saved inside the FormData object and the FormData object assigned to the body property inside of the Request object.

## Combining Cordova Pictures with Fetch and FormData

If you are using the Cordova plugin to take and save pictures, then the getPicture method will be passing back a fileURI. This is the location of the file in your Android or iOS device. 

We can pass this URI to the value property of the file input element. Then our file object should hold a reference to the image file on the device.

```js
navigator.camera.getPicture( successCallback, errorCallback, options );

function successCallback(fileURI){
  let input = document.getElementById('myfile');
  input.value = fileURI;
  let file = input.files[0];
  let fd = new FormData();
  fd.append('picture', file);
  let req = new Request(url, {method:'POST', body: fd} );
  fetch(req)
    .then(response => {
      //reply from the server is back
    }).
    catch( err => {
        console.error(err.message);
    });
}
``` 

## Uploading Images Extracted from HTML Canvas

When you have an image displayed on the HTML Canvas, that image could be from an image element, a screen grab from a video, an image generated on the Canvas with JavaScript, or an image that came from a device Camera.

The `<canvas>` has two methods that allow us to extract the image from the element. One returns the base-64 version and one returns the binary version. The base-64 version is covered on another page. Here we will be discussing the use of the binary version of the image.

```js
canvas.blob(function(blob){
  //this function runs when the blob (Binary Large OBject) is returned from the Canvas.
  //the variable blob holds the object returned from the Canvas.
  let fd = new FormData();
  fd.append('image', blob, 'sample.png');
  //now send to the server with fetch.
  //create new Request()
  //call fetch(req)
  //on the server we would get $_FILES['image']
}, 'image/png');
```

The `blob( )` method will return the binary version of the image.

The first parameter is the callback function that will run when the image has been extracted. The variable passed to the function will be a Blob (a binary large object).

The second parameter of the `blob()` method is the image type. `'image/jpg'` is the default. We want to use png for our apps because we want to keep the alpha channel and make sure that we don't lose anything in the compression. PNG is lossless compression. JPG has lossy compression.

<YouTube
    title="Fetch File Uploads"
    url="https://www.youtube.com/embed/JtKIcqZdLLM"
/> 
