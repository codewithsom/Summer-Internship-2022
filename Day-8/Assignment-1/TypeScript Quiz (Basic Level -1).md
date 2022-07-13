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

   * The use of Generics has 3 main advantages:

   1. **Type-safety**: It will allow a variable to store only type of value.
   2. Typecasting is not required.
   3. Compile-Time Checking.
