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

### 5. JavaScript is a garbage collected programming language. Explain how ?
## Garbage Collection in JavaScript:
### Memory Life Cycle :  The memory life cycle is pretty much the same for any programming language, it has 3 major steps.
* Allocate the memory.
* Use the allocated memory either to read or write or both.
* Release the allocated memory when it is no longer required.

##### An overview behind garbage collection: 
* The majority of memory management issues occur when we try to release the allocated memory. The main concern that arises is the determination of unused memory resources. In case of the low-level languages where the developer has to manually decide when the memory is no longer needed, high-level languages such as JavaScript use an automated form of memory management known as Garbage Collection(GC).

##### Garbage Collection: 
* The below section will explain the concepts that are necessary to understand the main garbage collection algorithms and their limitations. The main concept of the algorithms designed for garbage collection is the concept of reference. An object can have a reference to another object if the previous object has access to the latter. For example, a JavaScript object can have an implicit reference(when the reference is to its prototypes) and explicit( when the reference is to its properties values).
* Below we will explain the algorithms used for Garbage Collection.

###### 1. Reference-counting garbage collection: 
* This algorithm is considered to be the most basic kind of garbage collection algorithm. What these algorithms do is that rather than determining whether any resource is important or not it scans the memory to determine if an object has any other objects referring to it. An object with zero references is considered to be garbage or “collectible”.
* For Example :
```js
// Consider the following example
var object_1 = {
	object_2: {
		object_3: 7
	}
};
var object_4 = object_1;
object_1 = 1;
var object_5 = object_4.object_2;
object_4 = "Wisflux Academy";

object_5 = null;
```
Obstructions: Circular references
Limitations arise when it comes to circular references. A circular reference occurs when two objects are created with properties that refer each other, thus creating a cycle. 
The reference-counting algorithm fails to reclaim the these memory resources as each object has at least one reference pointing to them which prevents both the objects from being marked for garbage collection. Circular references are one of the major cause for memory leaks.
Below example shows an instance of said case.
```js
function Demo() {
	var one = {};
	var two = {};

	// one reference to two
	one.object = two;

	// two reference to one
	two.object = one;

	return 'circular';
}

Demo();
```
###### 2. Mark-and-sweep-algorithm: 
* This algorithm modifies the problem statement from the “object being no longer needed” to the object being “unreachable”. This algorithm demands a prerequisite of the knowledge of roots which are a set of objects. In JavaScript, a root is a global object. On a regular basis, the garbage collector starts from these roots and finds all the objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will find all the objects that are reachable and mark all the non-reachable objects.

Cycles are no longer problem: After the function call returns, the two objects are no longer referenced by any resource that is reachable from the root or global object. Hence, these will be marked as unreachable by the garbage collector and have their allocated memory reclaimed.

Some Limitations: The only limitation that can be found is that it is not possible to explicitly or programmatically trigger garbage collector in JavaScript.
Hence if there are cases when it would be convenient to manually program when to release memory, there are no provisions in JavaScript to trigger such an event.

### 6. Explain Shallow copy vs Deep copy in Javascript ?
JavaScript is a high level, dynamically typed client side scripting language. JavaScript adds functionality to static HTML pages. Like most other programming languages JavaScript allows supports the concept of deep copy and shallow copy. 

#### Shallow Copy : 
When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. In simple words, a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variable point to the same object in memory. As a result if the state of the object changes through any of the reference variables it is reflected for both. Let us take an example to understand it better.
```js
var employee = {
	eid: "E234",
	ename: "Darsh",
	eaddress: "India",
	salary: 50000
}


console.log("Employee=> ", employee);
var newEmployee = employee; 	// Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.
```
#### Deep Copy :
Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected. Also, if one of the objects is deleted the other still remains in the memory. Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. Let us take an example to understand it better.
```js
var employee = {
	eid: "E234",
	ename: "Darsh",
	eaddress: "India",
	salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

### 7. What is Object.freeze ?
#### Object and Object Constructors in JavaScript :
In the living world of object-oriented programming we already know the importance of classes and objects but unlike other programming languages, JavaScript does not have the traditional classes as seen in other languages. But JavaScript has objects and constructors which work mostly in the same way to perform the same kind of operations. 
* Constructors are general JavaScript functions which are used with the “new” keyword. Constructors are of two types in JavaScript i.e. built-in constructors(array and object) and custom constructors(define properties and methods for specific objects).
* Constructors can be useful when we need a way to create an object “type” that can be used multiple times without having to redefine the object every time and this could be achieved using the Object Constructor function. It’s a convention to capitalize the name of constructors to distinguish them from regular functions.
For instance, consider the following code :
```

function Automobile(color) {
  this.color=color;
}

var vehicle1 = new Automobile ("pink");
```
The function “Automobile()” is an object constructor, and its properties and methods i.e “color” is declared inside it by prefixing it with the keyword “this”. Objects defined using an object constructor are then made instants using the keyword “new”. 
When new Automobile() is called, JavaScript does two things: 
* It creates a fresh new object(instance) Automobile() and assigns it to a variable.
* It sets the constructor property i.e “color” of the object to Automobile.

### Object.freeze() Method :
Among the Object constructor methods, there is a method Object.freeze() which is used to freeze an object. Freezing an object does not allow new properties to be added to an object and prevents from removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability and the prototype of the object. It returns the passed object and does not create a frozen copy.
Applications: 
* Object.freeze() is used for freezing objects and arrays.
* Object.freeze() is used to make an object immutable.

Syntax: 
```
Object.freeze(obj)
```
#### Parameters Used: 
 
1. obj : It is the object which has to be freezed.
* Return Value: 
Object.freeze() returns the object that was passed to the function.
Examples of the above function are provided below.
Examples: 
```
Input : const obj1 = { property1: 'initial_data'};
        const obj2 = Object.freeze(obj1);
        obj2.property1 = 'new_data';
        console.log(obj2.property1);

Output : "initial_data"
```
```
Input : var obj = { prop: function() {}, name: 'adam' };
        console.log(obj);
        obj.name = 'billy';
        delete obj.prop;
        console.log(obj);
        var o = Object.freeze(obj);
        obj.name = 'chris';
        console.log(obj);

Output : Object { prop: function () {}, name: "adam" }
         Object { name: "billy" }
         Object { name: "billy" }
```

Codes for the above function are provided below.
#### Code 1:
```js
<script>
<!-- creating an object constructor and assigning values to it -->
const obj1 = { property1: 'initial_data'};

<!--creating a second object which will freeze the properties of the first object-->
const obj2 = Object.freeze(obj1);

<!-- Updating the properties of the frozen object -->
obj2.property1 = 'new_data';

<!-- Displaying the properties of the frozen object -->
console.log(obj2.property1);
</script>
```
```
Output : "initial_data"
```
