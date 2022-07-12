# JavaScript Quiz (Basic Level 3)


### Theory -

### 1. Explain as much as you know about objects in javascript? (A long answer expected)

* The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
* Objects as I understand them are almost similar to `dicts` in Python. Both of them contain key - value pairs.
* Any specific element in an object can be accessed through its key.
* Even though the keys are restricted to the data type of string, the values are not. Hence, we can have an `int`, `string`, `array` or even another object as the value of a key.

* For Example :-
   ```js
   const myObj = {
      'first': 7,
      'second': 'seven',
      'third': {
         "name": "Roman",
         "age": 30
      },
      'fourth': [71, 72, 73, 74]
   }
   ```
   * We can access any element with this syntax `objectName.keyName` or `objectName['keyName']`
   * We can iterate through the keys in any object in the following two ways :-
   ```js
   for (let myObjKey in myObj) {
       console.log(myObjKey)                 // Output :- first \n second \n third \n fourth
   }
   
   console.log(Object.keys(myObj))              // Output :- ['first', 'second', 'third', 'fourth']
   ```
    * We can iterate through the values in any object in the following two ways :-
   ```js
   for (let myObjKey in myObj) {
       console.log(myObj[myObjKey])             // Output :- 7 \n 	seven \n 	{ name: 'Roman', age: 30 } \n  [ 71, 72, 73, 74 ]
   
   }
   
   console.log(Object.values(myObj))            // Output :- [ 7, 'seven', { name: 'Roman', age: 30 }, [ 71, 72, 73, 74 ] ]
   ```
   * We can extract only the values we need from an object by destructuring it. Example :- 
   ```js
   let { first, second } = myObj
   
   console.log(first, second)                      // Output:- 7 seven
   ```
   * We can convert the object to an array and then traverse it with a `forEach()` method like this :- 
   ```js
   console.log(Object.entries(myObj))
   
   /*
    Output :-
      [
          [ 'first', 7 ],
          [ 'second', 'seven' ],
          [ 'third', { name: 'Roman', age: 30 } ],
          [ 'fourth', [ 71, 72, 73, 74 ] ]
      ]
   */
   ```



