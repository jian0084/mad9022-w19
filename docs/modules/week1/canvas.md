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

Once you have these two variables you will be able to start adding text, lines, curves, strokes, fills, shapes, images, and more.

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

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/qMPifeAMo7k"
/>


## Working with Images

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/HjxrSMgQLQU"
/>

## Playing Video on Canvas

Coming soon...

<YouTube
    title="Canvas Video Playback"
    url="https://www.youtube.com/embed/"
/>

## Creating Pie Charts on Canvas

Coming soon...

<YouTube
    title="Canvas Pie Charts"
    url="https://www.youtube.com/embed/"
/>

## Creating Bar Graphs on Canvas

Coming soon...

<YouTube
    title="Canvas Bar Graphs"
    url="https://www.youtube.com/embed/"
/>
