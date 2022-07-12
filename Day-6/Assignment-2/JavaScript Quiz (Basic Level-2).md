# JavaScript Quiz (Basic Level-2)

### Theory -

### 1. Why do we use functions in JavaScript ?

* JavaScript Functions : 
  * JavaScript provides functions similar to most of the scripting and programming languages. In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword.

### 2. What is Function Invocation?

* The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function".

   * For Example :-
   ```js
   function demo() {
       console.log("JavaScript is Amazing 😀")
   }
   
   demo()         // Function is invoked. Output : "JavaScript is Amazing 😀"
   ```

### 3. Does a function behave like an object in Javascript? Prove it by an example.

* Yes, in JS, a function does indeed behave like an object. 
* This is because essentially, a function IS an object but with special properties and methods.
* More specifically, a function is a `Function` object.
* This enables a function in JS to have special properties like the ability to invoke.
* This also means that a function has certain methods attached to it. Namely `bind()`, `apply()`, `call()`.
* It also has some properties attached to it since essentially it IS an object. They are :- `name` and `length`.

   ```js
   function greetUser() {
       console.log("Good Morning 😊 ")
   
       console.log("Welcome! to India")
   }
   
   greetUser()        // Output :- Good Morning 😊
   
   console.log(greetUser)     // Output :- [Function: greetUser]
   
   greetUser.number = 7
   
   console.log(greetUser)     // Output :- [Function: greetUser] { number: 7 }
   
   console.log(greetUser.name)      // Output :- greetUser
   console.log(greetUser.length)     // Output :- 0 
   ```
   
 ### 4. What are Events in Javascript ?
 
   * Events in JS are just specific triggers for something happening in the DOM.
   * For example, if a particular element is clicked then that is called an Event in JS.
   * We can also listen to these events happening in the DOM and call a function to execute a block of code if the event happens.
   * EventListeners are used for that purpose.


### 5. What is a string ?

* A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.


### 6. What is an array ? Is it static or dynamic in Javascript ?

   * An array is an ordered collection of elements.
   * JavaScript arrays are dynamic in nature. 
   * This means that there is no pre-defined length of the array.
   * The size of the array is automatically increased / decreased based on the insertion / deletion of elements from it.


### 7. Difference between Map and Set ?
   *  The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
   * The Set object lets you store unique values of any type, whether primitive values or object references.
   * The main difference between a Set and a Map in JS is that we can access any element from the Map with a unique key - just like in an array we can access any element with it's index. Whereas, in a Set, we have to iterate over all the items in the set to extract a particular element.

### 8. Difference between Array and Map ?

   * The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
   * The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
   * The difference between an Array and a Map is that an Array is just a single collection of elements that can be of any datatype and any unique element can be accessed with an index which is numerical and starts from 0. Whereas, a Map is a collection of key - value pairs and any unique value can only be accessed with it's key which can be of any datatype.


### 9. What are array methods? List a few names ?

   * Array methods are different functions that we can call on an array to perform different tasks like sorting the array or iterating through the items of the array.
   * Some methods of an array are `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`, etc.


### 10. In how many ways can we traverse through an array in Javascript ?

* Here are some of the ways to traverse an array in JS :- 
   ```js
   const arr = [7, 8, 9, 10, 11, 12]
   
   for(let i = 0; i < arr.length; i ++) {
       console.log(arr[i])
   }
   
   for (let num of arr) {
       console.log(num)
   }
   
   for (let num in arr) {
       console.log(num)
   }
   
   arr.forEach((item) => console.log(item))
   
   arr.map(num => console.log(num))
   ```
