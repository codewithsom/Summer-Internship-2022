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
