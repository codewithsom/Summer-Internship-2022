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

## Strict Equality Operator `(===)`

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
## Comapring operands of different types :
```js
console.log("31" === 31);           // false

console.log(true === 1);           // false

console.log(null === undefined);   // false
```
## Comparing Objects :
```js
const object1 = {
  name: "Hi 🙂"
}

const object2 = {
  name: "Hi 🙂"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
```
## Abstract Equality Operator `(==)`

The Abstract Equality Operator checks whether two operands are equal and returns true if equal, false otherwise :

* For Example :

```js
// Prints "true"
console.log(15 == 15)

// Prints "true"
console.log(12 == "12")

// Prints "true"
console.log("41" == "41")

// Prints "true"
console.log(16 == "16")
```
As you should notice, the operator returns true even if the type of the operands does not match, as in the second and fourth examples.

This is how it works - First, the operands are converted to the same type, then a comparison is performed.

### 3. Difference between arrow functions and regular functions ?

* Arrow functions – a new feature introduced in ES6 – enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner, yet there are certain interesting differences between them, as discussed below.

* Example of regular functions:-
```js
let square = function(x){
return (x*x);
};
console.log(square(10));
```
```
Output : 100
```

* Example of arrow functions:-
```js
var square = (x) => {
	return (x*x);
};
console.log(square(20));
```
```
Output : 200
```
### Use of this keyword

Unlike regular functions, arrow functions do not have their own `this`.

* For example:-
```js
let user = {
	name: "Jaipur 🙂",
	s1:() => {
		console.log("Hello " + this.name); // no 'this' binding here
	},
	s2(){	
		console.log("Welcome to " + this.name); // 'this' binding works here
	}
};
user.s1();
user.s2();
```

```
Output : Hello undefined
	 Welcome to Jaipur 🙂
```	 

### Availability of arguments objects

Arguments objects are not available in arrow functions, but are available in regular functions.

Example using regular ():-
