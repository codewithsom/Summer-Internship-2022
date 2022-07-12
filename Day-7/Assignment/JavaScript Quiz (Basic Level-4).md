# Theory -

### 1. What are anonymous functions in JavaScript ?

* Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

 * For Example :
 ```js
 <script>
var greet = function () {
	console.log("Welcome to CodeWithSom 😎");
};

greet();
</script>

Output : Welcome to CodeWithSom 😎
```
### 2. Explain strict comparison and Abstract comparison in javascript ?

* The strict equality operator `(===)` checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

* For Example :
```js
console.log(15 === 72);
// expected output: false

console.log('hello ☺' === 'hello ☺');
// expected output: true

console.log('17' ===  17);
// expected output: false

console.log(0 === false);
// expected output: false
```

The strict equality operators `(=== and !==)` use the IsStrictlyEqual Abstract Operation to compare two operands.

* If the operands are of different types, return `false`.
* If both operands are objects, return `true` only if they refer to the same object.
* If both operands are `null` or both operands are undefined, return `true`.
* If either operand is `NaN`, return `false`.
* Otherwise, compare the two operand's values :
	* Numbers must have the same numeric values. `+0` and `-0` are considered to be the same value.
	* Strings must have the same characters in the same order.
	* Booleans must be both `true` or both `false`.
	
The most notable difference between this operator and the equality `(==)` operator is that if the operands are of different types, the `==` operator attempts to convert them to the same type before comparing.

# For Examples :

## Comaparing Operands of the same type :
```js
console.log("hello 😃" === "hello 😃");   // true
console.log("hello 😁" === "hi 😉");    // false

console.log(30 === 30);               // true
console.log(38 === 54);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true
```
## Comapring operands of different type :
```js
console.log("31" === 31);           // false

console.log(true === 1);           // false

console.log(null === undefined);   // false
```
