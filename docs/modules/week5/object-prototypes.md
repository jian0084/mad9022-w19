# JavaScript Objects and Prototypes

JavaScript is a Prototype-based language rather than a Class-based language.

Since this semester you are learning about Classes in your Object Oriented Programming course, hopefully this distinction will begin to become clear for you here.

`Classes` are like Blueprints that you use to create new Objects.

`Prototypes` are an actual Object. They are the example Object that others should emulate.

If I were to create a Class and a Prototype, each with 50 properties and 50 methods, then create 10 Objects using the Class and 10 Objects using the Prototype, the biggest difference is that every one of the Objects created from the Class would now have their own copy of the 50 properties and the 50 methods. The Objects created from the Prototype would not have any properties or methods of their own. The would use a lot less memory. Instead they would all have access to the properties and methods that were stored inside the Prototype.

```js
function Character(nm){
    this.name = nm;
    this.health = 100;
    this.speed = 5;
}
Character.prototype.addWeapon = function(weapon){
    //code
}
Character.prototype.attack = function(weapon){
    //code
}
Character.prototype.defend = function(){
    //code
}

let bob = new Character('Bob');
let katie = new Character('Katie');

bob.addWeapon('sword');
katie.addWeapon('wand');
bob.attack('sword');
katie.defend();
```

So, `bob` and `katie` are Objects of type `Character`. We are using the keyword `new` to call the function `Character`. This means that the function will automatically return a new Object. It also means that the keyword `this` is referring to the Object that is being created.

The `Character` Objects have a prototype. Inside the prototype is where any shared methods and properties can be saved. We call `addWeapon` for both `bob` and `katie`. The method `addWeapon` is not inside the `Character` function. That means it is not inside the object `bob` or `katie`. Instead, the method `addWeapon` is kept inside the prototype of `Character`, which is shared by both `bob` and `katie`.


<YouTube
    title="Introduction to Prototypes"
    url="https://www.youtube.com/embed/dgpaY5wjJ9w"
/>

A couple related topics that are important to understand along with Prototypes are `new` and `this`.

<YouTube
    title="Keyword New"
    url="https://www.youtube.com/embed/I2CdrKlPdAY"
/>

<YouTube
    title="Keyword this"
    url="https://www.youtube.com/embed/syhNj7X0Vvk"
/>

## I Thought JavaScript Had Classes Now

No.

As part of ES6, JavaScript gained the keywords 'class', 'constructor', 'static', and 'extends'. However, this is only syntactic sugar. It is something they added to the language to make people coming from Object Oriented languages like Java or C++ more comfortable. Behind the scenes, it is all still prototypes.

## Example Using Prototypes 

Here is an example of prototypes being used to extend a native object, an Array, with new functionality.

<YouTube
    title="Practical Prototypes with Arrays"
    url="https://www.youtube.com/embed/7C8xKTHd6Mw"
/>

## Object.create and Object.assign

There were two methods added in ES5 that can be used to create or merge objects and set their prototype. The methods are `Object.create()` and `Object.assign()`.

Calling `create` or `assign` will create an Object the same way as calling a function with the `new` keyword. Both methods will return a brand new object. Both methods accept a first parameter which is the Object to use as the `prototype` for the Object being created.

Here is a new version of the code from above that uses `create`.

```js
let Character = {
    name: null,
    addWeapon: function(wpn){
        this.weapon = wpn
    },
    attack: function(){

    },
    defend: function(){

    }
}

let bob = Object.create(Character);
bob.name = 'Bob';
let katie = Object.create(Character);
katie.name = 'Katie';

bob.addWeapon('sword');
katie.addWeapon('wand');
bob.attack();
katie.defend();
```

<YouTube
    title="Object Create Method"
    url="https://www.youtube.com/embed/qqyZn8X9M3I"
/>

<YouTube
    title="Object Assign Method"
    url="https://www.youtube.com/embed/UkGsRyGeI2g"
/>

