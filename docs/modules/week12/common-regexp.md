# Common Regular Expression Patterns

Here is a list of common RegExp patterns that can be used for validating user input.

**Email Addresses**

```
/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/
```

**Phone Numbers**

```
/^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
```

**Date Strings**

```
/^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/
```

**URLs**

```
/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
```

**HTML Tag**

```
/^<([a-z]+)([^<]+)*(?:>(.*)</1>|s+/>)$/
```

**Postal Code (Canadian)**

```
/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●[0-9][A-Z][0-9]$/
```

**Postal Code (US) **

```
/^[0-9]{5}(?:-[0-9]{4})?$/
```

**A 3 or 6 Digit Hex Code**

```
/^#?([a-f0-9]{6}|[a-f0-9]{3})$/
``` 

### Credit Card and IMEI number validation

Another common type of pattern based validation is the validation of credit card numbers or IMEI numbers, which are the identifying numbers for cell phones.

Here is a JavaScript function that users Regex to check for numbers and then uses the LUHN-10 algorithm to validate that the number provided matches the proper pattern.

```js
let luhn_validate = function(imei){
    return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){ 
            return n===(imei.length-1)
                   ? 0 
                   : sum + parseInt((n%2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
        }, 0)) % 10 == 0;
};
```

Want to read more about [how the LUHN algorithm works?](https://en.wikipedia.org/wiki/Luhn_algorithm)

 