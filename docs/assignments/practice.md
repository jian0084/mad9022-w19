# Practice Exercises

## Counting Letters

Create an HTML file with the following content inside the `<body>`.

```html
    <form>
        <input type="text" maxlength="1" id="letter" /> 
        <button id="btn">Click to Count</button>
    </form>
    <div id="count"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt earum consectetur, aperiam labore explicabo odio sequi, ad dignissimos. Nemo molestias, id itaque eum minus deleniti laudantium voluptas. Hic, explicabo, consectetur.</p>
    <p>Nihil aut temporibus veritatis veniam voluptas maxime, ut, facilis ipsam magni, labore nesciunt similique consectetur doloribus! Corrupti tenetur quas odio cum ducimus, omnis eum dolor sit, non itaque perferendis ipsa.</p>
    <p>Consequatur molestias, minus quod veritatis culpa praesentium fugiat, non beatae ab assumenda dolore quo maiores velit alias vitae quasi officiis id possimus! Odit accusamus veritatis nulla. Eaque, ratione aut accusamus.</p>
    <p>Blanditiis iste itaque, sit possimus, vero quam corrupti eius officia expedita doloremque quibusdam. Ad minima nesciunt officiis blanditiis ducimus, consequatur repudiandae est explicabo! Facilis accusantium, ea harum id dolore cupiditate!</p>
    <p>Beatae amet, ab voluptate asperiores fugiat nulla rem deserunt nobis dolore, inventore nesciunt nihil, soluta, eum culpa qui quibusdam est cupiditate maxime quisquam repellendus! Soluta impedit in, qui possimus rem!</p>
    <script>
        
    </script>
```

Write the script so that when the user enters a letter inside the input and clicks the button you will count how many of those letters exist inside the five paragraphs of lorem ipsum text.

Make sure that you are checking for a letter inside the input before trying to do the count.

Make sure that you are adding up the number of matching letters inside all five paragraphs.

Once you have a total, display it inside the div with the id `count`.


## Data reduction

Using the [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method convert an array into an average of all the values in the array.

Start with the following HTML inside the `<body>`.

```html
    <form>
        <input type="number" value="" id="num"/>
        <button id="avg">Calculate the Average</button>
    </form>
    <div id="output"></div>
    <script>
        let numbers = [75];
        let calc = (ev) => {
            ev.preventDefault();
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('avg').addEventListener('click', calc);
        });
    </script>
```

Complete the `calc()` function to have it add the new number from the input field to the `numbers` array and then use the `Array.prototype.reduce` method to calculate the average of the numbers array.

Make sure to check that a number has been entered in the input field before trying to add it to the array and calculate the average.

Make sure to clear the input field after adding the number to the `numbers` array.


## Mapping

Use the [Google Static Maps API](https://developers.google.com/maps/documentation/maps-static/intro) to display a map image on your webpage based on a latitude and longitude entered in two input fields.

Start with this HTML:

```html
    <form>
        <div class="formBox">
            <label for="lat">Latitude</label>
            <input type="text" id="lat" placeholder="latitude"/>
        </div>
        <div class="formBox">
            <label for="lng">Longitude</label>
            <input type="text" id="lng" placeholder="longitude"/>
        </div>
        <div class="formBox">
            <button id="btnMap">Get Map</button>
        </div>
    </form>
    <div id="mapArea">
        <img src="" alt="Map Image" id="mapImg" />
    </div>
    <script>
        let getImg = (ev) => {
            ev.preventDefault();
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btnMap').addEventListener('click', getImg);
        });
    </script>
```

Register for a [Google API Key](https://developers.google.com/maps/documentation/maps-static/get-api-key#step-1-get-an-api-key) that you can use in requesting the Map images.

Complete the `getImg` function which will request a new image from the Google Static Map API by setting the `src` attribute of the `mapImg` image element to call on the google static map API and pass the latitude, longitude, and your API key through the query string.

Make sure to check that the value for the latitude is a value float between -90 and 90, and the longitude is a valid float between -180 and 180 before passing them as part of the image src.


## Message Countdown (Part I)

Think Twitter. Create a script that listens to a textarea and counts how many letters the person has typed. They are allowed to type up to 140 characters. You need to track how many characters they have in the textarea and display how many they have left that they are allowed to type. 

After they have reached the maximum number of characters, you need to remove anything else that they type so that only the first 140 characters are visible.

Start with this HTML inside the `<body>`:

```html
    <form>
        <textarea id="tweet"></textarea>
        <p><span>140</span> characters remaining.</p>
    </form>
    <script>
        document.addEventListener('DOMContentLoaded', ()=>{
            
        });
    </script>
```

Attach the input event, which will be fired on each keystroke, to the textarea.

Display the remaining number of characters inside the `<span>` below the textarea.


## Message Countdown (Part II)

Once you have the Message Countdown script working then add the following enhancements to your page.

1. If there are 40 or fewer characters left change the text colour for the contents of the `<p>` to amber.
2. If there are 15 or fewer characters left, change the text colour for the contents of the `<p>` to red.
3. Set a default colour of green or blue for the message in the `<p>`.
4. Using the ::before or ::after pseudo-element add a line above or below the textarea which is 3px thick and the same colour as the message below the textarea. The line should start at the left edge of the text area. The width of the line should reflect the percentage of how full the textarea message is. Eg: If the user has typed 70 / 140 characters and the textarea is 400px wide then the line should be 200px wide. 

For the message colour try to use CSS class names that get added or removed as needed.

