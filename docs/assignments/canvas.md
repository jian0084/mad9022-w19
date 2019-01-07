## HTML Canvas Assignment

### Description

You will be creating a webpage that has two canvas elements. These two elements will be displaying InfoGraphics that represent the contents of a JSON file that you create.

Make the Canvas elements responsive so that they are always centered and occupying 90% of the width of the screen, up to a maximum width of 1000px. Make sure to maintain an aspect ratio of 4:3.

The first canvas element should display a Pie Chart of the data.

The second canvas element should display the data as a line graph, a bar chart, objects with relative size, or some other way you want to display it. Be creative.

### The Data

Your JSON file should contain an array with data for 6 - 8 objects. Each object needs to have an `id`, `label` or `name` or `title`, some unique numerical value about it, and then a `color` value. The `color` value can be a string or an array. Inside the array could be multiple colours that you use for an item. Eg: One colour for the label, one colour for the fill, and a third for the stroke.

Your webpage needs to use `fetch( )` to retrieve the JSON file. You must have a `catch()` method to handle failed requests. Only one fetch is required. Use the same data for both charts.

The values in the charts should be displayed to represent a percentage of the total of all the numerical values. 

For each item display the label AND the percentage. The percentage should be to one decimal place and shown with a percentage sign. Eg: `12.3%`. The label and the percentage can be in different places on the charts, as long as they are in a place that will connect them visually with the shape that represents the number.

You can use JavaScript to draw a line from each shape to each label too, as desired.

### Submission

Make sure that your GitHub Username is the same as your Algonquin username.

Create a PRIVATE GitHub Repo called `canvas-charts`. Include a README.md file.

Invite your professor to collaborate on the Repo.

Clone the Repo on your computer. Then start your work locally.

Edit the README.md file with MarkDown to create a description of what the project is an how it works.

On BS LMS, when you are finished your work, submit the URL of your Repo.

No need for a gh-pages branch or GitHub pages version of the repo.
