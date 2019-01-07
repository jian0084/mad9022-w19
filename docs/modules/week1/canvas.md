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

Video coming soon...

<YouTube
    title="Canvas Video Playback"
    url="https://www.youtube.com/embed/"
/>

## Creating Pie Charts and Bar Graphs on Canvas

Creating any kind of chart on the Canvas is just a matter of drawing lines, rectangles, circles, or other shapes. These things are pretty basic. The only challenge is really looping through the data in a logical way and doing the Mathematical operations in the right order to draw the shapes.

Sometimes it is the raw data from the XML or JSON that you use. Sometimes you will have to calculate a total and / or an average. Then the points or shapes that you are plotting will be a percentage of that value.

#### Canvas Pie Charts

<YouTube
    title="Canvas Pie Charts"
    url="https://www.youtube.com/embed/ihe5yeEAeHg"
/>


#### Canvas Bar Graphs

Video coming soon...

<YouTube
    title="Canvas Bar Graphs"
    url="https://www.youtube.com/embed/"
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

Video coming soon...

<YouTube
    title="Canvas Rotation"
    url="https://www.youtube.com/embed/"
/>

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