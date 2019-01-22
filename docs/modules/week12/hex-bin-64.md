# Binary, Hexadecimal, and Base-64 Data

## Hexadecimal

Hexadecimal we work with for colours in CSS. There are 16 possible digits 0-9, A, B, C, D, E, and F. The decimal equivalents of 0-F are 0-15.

It is just another way of representing numbers. FF is equal to the decimal value 255. This gets used a lot in programming because computers store everything in binary (which is just ones and zeros). A single `byte` of memory is a group of 8 bits (8 ones and zeros). A `byte` made of eight binary ones is equivalent to decimal 255 or hexadecimal FF. 

JPEGs are called 24-bit images. This is because each pixel uses 3 bytes to store the colour of the pixel. There are 8 bits for red, 8 bits for green, and 8 bits for the blue value. Together that adds up to 24 bits for each pixel.

## Binary | Base-2

Computers all use ones and zeroes to store and transmit information. They use values that are on or off (1 or 0) in memory. When processing things there is either electricity flowing or not. We can actually work directly with the binary values of our data.

Another name for binary is `base-2`. Decimal is `base-10` and Hexadecimal is `base-16`.

## Bitwise Operators
Binary, Decimal and Hexidecimal
Before we can talk about the bitwise operators we need to talk about the binary representation of numbers. 

Humans talk about numbers using the decimal number system. We have 10 different possible digits. We count from 0 to 9 and then after we have run out of digits we add another column. When we get to 99 and have run out of possible connections then we add another column again. At 999 we add a fourth column, and so on.

The same thing happens in binary and hexidecimal. The difference is that in binary we only have two possible digits - zero and one. In hexidecimal we have 16 possible digits. We represent the extra six digits as the letters A to F. Below is a table that shows the decimal numbers 0 to 32 along with their binary and hexidecimal equivalents.

```
--------------------------------------------------
|  DECIMAL  |  BINARY    |  HEXIDECIMAL  |
--------------------------------------------------
|  0  |  0  |  0  |
|  1  |  1  |  	1  |  
|  2  |  10	 |  2  |
|  3  |  11	 |  3  |
|  4  |  100  |  4  |
|  5  |  101  |  5  |
|  6  |  110  |  6  |
|  7  |  111  |  7  |
|  8  |  1000  |  8  |
|  9  |  1001  |  9  |
|  10  |  1010  |  A  |
|  11  |  1011  |  B  |
|  12  |  1100  |  C  |
|  13  |  1101  |  D  |
|  14  |  1110  |  E  |
|  15  |  1111	 |  F  |
|  16  |  10000	 |  10  |
|  17  |  10001	 |  11  |
|  18  |  10010	 |  12  |
|  19  |  10011	 |  13  |
|  20  |  10100	 |  14  |
|  21  |  10101	 |  15  |
|  22  |  10110	 |  16  |
|  23  |  10111	 |  17  |
|  24  |  11000	 |  18  |
|  25  |  11001	 |  19  |
|  26  |  11010	 |  1A  |
|  27  |  11011	 |  1B  |
|  28  |  11100	 |  1C  |
|  29  |  11101	 |  1D  |
|  30  |  11110	 |  1E  |
|  31  |  11111	 |  1F  |
|  32  |  100000  |  20  |
|  ...	|  ...  |	...  |
|  255	|  11111111	  |  FF  |
```

Notice that 10 and 20 in Hexidecimal are both multiples of 16 in decimal.

Also note that every time we add a column in binary that the decimal value is a power of two. 1, 2, 4, 8, 16, and 32. 

If you look at the right-most digit in binary notice that all the odd numbers end in one and all the even numbers end with zero.

1111 in binary is F in Hexidecimal. 1111 1111 in binary is FF in Hexidecimal.

8 bits is a byte. So, the largest number you can store in a byte is FF.

When you talk about 8-bit, 16-bit, 32-bit and 64-bit processors you are talking about the largest number of bits that it could handle at one time. Today, most computers use 64-bit processors. Ten and Twenty years ago 32-bit processors were the norm. Back in the eighties, home computers were 16-bit processors.

When you talk about an image being 16, 24, or 32 bit images you are referring to the number of bits used to represent the colour in each pixel. Gifs are 16 bit. Jpegs are 24 bit. PNGs can be 24 or 32 bit.

When we talk about encryption we talk about 255-bit, 512-bit, or 1024-bit keys. This is the size of the unique number used as a key to encrypt (or garble) the message. The bigger the number the longer it takes another computer to guess. A 1024-bit number is a number between zero and 2 to the power of 1024, which is a HUGE number. 232 is ~4.2 billion. Think of how long it would take you to guess a number between zero and 4.2 billion. 237 (over 100 billion) is the approximate number of stars in the Milky Way Galaxy. 21024 is unimaginably large. 

So, computers store everything as OFF or ON which is represented as 0 or 1. This can mean that electricity is flowing or not. It could mean the presence or absence of something or the orientation of something in two dimensions - up-down or left-right.

Everything we type, every image we create, every song and movie we play is all being stored as a series of ones and zeros.

 

Being able to change the ones and zeros individually requires using the bitwise operators. 

 

Bitwise AND
Mathematical operations and changing the value of bits starts with understanding how the computer changes the individual ones and zeros. The first bitwise operator is call the AND operator. We use it to compare two sets of ones and zeros and if BOTH digits in the same column are a ONE then the result of the AND operation gives us a one.

This is NOT the same as addition.

Here is an example of the AND operation. We will take the numbers 7 and 5 in binary and AND them.

0	1	1	1
0	1	0	1
0	1	0	1
The first row is 7 in binary

The second row is 5 in binary

The third row is the result of 7 AND 5. In JavaScript this looks like:

var result = 7 & 5;
This is often used to determine if there is a one in a specific position. Remember that every time we add another column the number is a power of two? 

1 is 20 or 1 in binary

2 is 21 or 10 in binary

4 is 22 or 100 in binary

8 is 23 or 1000 in binary

If you took any number and did an AND operation with 1, 2, 4, or 8 the result will either be zero or the number you started with (1, 2, 4 or 8). A great way to save a whole bunch of permissions inside a single number.

 

Bitwise OR
The Bitwise OR operator is a pipe character (|). It compares two numbers at the bit level and compares each number in each column. If EITHER number is a one then the result is a one.

Using the 7 and 5 example from above.

0	1	1	1
0	1	0	1
0	1	1	1
And in Javascript this would look like this:

var result = 7 | 5;
The variable result would contain the value 7.

 

Bitwise XOR
XOR stands for Exclusive OR. That means that if only one of the two bits in the column is a one then the result will be one. If both bits are one the result is zero. If both bits are zero then the result is zero.

That seven and five example again with the bitwise operator.

0	1	1	1
0	1	0	1
0	0	1	0
In Javascript this would be written as:

var result = 7 ^ 5;
The variable result would contain the value 2.

 

Bitwise NOT
The bitwise NOT operator is looking for ones and changing them to zeros. The zeros that it finds are being changed into ones.

0	1	1	1
1	0	0	0
In Javascript this would be written as

var result = ~7;
The result variable would contain the value 8.

You are effectively flipping the ones and zeros.

 

Bitwise SHIFT
There are two shift operators which can move the string of binary digits to the left or right.

When you move the string to the right you are cutting off the right-most digits as they pass the imaginary decimal place.

When you move the string of digits to the left you are padding the right side with extra zeros. Each zero that you add is like multiplying the original value by two.

The operators are: shift-right >> and shift-left <<

In JavaScript it would look like this:

var result = 7 >> 1;  //shift the 7 right one column.
At the binary level it would take the 7:

0	1	1	1
And turn it into this:

0	0	1	1
Which is the number 3.

 

var result = 7 << 1;  //shift the 7 left one column 
At the binary level it would take the 7:

0	1	1	1
And turn it into this:

1	1	1	0
Which is the number 14.

 

References & Resources
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators (Links to an external site.)Links to an external site. 



## Base-64
By this point we have discussed three different ways of expressing numbers - decimal, binary, and hexidecimal. Decimal numbers are also called base-10. Binary numbers are base-2. Hexidecimal numbers are base-16. 

Two other numbering systems are are commonly used in programming are base-8 and base-64.

When we say base-64 we mean that there are 64 different digits that we use before we have to add a second column. The first number we get to that uses a second column is 10. It doesn't matter if we are using binary, decimal, hexidecimal, octal, or base-64 the first number with two columns is 10. 

binary	octal	decimal	hexidecimal	base-64
0	0	0	0	0
1	1	1	1	1
10	2	2	2	2
11	3	3	3	3
100	4	4	4	4
101	5	5	5	5
110	6	6	6	6
111	7	7	7	7
1000	10	8	8	8
1001	11	9	9	9
1010	12	10	A	a
As you can see, as each base runs out of different digits it needs to add the next column. This table shows the first 11 digits in each of these five bases.

Since we only have 10 real digits that people use, once we get above that in Hexidecimal (base-16) we need to use 6 extra symbols to represent those last 6 digits. As a standard, we use the letters A - F.

In base-64 there are an extra 54 digits that we need to represent.

The standard for base-64 is to use the digits 0-9 first, then the letters A-Z, then the letters a-z, and finally + and / as the 63rd and 64th digits.

Using base-64 means that we can represent the numbers 0 - 63 with a single digit.

A common use for base-64 is representing binary files (like images) as a string of characters. If we were converting a 32-bit image into a base-64 string representation then each character would be able to represent two pixels. An image with 90,000 pixels (300px by 300px) would need 45,000 characters not including the meta-data to represent the image.

The reason why this gets done is to allow binary files to be stored in and transmitted as part of a data text file. JSON and XML are both text file formats. You can't write binary data inside those files. However, you can convert your binary file into a base-64 string representation of the data and then embed that string inside of a JSON or XML file.

 

HTML and the data-uri format
We are actually allowed to display images on webpages using base-64 encoding. It is known as the data-uri format.

We can use this format in either our HTML <img> tags or in CSS with the url( ) value.

In HTML:

<img src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7" alt="a star image built with base-64"/>
In CSS:

.element{
  background-image: url(data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7);
}
We need a couple things to preface the actual base-64 data.

data:image/gif;base64,

data:image/jpeg;base64,

data:image/png;base64,

One of these needs to preface the base-64 data when assigning it in the HTML or CSS.

 

Transmitting Base-64 Data
We do need to be careful when transmitting the base-64 data between the browser and a server over HTTP/S. The last two characters + and / are both special characters in a URL. So, we should URL encode the string before transmitting it and the URL decode the string after it is received.

In Javascript:

var encodedString = encodeURIComponent( base64String );
//the line above will encode the string so it can be sent to the server.
var decodedString = decodeURIComponent( serverEncodedString );
//the line above will DECODE an encoded string that was sent from the server.
In PHP:

$encodedString = rawurlencode( $string );
//the line above will take a string and encode it with a safe base64 that can be transmitted
$decodedString = rawurldecode( $stringFromBrowser );
//the line above will take the encoded string from the browser and replace things like %20 with literal characters
Spaces in the original string will become %20.

+ in the original string will become %2B

/ in the original string will become %2F

 

References & Resources
https://css-tricks.com/data-uris/ (Links to an external site.)Links to an external site.

https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding (Links to an external site.)Links to an external site.