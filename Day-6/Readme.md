# JavaScript Quiz (Basic Level-1)

## Theory -

### 1. What is JavaScript ?

Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion.

### 2. What is the difference between  _let_ and _var_ ?

- _let_ is block-scoped i.e. variables defined with let can be only used in the block of definition. In case of var, var are function-scoped i.e. a var declared inside a function can be used anywhere in the function.

      ```js
      function greetUser(userName) {
        let greeting = "Good Morning! ";
        if (greeting == "Good Morning! ") {
          let completeMsg = greeting + userName;
          console.log(completeMsg);
        }

        console.log(completeMsg); // This will throw an error.
        // The error happens because completeMsg is undefined for the
        // current scope.
      }
      ```

- _let_ doesn't allow us to re-define variables whereas in case of var we can re-define variables.

      ```js
      var b = 95;      // 95
      var b = 29;      // 29

      let a = 65;
      let a = 33; // Throws error.
      ```

 - _let_ doesn't allow hoisting whereas var allows hoisting.

      ```js
      console.log(b);
      var b; // undefined.

      console.log(a);
      let a = 123; // Uncaught ReferenceError: a is not defined.
      ```
