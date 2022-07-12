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
### Use of this keyword :

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

### Availability of arguments objects :

Arguments objects are not available in arrow functions, but are available in regular functions.

* Example using regular () :
```js
let user = {	
	show(){
		console.log(arguments);
	}
};
user.show(1, 2, 3);
```

* Example using arrow () :
```js
let user = {	
		show_ar : () => {
		console.log(...arguments);
	}
};
user.show_ar(1, 2, 3);
```
### Using new keyword :

Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.

* Example using regular function :
```js
let x = function(){
	console.log(arguments);
};
new x =(1,2,3);
```

* Example using arrow function :
```js
let x = ()=> {
	console.log(arguments);
};
new x(1,2,3);
```

### 4. What is Hoisting in JavaScript ?

## JavaScript Hoisting :
* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
* Hoisting allows functions to be safely used in code before they are declared.
* Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

* For Example :
```js
// using test before declaring
console.log(test);   // undefined
var test;
```
The above program works and the output will be `undefined`. The above program behaves as,
```js
// using test before declaring
var test;
console.log(test); // undefined
```
Since the variable `test` is only declared and has no value, `undefined` value is assigned to it.

### Variable Hoisting :
* Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.
* However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.
* Until that point in the execution is reached the variable has its default initialization (`undefined` for a variable declared using `var`, otherwise uninitialized).

#### `var` Hoisting :
Here we declare then initialize the value of a `var` after using it. The default initialization of the `var` is `undefined`.
```js
console.log(num); 	// Returns 'undefined' from hoisted var declaration (not 60)
var num; 		// Declaration
num = 60; 		// Initialization
console.log(num);	 // Returns 60 after the line with initialization is executed.
```
The same thing happens if we declare and initialize the variable in the same line.
```js
console.log(num); 	// Returns 'undefined' from hoisted var declaration (not 6o)
var num = 60;		 // Initialization and declaration.
console.log(num); 	// Returns 60 after the line with initialization is executed.
```
If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in `ReferenceError` exception.
```js
console.log(num); 	// Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 60; 		// Initialization
```
Note however that initialization also causes declaration (if not already declared). The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.
```js
a = 'Straw'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); 	// 'Strawberry'
```
#### `let` and `const` Hoisting :
Variables declared with `let` and `const` are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.
```js
console.log(num); 	// Throws ReferenceError exception as the variable value is uninitialized
let num = 6; 		// Initialization
```
Note that it is the order in which code is executed that matters, not the order in which it is written in the source file. The code will succeed provided the line that initializes the variable is executed before any line that reads it.

#### `class` Hoisting :
Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a `ReferenceError`.

### Function Hoisting :
One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
```js
dogName("Bob");

function dogName(name) {
  console.log("My dog's name is " + name);
}
/*
The result of the code above is: "My dog's name is Bob"
*/
```

### Function and class expression hoisting :
* Function expressions and class expressions are not hoisted.
* The expressions evaluate to a function or class (respectively), which are typically assigned to a variable. In this case the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.
