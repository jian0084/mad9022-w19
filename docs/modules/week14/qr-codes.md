# QR Codes

## What are QR Codes

QR Codes are just one type of barcode. They are also known as 2D barcodes. Here is a sample version.

![QR-code.jpg]() This one contains the text 12345678.

There are many barcode scanners that you can download for any mobile device. They use the camera to take a picture of the barcode and then convert the code into text. You can take any string you want and convert it into a code like the one above. The more text you encode, the more little black squares will be in the code. With a QR Code, there are always three unique squares in the top left, top right, and bottom left corners. These squares are for orientation purposes so the code can be properly read.  

There is a level of error handling that can be set in the code which will duplicate the message once or more. This helps when part of the code is obscured.

The colours for the code can be anything as long as there is enough contrast between foreground and background.

The code can have a type that will let the reading application know if it is supposed to be a URL, an email address, or even plain text.

## Creating QR Codes with JavaScript

There are a few JavaScript libraries that you can use to generate a QR code as a Canvas image or as an SVG image. 

One that I recommend is http://davidshimjs.github.io/qrcodejs/ (Links to an external site.)Links to an external site. - for our mobile Cordova apps we can just download the minified JS file and include it in our www/js/ folder.

[Here is a codepen](http://codepen.io/mad-d/pen/rejdpK/) that runs some sample code for that JS library.
 

## Reading QR Codes with Cordova plugin

When it comes to reading QR Codes we need to use a plugin. We can use the camera plugin to take a picture of a code but we need native code to analyze the image. Instead, we should use a barcode scanner plugin which includes the native code for interpreting the QR Code.

One such plugin is - [https://www.npmjs.com/package/flyacts-plugin-barcodescanner](https://www.npmjs.com/package/flyacts-plugin-barcodescanner)

```
cordova plugin add flyacts-plugin-barcodescanner
```

<YouTube
    title="QR Codes with JavaScript"
    url="https://www.youtube.com/embed/xeLsiAj3fI8"
/>