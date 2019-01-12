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

## Looping

If you want to loop through an Array and do something with each item then we would use the `forEach()` method.


If you want to create a new Array which is the same length as the original Array, and based in some way on the values of the original array, then we would use the `map()` method.


If you want to create a new Array which holds a selected group of values from the original Array which all meet some common requirement, then we use the `filter()` method.


If you want to calculate a single value, like an average or a sum, based on the items in the original Array, then we use the `reduce()` method.


## Editing an Array

There are a number of ways that we can change an Array.

`pop()` and `push()` will remove and add items from the end of the Array.

`shift()` and `unshift()` will remove and add items from the start of the Array.

`slice()`

`splice()`

`join()` will combine all the items in an Array and turn them into a single String.

