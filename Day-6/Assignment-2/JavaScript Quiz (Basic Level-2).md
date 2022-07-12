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
   console.log(greetUser.length)     // Output :- 0 (Because the length property returns the number of parameters passed to the function)
   ```
