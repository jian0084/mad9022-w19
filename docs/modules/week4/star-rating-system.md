# Star Rating Systems

There are many ways of creating star rating systems with CSS and JavaScript.

The way I will show you here uses the default unicode characters for a filled star and star outline. If you need to write any Unicode character in your HTML, remember that you can use the named shortcuts like:

```html
&nbsp; &gt; &ldquo;
```

These are the named unicode entities for non-breaking space, greater than symbol, and left double quote (decorative).

If you don't know the named unicode entity or there is no name for it then you can use the number that references the character within the UTF-8 character set.

```html
&#2606; &#2605;
```

These are the characters numbers for the stars.

If you need to use one of these unicode values in your CSS, for the value of your content property then just wrap the number inside quotation marks with a backslash at the start. Like this:

```css
element::before{
  content: '\2605';
  display: inline;
}
```

The CSS content property is only allowed to be used inside the `::before` and `::after` pseudo elements. Pseudo elements are elements that do not exist in the HTML but are created through the CSS.

Here is a CodePen showing them in use. Note how the size is controlled through the font-size property and the colour of the stars is controlled through the color property.


<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="mad-d" data-slug-hash="LNEMqN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="mad9022 Rating Stars with Unicode characters">
  <span>See the Pen <a href="https://codepen.io/mad-d/pen/LNEMqN/">
  mad9022 Rating Stars with Unicode characters</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
 

## Scripting for Ratings

Once you have the CSS and HTML created for your rating system then we need to control the appearance of the stars beyond the one that you have clicked on or hovered over.

We want to have a `click` listener for each star.

We want to use a global variable to store the rating and another to store the array of html elements displaying the stars.

When the user clicks on a star we want to highlight that star as well as the ones with lower ratings. If our stars represented the ratings 1 through 5, and their index numbers in the array were 0 through 4, then when the user clicks on the rating star for the value 4 we would want to change the appearance of the index numbers 0 - 3 (less than 4).

We would create a CSS className with the same properties as the :hover::before styles. We can add and remove this class name on each star every time the user clicks on a star.

When you click on a star, get its index number and set the global rating as the index plus one.

Then call your function to update all the stars. Look at the index number of each star and if it is less than the global rating then add the CSS class "rated". If it is the same or higher than the global rating then remove the CSS class "rated".

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="mad-d" data-slug-hash="aJMPWr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Star rating system">
  <span>See the Pen <a href="https://codepen.io/mad-d/pen/aJMPWr/">
  Star rating system</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

And here is a video tutorial on how to make a star rating system.

<YouTube
    title="star rating systems"
    url="https://www.youtube.com/embed/dPCj6Qkq13Y"
/>

 