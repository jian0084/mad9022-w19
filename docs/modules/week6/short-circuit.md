# Logical Short Circuiting in JavaScript

When you are writing your scripts you should always try to take advantage of the process of short-circuiting. The JavaScript interpreter doesn't want to do extra work if it doesn't have to. Try to write your code so that it doesn't have to.

Let's consider this if statement that is comparing multiple conditions.

```js
let a = 5;
let b = 10;
let c = 20;
if( a > 1  || b > 30 || c > 10 ){
  //this code runs if ANY of the three comparisons are true
}
```

Since we are using `OR` operators between all three tests the interpreter stops as soon as it runs the left-most test. a is greater than 1 so this first test is true. The other tests will never be run.

If there is an AND operator then the conditions on either side of the AND will both be tested before moving on.

```js
if( a > 1 && b > 30 || c > 10 ){
  //this code will run because...
}
```

In this second if statement all three conditions are tested. The AND forces the interpreter to look at both `a > 1` as well as `b > 30`. `b` is not greater than 30, so this test fails. The `c > 10` test passes and then because of the `OR`, the whole if statement passes. 

However, is it passing because:

1. the first test passed AND it was followed by one of the last two passing;

2. either the first two pass OR the final one passes?

This lack of clarity is why you should use parentheses to group your tests the way you intend.

```js
if( (a > 1 && b > 30) || c > 10){
  //this passes because of c being greater than 10
}
```

Grouping your tests with parentheses and then putting them in the most likely order to pass is one type of short-circuiting. 

## Variable Assignment Short-circuiting

Sometimes you will have variables that are declared in one part of your code but assigned a value in another. Sometimes you will have arguments for your function that may or may not have a value in them.

When situations like this occur, you may want to provide a default value before using the variable. Take this code as an example:

```js
function createMicrobrewery(name) {
  let breweryName;
  if (name) {
    breweryName = name;
  } else {
    breweryName = 'Hipster Brew Co.';
  }
}
```

This is the situation that we described but it is a lot of code to do a simple thing. Short-circuiting is a way that we could solve our problem in a much more manageable way.

```js
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.'
}
```

This function does the exact same thing but uses short-circuiting. 

By putting the OR operator between the two values we are forcing the JavaScript interpreter to make a decision about which value to assign to the constant breweryName.

We can do this with an OR operator anywhere in our code that we want. The interpreter will look at the value to the left of the ||. If that value is not a falsely value ( false, null, undefined, 0, NaN, "") then it will be used. If it IS a falsey value then the one to the right of the || will be used.

Also, important to note, is that if the first value is truthy, the interpreter will not even bother to look at the one on the right side.

```js
let a = 5;
let b = 0;
let c = a || b;
```

The variable `c` will be assigned the value 5. Only `a` will be examined.

```js
let d = 0;
let e = 7;
let f = d || e;
```

The variable `f` will be assigned the value 7. Both `d` and `e` will be examined.

 <YouTube
    title="Logical Short Circuiting"
    url="https://www.youtube.com/embed/MR0ohAODlOI"
 />
 