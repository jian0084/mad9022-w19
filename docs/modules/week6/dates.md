# Working with JS Dates

There are many ways to create a `Date` object. But it will always represent a single moment in time.

```js
let today = new Date(); //today will be an object that represents the current date and time in the browser
let today1 = new Date(1549912008224);  //use a timestamp to create a Date object
let today2 = new Date('March 17, 2018 12:00:00'); //create a Date object from a string
let today3 = new Date(2018, 2, 17, 12, 0, 0); // March 17, 2018 @ 12:00:00pm pass in the numbers for the date parts
```

There are `get` and `set` methods that you can use to change the individual parts.

```js
let h = today.getHours();
today.setHours(h + 1);
let y = today.getFullYear();
today.setFullYear(y + 5);
```

You can also output the full date and/or time with one of these methods.

```js
today.toString(); //the whole date, time, timezone, etc
today.toDateString();  //just the date part In American English
today.toTimeString(); //just the time part. In American English

//output the time or date or both with localized and customized versions
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
today.toLocaleDateString('en-CA', options); //just the date localized
today.toLocaleTimeString('fr-CA', options);  //just the time localized
today.toLocaleString('de-DE', options);    //both date and time localized
```

The basic workings of using the `Date` object are covered in this first video.

<YouTube
    title="Working with Dates and Times"
    url="https://www.youtube.com/embed/weA9FTMzK-E"
/>

This next video covers the fundamentals of using and generating timestamps for use as filenames or unique id values.

<YouTube
    title="Timestamps Date.now and valueof"
    url="https://www.youtube.com/embed/hES4Pj6pDCM"
/>

Finally, this last video looks at the new browser capabilities for localizing international dates and times.

<YouTube
    title="Internationalization of Dates and Times"
    url="https://www.youtube.com/embed/_o2OHTwjtts"
/>