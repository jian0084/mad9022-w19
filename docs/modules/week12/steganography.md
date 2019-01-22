# Steganography

**Steganography** - is the practice of concealing a file, message, image, or video within another file, message, image, or video.

The way we are going to achieve this is:

1. Take an image with a mobile device camera
2. Place that image on an HTML `<canvas>`
3. Fetch the array of image pixel data with `context.getImageData()`
4. Start looking at the data starting a predetermined pixel number from the array.
5. Select the 8-bit integer that represents the blue channel in the image.
6. Either read or set the last (right-most) bit from that number.
7. Repeat reading or setting the last blue channel bit in every pixel until we reach the end of the message we are reading or the end of our bits we need to insert into the image.


## Things we need to know

Every character in our message will be written as a two-byte integer. That is a number between 0 and 65535 in decimal or between 0 and 1111 1111 1111 1111 in binary.

This means we will need to write 16 bits into the image for each character.

That means we will use 16 pixels for each character in our message. This might sound like a lot of pixels. A 140 character tweet would need 2240 pixels. However, a small image that is only 200 pixels wide and 200 pixels high would contain 40,000 pixels. Our message would only use 5% of the pixels in that very small image.

## Reading the last bit from an integer

If we were looping through the array of image pixel data from an image on a canvas, each number represents either the red, or green, or blue, or alpha value for a pixel. Here is how you could loop through each value in the array.

```js
let imageData = context.getImageData(0, 0, width, height);
//width and height are the width and height of the area you want to read
//typically this is the whole canvas.
for(let i=0, len=imageData.data.length; i<len; i=i+4){
  //we are incrementing by 4 each time to move forward one pixel at a time
  let red = imageData.data[i];
  let green = imageData.data[i+1];
  let blue = imageData.data[i+2];
  let alpha = imageData.data[i+3]
} 
```

If we wanted to start at the 20th pixel in the image then we would change the initial value for i to 4 * 20.

So, the variable blue would contain the integer value representing that colour.

If we wanted to read the last bit from that number we would use the bitwise AND operator. The variable blue will be a number between 0 and 255. (or 0000 0000 and 1111 1111 in binary).

```js
let bit = blue & 1;
```

This will just look at the last bit and if it was a one then the result will be one. If the last bit is zero then the result will be zero.

Here is an example showing the number 130 AND 1.

```
1	0	0	0	0	0	1	0
0	0	0	0	0	0	0	1
0	0	0	0	0	0	0	0
```

The first row is 130. The second row is 1. AND them together and the result is zero.

Repeat for the next blue channel integer.

If you were reading the bits from a character, we take the 16-bit number representing the character's number and do an AND operation for each column. 

Remember that we can shift bits left and right? If I took a 16 bit value and shifted it over 15 places I would be left with a single bit. If I then AND that single bit with the number 1 my result will be either 1 or 0. That is exactly what I want. I shift the number a different number of positions to target each column in turn. AND each result with one to get the one or zero for that last column.

```js
let character = "A";
let num = character.charCodeAt(0); //get the numeric 16-bit value of the character at position zero in the string.
let firstCol = (num >> 15) & 1; //16th column
let secondCol = (num >> 14) & 1; //15th column
let thirdCol = (num >> 13) & 1;
//and so on
let fifteenthCol = (num >> 1) & 1; //2nd column
let sixteenthCol = (num >> 0) & 1;  //1st column
Our example was creating a new variable for each bit. In the real world we would just be doing this in a loop and adding each bit to an array that holds all the bits.

let message = "hello";
let bitArray = [];
for(let char=0; char<message.length; char++){
  //once for each letter in the message
  let num = message.charCodeAt(char);
  for(let col=15; col>=0; col--){
    //loop once for each bit in the character
    let bit = (num >> col) & 1;
    bitArray.push( bit );
  }
}
```

Now we have array of ones and zeros that represent all the bits that would write out the message "hello".

## Updating the last bit from an integer

The process for writing to the last bit is very similar. We will have our array of ones and zeros. One at a time we will loop through our array of bits and insert a single bit into our blue channel number.

Let's say we have an array of integers representing the blue channel values from our image. We also have an array of bits that represent the letter "A" which we want to embed in the image blue channel data.

We will use the bitwise shift right to remove the last bit. Then shift it back to the left. Now we know that the last digit will always be zero. Then do a bitwise OR with the bit value from our array.

```js
let blues = [128, 54, 250, 251, 230, 190, 34, 35, 36, 65, 123, 77, 78, 79, 45, 33];
let newblues = [];
let bitArray = [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1]; //number 65
let currentBit = 0;
for(let b=0; b<blues.length; b++){
  //loop once for each blue value
  let right = blues[b] >> 1;
  let left = right << 1;
  newblues.push( left | bitArray[currentBit] );
  currentBit++;
}
```

Some of the bits in the numbers that previously ended in ones will now end in zeros. Others that previously ended in zeros will now end in ones. Other bits are not affected.

See this codepen to see the code samples from here in action - [http://codepen.io/mad-d/pen/e9e41b8d414b94fa1be071888b94c520](http://codepen.io/mad-d/pen/e9e41b8d414b94fa1be071888b94c520)

