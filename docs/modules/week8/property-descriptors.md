# Property Descriptors

Property Descriptors are like properties that you set on the properties inside your own Objects.

Let's say you have an Object called `character` and it has a property called `health` and another one called `name`. The `health` property is something that you want to change over time. The `name` you want to keep the same. So, we can set the `writable` property descriptors on those properties to `true` and `false`.

```js
const character = {};

Object.defineProperty(character, 'name', {
  value: 'Rex',
  writable: false
});

Object.defineProperty(character, 'health', {
  value: 10,
  writable: true
});
```

There are some property descriptors called the `data descriptors`. `Data descriptors` have a value.

1. `configurable` defaults to `false`
2. `enumerable` defaults to `false`
3. `writable` defaults to `false`
4. `value` defaults to `undefined`

The others are called `accessor descriptors`. These have no value.

1. `get` defaults to `undefined`
2. `set` defaults to `undefined`
3. `configurable` defaults to `false`
4. `enumerable` defaults to `false`

When you create an Object and give it a property, unless you indicate otherwise, it is automatically given the `data descriptors` and their default values.

<YouTube
    title="Property Descriptors"
    url="https://www.youtube.com/embed/LD1tQEWsjz4"
/>

<YouTube
    title="ES5 Getters and Settings"
    url="https://www.youtube.com/embed/IbqCWoFO410"
/>

## References and Resources

- [MDN Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
- [MDN Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [MDN Object.defineProperties()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
- [MDN Object.getOwnPropertyDescriptors()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [MDN Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [MDN Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [MDN Object.getPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
- [MDN Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [MDN Object.prototype.isPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)