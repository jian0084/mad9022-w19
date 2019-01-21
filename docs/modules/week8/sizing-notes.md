# Sizing Notes on Images
When you are working with images in a browser you will often need to calculate the size of the image to control how it is rendered on the page. There are actually four different width properties that you can access through JavaScript (and four heights too).

```html
<img src="./img/some-image.png" id="pic" alt="image description" crossorigin="anonymous" />
```

```js
var img = document.getElementById("pic");
console.log(img.width);
console.log(img.naturalWidth);
console.log(img.offsetWidth);
console.log(img.clientWidth);
```

Each of those properties can give you a different value.

```
width - The rendered size of the image on the screen. (Set through CSS or JS or HTML)

naturalWidth - The original size of the image. Warning: this is only available AFTER the image has been downloaded to the browser. Available immediately if the image was in cache.

offsetWidth - The rendered width plus padding and border.

clientWidth - The rendered width plus padding.
```

There are also `height`, `naturalHeight`, `offsetHeight`, and `clientHeight` properties available for images.

Always remember when working with images to maintain the original aspect ratio.

