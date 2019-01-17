# Single Page Applications (SPA)

A Single Page Application, at its most basic is just a single HTML file with CSS and JS connected to it.

It will have multiple areas inside the `<body>` element which are hidden or shown at different times. As the user clicks on links you need to decide which of these areas to show or hide. Typically this is done by adding or removing CSS classNames which will take care of hiding areas as needed.



## CSS Page Transitions

When working with CSS animations we need to be aware that some properties have a much higher penalty, in terms of performance.

If you want to move an element around the screen, using top and left will cause constant repaints of the entire screen. Using display block and display none on elements will cause repaints of the screen.

Using 3D transforms and opacity will activate the GPU in the device and will only draw the parts that need to be redrawn. It is much more efficient for the processor to handle these.

[Here is a CodePen sample](https://codepen.io/mad-d/pen/rjLpwQ) which demonstrates this effective animation approach.

<p data-height="265" data-theme-id="0" data-slug-hash="rjLpwQ" data-default-tab="js,result" data-user="mad-d" data-pen-title="CSS Page Transitions" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" class="codepen"><span>See the Pen <a href="https://codepen.io/mad-d/pen/rjLpwQ/">CSS Page Transitions</a> by Mobile Application Design-Development (<a href="https://codepen.io/mad-d">@mad-d</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```js
The JavaScript portion of this CodePen is using an IIFE version of the init script.

var app = (function(){
 let pages = [];
 let links = [];
 
 document.addEventListener("DOMContentLoaded", function(){
   pages = document.querySelectorAll('[data-page]');
   links = document.querySelectorAll('[data-role="link"]');
   //pages[0].className = "active"; - already done in the HTML
   [].forEach.call(links, function(link){
     link.addEventListener("click", navigate)
   });
 });
 
 function navigate(ev){
   ev.preventDefault();
   let id = ev.currentTarget.href.split("#")[1];
   [].forEach.call(pages, function(page){
     if(page.id ===id){
       page.classList.add('active');
     }else{
       page.classList.remove('active');
     } 
   });
   return false;
 }
 
 return {
     pages,
     links
   }
})();

//at this point we could use things like app.pages or app.links
``` 

The navigate function here works with any number of page links. The DOMContentLoaded function will find all the pages and all the links and save them in the pages and links variables.

That way we can loop through all the pages and set the active class on just the one page we want. The active class will be removed from all other pages.

This example is using the href attribute in the anchor tag. An alternate approach would be to create our own custom property in the anchor tags. Eg:

```html
<a href="#" data-target="home">Home</a>
```

This example would be used to target a page with the id "home".

```html
<section data-page="home" id="home">
```

By using the data-target property in the anchor tag, we could also target those links with our CSS in a way that would avoid other links on our pages.

```css
a[data-target]{
  /* all our main nav links would be styled by this selector */
}
```

