# JavaScript Event Loop

Your first step in understanding the order of execution of your JavaScript code was understanding that events call functions in the future, when users interact with your pages.

The second step was understanding how hoisting affected the execution order, or at least the results of code that you wrote.

The third step is understanding the JavaScript Event Loop.

Consider this code sample:

```js
function printing() {
  console.log(1); 
  setTimeout(function() { console.log(2); }, 1000); 
  setTimeout(function() { console.log(3); }, 0); 
  console.log(4);
}

printing();
```

What order would you expect to see the numbers 1, 2, 3, and 4 appear in the console?

The correct answer is - 1, 4, 3, 2.

1 makes sense being at the top of the function. 

2 makes sense because there is a delay of a full second before that function runs.

3 is the odd ball. The function called by setTimeout to log the number 3 says that there should be a delay of zero seconds before logging 3. However, the setTimeout function is actually being added to a queue for later execution. This queue is part of the JavaScript Event Loop.

4 appears after number 1 because 2 and 3 have been added to the queue for later execution.

Think back to the [page about JavaScript Timers](../week3/timers.md) and the result of putting zero as the delay. 

Now, instead of writing a lengthy explanation of what the JS Event Loop is and how it works, instead I will ask that you watch these videos

<YouTube
    title="Philip Roberts and the JS Event Loop"
    url="https://www.youtube.com/embed/8aGhZQkoFbQ"
/>

from the JSConf EU 2014 conference, where Philip Roberts does a great job explaining all aspects of the JS Event Loop. It is 26 mins long. Try to watch it all in one sitting.

