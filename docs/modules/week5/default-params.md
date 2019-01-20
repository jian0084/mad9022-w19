# Default Function Parameters

Up until recently, when you declared a function you would create the number of parameters that you want by adding a list of variables. This wouldn't control how many values were passed to the function though. If you knew that the function might be called with or without the parameters then you needed to write if statements in your function to handle these situations.

(Or you could use short-circuiting.)

As part of the ES6 update to JavaScript, we now have the ability to provide default values for function parameters.

```js
function isAdmin(name, admin=false){
  if(admin){
    console.log("ADMIN:", name);
  }
}
```

The above function could be called now, either with or without the admin value.

```js
isAdmin("Dean");            //no output
isAdmin("Sam", false);      //no output
isAdmin("Castiel", true);   //ADMIN: Castiel
``` 

<YouTube
  title="Function default params"
  url="https://www.youtube.com/embed/cN0Yg58Cjx8"
/>

## References

[https://www.sitepoint.com/es6-default-parameters/](https://www.sitepoint.com/es6-default-parameters/)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
