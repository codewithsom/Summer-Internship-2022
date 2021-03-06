# TypeScripyt Quiz (Basic Level-1) 

## Theory -

### 1. What are the basic datatypes in TypeScript ?

   - **Boolean**: These work the same way as they do in JavaScript. Variables of data type boolean are declared like:

     ```ts
     const myBool: boolean = true;
     ```

   - **String**: Same as strings in JavaScript.

     ```ts
     let myStr: string = "Almonds";
     ```

   - **Number**: They are also the same as numbers in JavaScript.
     ```ts
     const minAgeToVote: number = 7777;
     ```
   - **Array**: Arrays in TS are just like arrays in JavaScript.
     ```ts
     const myArr: number[] = [123, 456, 789];
     ```
     The above example is suitable for cases when the entire array will only store numbers.
     You can also declare an array in the below method:
     ```ts
     const myArr: Array<number> = [24, 74, 54];
     ```
     To create an array that can store all the datatypes:
     ```ts
     const myArr: Array<any> = [97, "true", false];
     ```
   - **Tuples**: Tuples are a data type unique to TypeScript. You can consider them as arrays with fixed elements. This is a great alternative when you know how many variables do you want in your array.

     ```ts
     let mine: [number, string];
     mine[0] = 876;           

     mine[0] = "Hello 🙂";       

     mine = [191, "Jack", "Wheeler"];        

     mine = [186, "May"];          
     ```

### 2. What is Generic data type ?

   Generics in TypeScript is a tool which enables us to create reusable components. It creates a component that can work with a variety of data types rather than a single data type.
   
   For Example :

   ```ts
   function showVal<T>(arg: R) {
     return arg;
   }

   console.log(showVal<number>(999));        // prints 999
   ```

   * The use of Generics has 3 main advantages :

   1. **Type-safety** : It will allow a variable to store only type of value.
   2. Typecasting is not required.
   3. Compile-Time Checking.

### 3. What is type inferring in TypeScript ?

   In many sitauations, type inference is used to provide type information when no explicit type annotation is provided. It is useful when there are no explicit type annotation available.

   For example :

   ```ts
   function sum(a: number, b: number) {
     return a + b;
   }

   let add: number = sum(100, 200);    // Compiled.
   let subtract: string = sum(100, 200); // Compilation error.
   ```
   
### 4. What are the possible ways to define typing for functions ?

   There are multiple ways to define types for functions:

   1. **Method Signatures**:

      The method signature syntax is the most straight forward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

      ```ts
      interface Date {
        toString(): string;
        setTime(time: number): number;
      }
      ```

   2. **Function Type Literals**:

      This type of function typing is typically used in the signature of a higher-order function i.e. a function which accepts functions as parameters or returns a function.

      ```ts
      interface Array<R> {
        sort(compareFn?: (a: R, b: R) => number): this;
      }
      ```

   3. **Object Type Literals With Call or Construct Signatures**:

      This is same as the fact that functions in JS are just special objects that can be called again and again.

      ```ts
      interface RegExpConstructor {
        (pattern: RegExp): RegExp;
        (pattern: string, flags?: string): RegExp;
      }
      ```
### 5. How to define generic types for classes ?

   To do this we can use the generic type parameter in '`< >`' brackets.

   For example:

   ```ts
   class StudentInfo<S, R> {
     private Id: S;
     private Name: R;

     setValue(id: S, mame: R): void {
       this.Id = id;
       this.Name = name;
     }

     display(): void {
       console.log(`Id = ${this.Id}, Name = ${this.Name}`);
     }
   }

   let student1 = new StudentInfo<number, string>();
   student1.setValue(7, "Roman 😎");
   student1.display();
   ```
 
 <hr>

## Program -

### 1. Define the types in TypeScript for the given following JavaScript code.

 Todo :

   - Define type/interface for a single Todo object.
   - Define type for each function.
   - Do not use `any` (TS Data Type) type of typescript.

   
```ts
type TODO = {
name: string,
description: string,
done: boolean
}

let todos: Array<TODO> = [];

function add(name: string, description: string): number {
   return todos.push({name: name, description: description, done: false});
}

function remove(index: number): Array<TODO> {
   return todos.splice(index, 1);
}

function list(): void {
   todos.forEach(function (todo: TODO, index: number) {
      console.log(index + " -" + todo.name);
   });
}

function update(index: number, name: string, description: string): TODO {
   todos[index].name = name;
   todos[index].description = description;
   return todos[index];
}
```

   
