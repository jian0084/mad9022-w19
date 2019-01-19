# Rest and Spread Operators

## Rest Operator

Another new feature that ES6 brought to us for Function Parameters is the Rest Operator.

It allows us to capture an unknown number of parameters being sent to a function within a single variable.

```js
function x(name, num, ...other){ 
  //the variable other is an array that will handle any number of additional parameters
}
```

The three periods in front of the variable name represent the rest operator. It will send the rest of the parameter values into the variable "other".

We can call the function with a variety of parameters, like this:

```js
x("Roger", 7, null);
x("Roger", 7, true, "abc");
x("Roger", 7, false, "def", 14);
x("Roger", 7, false, "abc", 72, null);
```

The variable "other" inside the function would be an array which contains 1, 2, 3, and 4 values sequentially, during the four calls to the function.

## Spread Operator

Similar to the Rest operator is the Spread operator.

If you have a variable that holds an Array you can then use the spread operator in front of the variable name to make the variable appear as a series of values. It spreads out the values of the Array.

```js
let first = ['a', 'b', 'c', 'd'];
let second = [1, 2, ...first, 3, 4];
let third = [1, 2, first, 3, 4];
```

So, here we have two Arrays, "second" and "third", which are nearly the same. The only difference is the spread operator in front of the variable "first".

The values in these variables will be as follows:

```js
[1, 2, 'a', 'b', 'c', 'd', 3, 4]     //contents of second
[1, 2, [Array], 3, 4]                //contents of third
```

Notice that the "third" Array has an Array as it's third item.