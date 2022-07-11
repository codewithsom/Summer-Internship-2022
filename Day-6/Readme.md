# JavaScript Quiz (Basic Level-1)

## Theory -

### 1. What is JavaScript ?

Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code. JavaScript is an interpreted language. Thus, it doesn't need to be compiled. JavaScript renders web pages in an interactive and dynamic fashion.

### 2. What is the difference between  _let_ and _var_ ?

 - _let_ is block-scoped i.e. variables defined with let can be only used in the block of definition. In case of var, var are function-scoped i.e. a var declared inside a function can be used anywhere in the function.

      ```js
      function greetUser(userName) {
        let greeting = "Good Morning 🙂 ";
        if (greeting == "Good Morning 🙃 ") {
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
      var s = 68;      // 68
      var s = 92;      // 92

      let r = 125;
      let r = 433;     // Throws error.
      ```

  - _let_ doesn't allow hoisting whereas var allows hoisting.

      ```js
      console.log(z);
      var z;           // undefined.

      console.log(q);
      let q = 39;     // Uncaught ReferenceError: q is not defined.
      ```
  

### 3.  Why do prefer _const_ over _var_ ?

If you wish for a variable to be re-definable, one can prefer using var.
The usage of const makes sure that the variable binding is immutable but the object itself can change whenever you like.

### 4. What is the use of JavaScript in Web Browsers ?

Using JavaScript, we can transform a website from having very basic functionality to be whatever we wish to be. In terms of human analogy, JavaScript is the brain of the website.

### 5. What are Objects ?

Objects are one of the available data types in JS. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor.

To create a sample object:

  ```js
    const person = {
      name: "Mike Wheeler ✊",
      age: 23,
      jobStatus: "Working",
    };
   ``` 
      
### 6. What is an Array and how is it different from an Object in JavaScript ?

An array is a special variable, that can hold more than one value. In Programming languages such as C++, Java,etc. Arrays are generally collection of similar types of data. Arrays in JS are also objects.

- Arrays in JS are resizable and can contain a mix of different data types.
- JS arrays are not associative arrays.
- Arrays in JS are zero-indexed.

To create a sample array in JavaScript.

   ```js
   const exampleArr = new Array("This", "is", "my", "Laptop");
   ```

 Objects must be used when you wish to access data in a key-value pairing and use arrays when you wish to create a simple list of things.

### 7. What is a function ?

A function is a block of code that is designed to perform a specific task.
The usage of a function also helps in re-use of code rather than writing it each time we wish to use it.

To declare a function:

 ```js
 function nthFibonacci(inpNum) {
 if (inpNum <= 1) return inpNum;
 return nthFibonacci(inpNum - 2) + nthFibonacci(inpNum - 1);
 }
 ```

### 8. How can we implement call by value and call by reference in Javascript?

To implement call by value, see the code snippet below:

```js
let originalVal = 50;
function updateOriginalVal(originalVal) {
originalVal += 120;
console.log(originalVal);
}

updateOriginalVal(originalVal);      // 170
console.log(originalVal);            // 120
```

 As you can see, the value of the `originalVal` variable did not change, rather it was a copy of the original variable, whose value gets changed.
 
 <br>

To implement call by reference, see the code snippet below:

```js
let myObj = {
val: 25,
};

function updateVal(objRef) {
objRef.val += 10;
}

console.log(myObj.val); // 25
updateVal(myObj);
console.log(myObj.val); // 35
```

### 9. What are primitive data types in JavaScript ?

A primitive data type is a data type that is not an object and has no methods or properties. There are 7 primitive data types in JS: string, number, bigint, boolean, undefined, symbol and null.

### 10. What is DOM ?

DOM stands for Document Object Model, with the help of DOM JS can access and change all the elements of a HTML document. It is constructed as a tree of Objects.

With the object model, JS gets all the power it needs to create dynamic web pages.

### 11. Why do we need DOM ?

DOM allows JS to be powerful enought to access and change everything that can be changed in a HTML document i.e. we can change the Styling, create new elements, etc. Being able to use DOM gives the programmer infinite possibilities and thus allows a programmer to be able to create truly dynamic web pages.     

<hr>

## Programs -

### 1. Average of array nums in JavaScript.

   ```js
   const findArrayAvg = (arr) => {
     let arrSum = 0;
     arr.forEach((num) => {
       arrSum += num;
     });

     let arrLen = arr.length;
     return arrSum / arrLen;
   };

   const sampleArr = [10, 12, 14, 14, 22, 25, 31, 29, 12];
   console.log(findArrayAvg(sampleArr));
   ```

### 2. Swap variables using reference.

   ```js
   function swapUsingReference(objRef) {
     let temp = objRef.var2;
     objRef.var2 = objRef.var1;
     objRef.var1 = temp;
   }

   const sampObj = {
     var1: 5,
     var2: 2,
   };
   console.log(sampObj);
   swapUsingReference(sampObj);
   console.log(sampObj);

   // or you can try something like this:
   let a = 5;
   let b = 2;
   console.log(a + " ," + b);
   [a, b] = [b, a];
   console.log(a + " ," + b);
   ```
