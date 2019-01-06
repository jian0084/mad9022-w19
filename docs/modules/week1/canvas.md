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

<YouTube
    title="Canvas Intro and Shapes"
    url="https://www.youtube.com/embed/-Guz9o-GiB0"
/>


## Adding Text

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
