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

### 2. Make a "class" based alternative to the object based vector template.

```js
class Vector {
	constructor () {
		this.x = 10
		this.y = 20
	}

	set setX(x) {
		this.x = x
	}

	set setY(y) {
		this.y = y
	}

	create(x, y) {
		let obj = Object.create(this)
		obj.setX = x
		obj.setY = y
		return obj
	}
}

let vec1 = new Vector()
console.log(vec1.create(31, 32))            // Output:- Vector { x: 31, y: 32 }
```


### 3. Do you think JavaScript is the language of the future ?

* JavaScript is the main powerhouse behind the rapidly evolving Internet. It is the present and will be the future. The rampant development of the high-level programming language asserts to the fact of JavaScript is the future.
