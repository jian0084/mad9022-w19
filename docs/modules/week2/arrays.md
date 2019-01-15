# Arrays

## Sorting

When sorting data in an array, there is a built-in method `sort()` but you have to remember that it can only sort items in an alphabetical order. While this may be exactly what you want, if you want to sort things in a numerical order the built-in sort will not work.

Thankfully, we have a solution. `sort()` accepts an optional parameter - a function that will run a custom sort. The function will run when `sort()` gets called. It will automatically be passed two elements from the array. The function will be called over and over until all the items are sorted. Each time it gets called, it will compare the two items and return either 1, 0 or -1. Those values represent whether the first item should be before, the same or after the second item.

```js
/*****  custom sort   ******/
let arr = [1, 4, 3, 6, 2, 12, 22, 13, 18];

arr.sort( (a, b) => {
    if( a > b){
        return 1;
    }else if( b > a){
        return -1;
    }else{
        return 0;
    }
});
```

Note that the original array will be modified.

#### Array Sorts

<YouTube 
    title="Manipulating and Sorting Arrays"
    url="https://www.youtube.com/embed/C3EPTuXKRw0"
/>

#### Custom Sorting

<YouTube 
    title="Custom Sorting Arrays"
    url="https://www.youtube.com/embed/zVevl-K-m7Y"
/>

## Looping Through Arrays

If you want to loop through an Array and do something with each item then we would use the `forEach()` method.

```js
myArray.forEach( (item, index, arr) => {
    console.log(`${item} is the value at position ${index}`);
});
```

<YouTube 
    title="forEach Method"
    url="https://www.youtube.com/embed/159EAISAxwg"
/>

If you want to create a new Array which is the same length as the original Array, and based in some way on the values of the original array, then we would use the `map()` method.

```js
let myArray = ['abc', 'def', 'ghi', 'jkl'];
let newArr = myArray.map( (item, index, arr) => {
    console.log(`${item} is the value at position ${index}`);
    return item.toUpperCase();
});
```

<YouTube 
    title="map Method"
    url="https://www.youtube.com/embed/hfYa4ugeyuc"
/>

If you want to create a new Array which holds a selected group of values from the original Array which all meet some common requirement, then we use the `filter()` method.

```js
let myArray = ['abc', 'def', 'ghi', 'jkl'];
let newArr = myArray.filter( (item, index, arr) => {
    console.log(`${item} is the value at position ${index}`);
    if(item.indexOf('a') > -1 || item.indexOf('e') > -1 ){
        return true;
    }else{
        return false;
    }
});
```

<YouTube 
    title="filter Method"
    url="https://www.youtube.com/embed/WrB_--bVbbs"
/>

If you want to calculate a single value, like an average or a sum, based on the items in the original Array, then we use the `reduce()` method.

```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = nums.reduce( (accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0)
```

<YouTube 
    title="reduce Method"
    url="https://www.youtube.com/embed/6_XzV25rkcE"
/>

The cool thing about `map()`, `filter()`, and `reduce()` is that they can be chained together to simplify your code. The reason we can chain them together is that they all return a copy of the Array. 

<YouTube
    title="Chaining Array Methods"
    url="https://www.youtube.com/embed/WnP_ssWDBWU"
/>

There are other ways to loop as well. These can also be used with Arrays.

#### for loops

<YouTube
    title="for loops"
    url="https://www.youtube.com/embed/CidzYW-8I7s"
/>

#### for...in loops

<YouTube
    title="for in loops"
    url="https://www.youtube.com/embed/prl73KRkB34"
/>

#### for...of loops

<YouTube
    title="for of loops"
    url="https://www.youtube.com/embed/wc4jMuumqLM"
/>

and to understand for...of loops better you need to understand the difference between iterable and enumerable.

<YouTube
    title="Iterable vs Enumerable"
    url="https://www.youtube.com/embed/HZjvoftRvGE"
/>

#### Nested Loops

<YouTube
    title="Nested Loops"
    url="https://www.youtube.com/embed/AqgVLYpBWG8"
/>

## Editing an Array

There are a number of ways that we can change the contents of an Array.

`pop()` and `push()` will remove and add items from the end of the Array.

`shift()` and `unshift()` will remove and add items from the start of the Array.

`slice()` will extract a range of elements from an Array. It returns the elements that you slice out and leaves the original Array the way it was.

`splice()` will alter the original Array by removing a range of length 0 or more and optionally replacing it with one or more new elements.

`join()` will combine all the items in an Array and turn them into a single String.

<YouTube 
    title="Split and Join"
    url="https://www.youtube.com/embed/ub9s1TPyZ00"
/>

There are lots of other Array methods that you can use too - `from()`, `every()`, `some()`, `includes()`, and more.

[YouTube Array tutorial Playlist](https://www.youtube.com/watch?v=arIhhRd1RPc&list=PLyuRouwmQCjnupe_ohQgFvwFZF8dycwK8&index=1)

[MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
In the left hand menu you will find links for each of the Array methods.