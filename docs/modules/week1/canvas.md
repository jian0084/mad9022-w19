# HTML5 Canvas

## Canvas Introduction and Shapes

In your HTML, the `<canvas>` element is just an empty container that you give an id. If you use CSS to style the width and height, make sure that you are giving the element the same width and height through JavaScript. At the very least, we need to make sure that the aspect ratio is the same.

```html
<canvas id="canvas"></canvas>
```

In your Javascript is where we will do most of the work with the Canvas element. You will need two variables and get a reference to the canvas element as well as its rendering context. The context will be either `2d` or `3d`.

```js
let canvas, context;

document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
})
```

Once you have these two variables you will be able to start adding text, lines, curves, strokes, fills, shapes, images, and more. Watch the following video for more information.

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/uh1Sgj2Gt70"
/>


## Drawing Lines

Most of the commands that you will call with the canvas will be methods of the context object.

On the context object we can set styles and properties that will be used for drawing lines and shapes and adding text.

```js
context.lineWidth = 5;  //lines will be 5px thick
context.strokeStyle = '#bada55'; //lines will be green
context.linecap = 'square';  //the shape of the end of the line
context.beginPath();  //start a new layer in your drawing
context.closePath();  //stop adding things to the current layer
context.stroke();       //draw the stroke (line) portion on your current layer
context.fill();         //draw the fill portion of your current layer on the canvas.
```

Watch this video for more details, properties, and methods.

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/-Guz9o-GiB0"
/>


## Adding Text

When adding text, we will be setting properties that are a lot like CSS and then calling the `stroke()`, `fill()` or both methods to make the text appear on the canvas.

```js
context.font = 'bold 20px Arial, Calibri, Helvetica, sans-serif';
context.fillStyle = 'red';
context.lineWidth = 1;   //thickness of the stroke
context.strokeStyle = '#333';
context.textAlign = 'start';  //same as left if text direction is ltr
context.fillText('Hello', 100, 20);  //Write 'Hello' at coords (100,20) 
context.strokeText('Hello', 100, 20);  //Write 'Hello' at coords (100,20) 
```

Watch this video for more details, properties, and methods.

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/qMPifeAMo7k"
/>


## Working with Images

Images can be added to the surface of a Canvas. They can be resized, rotated, or cropped while being added too. Here is the most basic way to add an image by copying one from an image element onto the canvas.

```js
let source = document.getElementById('myImage');
context.drawImage(source, 0, 0);  //draw the image just like a background image on the Canvas
                                    // start drawing at coords (0,0)
```

The source can be an image created with `document.createElement()` or one on the page or a video element or another canvas element.

Once the image is on the canvas we can access each of the pixels in the canvas, which is why the width and height matter. We can ask for the red, green, blue, or alpha value for each pixel. The `context.getImageData()` method is how we access this data. The returned object will have a property called `data` which is the array of all the individual values. Each item in the array is an unsigned 8 bit integer (value from 0 - 255). The first four values are for the first pixel. The second four values are for the second pixel, and so on. The pixels are read from left to right and from top to bottom, inside the area that you define.

```js
let dataObj = context.getImageData(0, 0, canvas.width, canvas.height);
let len = dataObj.data.length;
for(let i=0; i<len; i++){
    console.log('value', i, ': ', dataObj.data[i]);
}
```

We can read from and write to that array in order to retrieve or change the values.
Watch this video for more details and options.

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/HjxrSMgQLQU"
/>

## Playing Video on Canvas

Video elements can be used as a source for displaying images on the canvas element. The difference with video is that you have to continually grab frames from the video and put them onto the Canvas. You have to write the script which will replace the contents of the canvas with the next frame. There is no automatic way to update the canvas element with the next video frame.

<YouTube
    title="Canvas Video Playback"
    url="https://www.youtube.com/embed/_2SvAepbCSg"
/>

## Creating Pie Charts and Bar Graphs on Canvas

Creating any kind of chart on the Canvas is just a matter of drawing lines, rectangles, circles, or other shapes. These things are pretty basic. The only challenge is really looping through the data in a logical way and doing the Mathematical operations in the right order to draw the shapes.

Sometimes it is the raw data from the XML or JSON that you use. Sometimes you will have to calculate a total and / or an average. Then the points or shapes that you are plotting will be a percentage of that value.

#### Canvas Pie Charts

<YouTube
    title="Canvas Pie Charts"
    url="https://www.youtube.com/embed/ihe5yeEAeHg"
/>


## Rotating the Canvas or Elements on the Surface

We actually can't rotate individual elements on the Canvas. However, what we can do is rotate the context before adding a layer and then put it back to it's original orientation after adding the layer content.

We would first need to `save` the current location and rotation of the canvas. Then we need to `translate` the context to the point around which we want to rotate. This means taking the (0,0) point, which is the top, left corner and moving it to the rotation point. Next, we `rotate` the context in the opposite direction to what we want for the rotated content. Finally, we `restore` the context to what it was before our `translate` and `rotate`.

```js
context.save(); //we are saving a restore point, just like in a game.
context.translate(200,200);
context.rotate(3.14);   //angles of rotation are always in radians, not degrees
context.beginPath();
context.font = '20px Helvetica, Arial';
context.textAlign = 'center';
context.fillText("Hello World", 0, 0); //adding it at what will be (200,200)
context.closePath();
context.restore();
```

This video covers the concepts of rotate, scale, and translate as well as the ability to create save points on the context to create an apply more complex combinations of elements on the Canvas.

<YouTube
    title="Canvas Transformations"
    url="https://www.youtube.com/embed/5vxygxshTQ4"
/>

## Clearing the Canvas

If you ever want to remove part of what has been added to the canvas, or wipe the whole surface, we can use the `clearRect()` method.

```js
context.clearRect(0, 0, canvas.width, canvas.height);
```

It takes four arguements - the starting `x` and `y` value of the rectangle you want to remove, plus the width and height of the rectangular area you want to clear.

## Image Data on Canvas

One of the really cool features about the HTML Canvas (beyond the drawing capabilities) is the ability to manipulate images on the Canvas at the binary level. We can manipulate individual pixels and change the red channel, green channel, blue channel, or alpha channel of that pixel.

This means you can convert an image to greyscale or sepia. You could extract the levels in the image, create custom filters, average pixel values and create mosaic or pixelated or blurred effects.

You can read the data from multiple sources and add it to the Canvas as a resulting image.

You can grab frames from a video that is playing off screen and draw the screenshots on the Canvas. Want to grab screenshots from a video and use them as the thumbnail image? Canvas can help you do that.

### Placing the image on the Canvas

This is a simple step. Just use the drawImage( ) method of the context object.

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
var img1 = document.createElement('img');
img1.addEventListener('load', function(ev){
  //image has been loaded
  ctx.drawImage( img1, 0, 0);
});
//alternate image source
var img2 = document.getElementById('myImage');
ctx.drawImage( img2, 0, 0);
```

The image source can be an image from creating an image element in the DOM or an existing image on the page or an image that the user selected with a form <input type="file" /> element.

The code above shows how to add the image from two different sources. In a real context, you would do only one of these two things, not both.

The next two values are the starting x and y coordinates for adding the image to the Canvas.

There are two more optional parameters which would be the width and height of the part of the image to add to the Canvas.

### Resize the Canvas to match the Image 

This is an optional step. Sometimes you want the size of the Canvas to match the size of the image. We would do this to avoid having any blank white areas in our extracted image data.

Wait for the image to be loaded onto the Canvas and then resize the Canvas to match the dimensions of the image.

```js
var w = img1.width;
var h = img1.height;
c.style.width = w + 'px';
c.style.height = h + 'px';
c.width = w;
c.height = h;
```

We want to set BOTH the HTML properties for width and height AS WELL AS the CSS width and height properties on the Canvas.

### Reading the Pixel Values from the Image
If we want to access the data of the image on the Canvas then we can use the context's getImageData( ) method.

**WARNING:** If the image comes from a different origin than the HTML file you will have a CORS issue and the browser will NOT let you work with the data from the image.

This will return an object that contains an Array of 8-bit (one byte) numeric values. Each group of four values represents a pixel. The first value is the red channel value, the second is the green, the third is the blue, and the fourth is the alpha channel value. The fifth value in the Array would be the red channel value of the second pixel in the image. The Array just repeats through those four values from each pixel in order from left to right, top to bottom.

```js
var imgData = ctx.getImageData( );
var data = imgData.data;   //this is the Array
```

The length of the data Array will be the same as the number of pixels multiplied by 4. The number of pixels will be the same as the image width multiplied by image height.

To loop through the pixels you can either use a single for loop and look at each value individually OR you can use a set of nested loops and use the width and height (row and column) values to target pixels and then look at the targeted value or the next three in the data array.

version one (single loop)

```js
for(var i=0, len=data.length; i<len; i=i+4){
  //notice that we are incrementing by 4 each time
  var red = data[i];
  var green = data[i+1];  //could also be data[++i] if incrementing the loop by one
  var blue = data[i+2];   //could also be data[++i] if incrementing the loop by one
  var alpha = data[i+3];  //could also be data[++i] if incrementing the loop by one
  
}
```

version two (nested loops)

```js
for(var x=0, w=img1.width; x < w; x++){
  for(var y=0, h=img1.height; y < h; y++){
    var pixel = x * y * 4;
    var red = data[pixel];
    var green = data[++pixel];  //putting the ++ in front of the pixel means increment before using
    var blue = data[++pixel];
    var alpha = data[++pixel];

  }
}
```

### Updating the Image Data

Whether you are using a single or nested loop approach to reading the data the update process is the same.

You change the values that are stored inside your imgData.data Array.

Each value is an 8-bit number between 0 and 255 (or 0x00 and 0xFF in hexidecimal) ( or 0000 0000  and  1111 1111 in binary).

Let's say that we want to remove the red and green information from the image. We only want to keep the current blue value and set alpha to full. Using the nested loop example from above...

```js
for(var x=0, w=img1.width; x < w; x++){
  for(var y=0, h=img1.height; y < h; y++){
    var pixel = x * y * 4;
    data[pixel] = 0;    //the red value
    data[++pixel] = 0;  //the green value
    pixel++;            // just increment past data[++pixel];
    data[++pixel] = 255; //full alpha
  }
}
```
Once you have finished your loop you just need to pass this updated Array back to the Canvas.

### Rendering the Updated Data

To pass the new Array values back to the Canvas we will call the context's putImageData( ) method.

```js
ctx.putImageData( imgData.data );
```

This will immediately update the Canvas with the new image data. 

## Additional Resources

- [HTML Canvas Tutorial](https://www.html5canvastutorials.com/tutorials/html5-canvas-element/)
- [Flavio Copes Canvas Tutorial](https://flaviocopes.com/canvas/)
- [Canvas Intro CodePen](https://codepen.io/mad-d/pen/oZxVNv)
- [Canvas Image CodePen](https://codepen.io/mad-d/pen/YPNoKN)
- [Canvas width vs style.width CodePen](https://codepen.io/mad-d/pen/yMNrXX)
- [Canvas PieChart CodePen](https://codepen.io/mad-d/pen/PwpjoJ)
- [Canvas Rotation CodePen](https://codepen.io/mad-d/pen/EPEZpw)
- [Canvas Bar Chart CodePen](https://codepen.io/mad-d/pen/JoEPOo)
- [Manipulating Video on Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Media Events MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Events#Media_events)
- 