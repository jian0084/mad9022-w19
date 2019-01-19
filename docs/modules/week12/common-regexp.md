# Common Regular Expression Patterns

Regular Expressions is the name given to the process of pattern matching. Most programming languages have an implementation of Regular Expressions and the implementations are fairly standard. Once you know how to use them in one language (like JavaScript) then you will be able to use them in other languages (like PHP).

You start by creating a Regular Expression (RegExp) Object and provide it with a pattern. Then you can pass it small or large pieces of text for it to search through and find matches.

## Creating a RegExp

In JavaScript we have two ways of declaring a RegExp object.

```js
var pattern = new RegExp('hello');
//OR
var pattern = /hello/;
```

Both of these will create a RegExp object with the pattern `hello`. We could use this to search through other text for the letters h - e - l - l - o, in that order.

Of course, that is a pretty restricted search pattern. We have many options that we can use to search for more complex patterns. A common example would be to search for any valid email address.

Consider what it would be a valid email address:

- Start with at least one letter
- underscores or periods are allowed as long as they are not the first character
- An @ symbol after those letters
- At least one letter followed by a period
- At least two letters after that period
- It must end with a letter 
- We can define all that as a pattern to search against.

This is the power of RegExp.

## Character Sets and Groups

Within our patterns we can use square brackets to create sets. The pattern will want to match anything from within the set.

```js
let pattern = /[0123456789]/;
```

This pattern will match against any single number. It could also be rewritten using a hyphen.

```js
let pattern = /[0-9]/;
```
This is much more efficient since it is a continuous series (with no gaps in the numbers).

Many of these sets are common enough to have their own escape sequence. An escape sequence is a backslash followed by a single character.

```js
let pattern = /\d/;
```

This version with the `\d` is the exact same as the two previous patterns.

Using this we could define something that looks for a date using this format `YYYY-MM-DD`.

```js
let pattern = /\d\d\d\d-\d\d-\d\d/;
```

This pattern requires 4 digits followed by a hyphen, then two digits, then another hyphen, then two more digits.

Here are some other common escape sequences:

```
\d - matches any digit

\D - matches any NON-digit

\w - matches any alphanumeric character (word character) same as [a-zA-Z0-9_]

\W - matches any NON-alphanumeric character. same as [^a-zA-Z0-9_]

\s - matches any whitespace character (tab, space, newline, etc)

\S - matches any NON-whitespace character

\b - matches any word boundary (similar to whitespace but includes punctuation)

.   - matches any character except newline

\t - tab character

\n - newline character

\r - carriage return
```
 

## Negation

If you put a caret character (^) inside the square brackets then the set will be treated as opposite. That means it will match anything except what is defined inside the square brackets.

```js
let pattern = /[^ab]/;  //matches anything except a or b.
```

## Repetition 

When you add a plus sign after a pattern or set it means that it can be repeated more than once.

```js
let pattern = /\d+/;     //matches one or more digits
```

If you want zero or more matches (basically making it optional) then you can use an asterix.

```js
let pattern = /\d*/;    //matches zero or more digits
```

A question mark will match the pattern or set zero or one time. Not more.

```js
let pattern = /colou?r/;      //matches color OR colour
```

If you want to match a pattern or set a specific number of times then you can add a number wrapped in curly braces - `{3}`. Let's use all these to match that date pattern again but allow either 1 or 2 digits for the month and day and exactly 4 digits for the year.

```js
let pattern = /\d{4}-\d{1,2}-\d{1,2}/;
```

Notice that you can have a range inside the curly braces too. `{2,4}` would mean between 2 and 4 repetitions. If you add a comma but no second value then it means that number or higher - `{5, }` means 5 or more. 

Another thing worth noting about this pattern is that we are accepting ANY numbers for the date. It would happily match  7855-99-99. If you wanted a closer match then you would have to define the pattern better.

 
## Groups

The square brackets gave us the ability to create a group of possible matches. When we use parentheses (round brackets) then we are defining a small pattern that needs to match everything.

```js
let p1 = /[abc]/;        //matches a single "a" or "b" or "c"
let p2 = /[abc]+/;       //matches one or more "a", "b" or "c"
let p3 = /(abc)/;        //matches "abc" only
let p4 = /(abc)+/;       //matches one or more "abc"
```

If the plus sign is inside the parentheses then it only applies to the letter directly in front of it.

```js
let pattern = /(abc+)/;       //matches "abc" or "abcc" or "abccc" ....
``` 

## Choice Patterns inside Groups

```js
let pattern = /(pizza|burger|shawarma)/;      //matches "pizza" or "burger" or "shawarma"
```

We can add options inside a group by adding the pipe character. We are saying that the pattern is one of those three things. Add a plus sign to the end, outside the parentheses and you will match one or more of any of those three items.

## Pattern Start and End

Sometimes we need to know if a pattern starts and/or ends with a specific character or group of characters. 

```js
let pattern = /^(hello)(.|\n)+(goodbye)$/i;   
// this will match any string that starts with "hello" and ends with "goodbye" 
// and that has one or more of any characters in between
```

^ represents the start of the string

$ represents the end of the string

If you start your pattern with the ^ caret then the first part of your pattern must match at the beginning of the string. If you end your pattern with the $ dollar sign then the end of your pattern must match at the end of the string being searched.


## Modifiers

Beyond just defining the pattern in your RegExp you can also apply modifiers to tell the pattern things like whether or not it needs to be case sensitive or not.

```js
let pattern = /(Fred)/i;  //matches "fred" or "Fred" or "FRED" etc. Case-insensitive
```

The i modifier will make your whole search pattern case-insensitive.

The g modifier will make the search "global". What this really means is if you are doing a replace it will replace ALL matches, not just the first.

There are others too m - multiline, u - unicode points, y - sticky, but i and g are the common ones.

## Summary

[A summary of different matches from one of the tutorials listed in the Reference section below.](http://eloquentjavascript.net/09_regexp.html#summary_regexp) 


## Test, Match, and Replace

RegExp objects have `test( )`, `match( )`, and `replace( )` methods that we can call to find out if our pattern appears in a string.

The `test( )` method will give us a true or false return value based on whether the pattern was found in the string or not.

The `match( )` method will return an array of matches from within the string.

The `replace( )` method will look for a match and if it finds one, replace it with another string.

## References

[MDN RegExp Object Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

[test( ) method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

[match( ) method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)

[replace( ) method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)

[Tutorialspoint REGEXP tutorial](https://www.tutorialspoint.com/javascript/javascript_regexp_object.htm)

[Sitepoint RegExp Tutorial](https://www.sitepoint.com/expressions-javascript/)

[Eloquent JS RegExp Tutorial](http://eloquentjavascript.net/09_regexp.html)

[Website for testing your patterns](https://regex101.com/)

