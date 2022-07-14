# Express Quiz :

## Theory -
 
### 1. What is NodeJS ?

* Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows −

  * `Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.`

* Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

* Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.
```
Node.js = Runtime Environment + JavaScript Library
```
**For Example** :
```js
var http = require('http');

// Create a server object:
http.createServer(function (req, res) {

	// Write a response to the client
	res.write('Wisflux Academy');

	// End the response
	res.end();

// The server object listens on port 8080
}).listen(8080);
```

### 2. What is V8 Engine ?

V8 is a C++-based open-source JavaScript engine developed by Google. It was originally designed for Google Chrome and Chromium-based browsers (such as Brave) in 2008, but it was later utilized to create Node.js for server-side coding. In reality, JSON-based No-SQL databases like Couchbase and the widely used MongoDB use the V8 engine. V8 also powers Electron, a prominent desktop application framework, and Demo, the latest server-side runtime environment.

V8 is known to be a JavaScript engine because it takes JavaScript code and executes it while browsing in Chrome. It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs. This is the feature that led Node.js designers to choose the V8 engine to power the framework, and the rest is history. The V8 engine was also utilized to construct desktop frameworks and databases as Node.JS grew in popularity.

**Working** :

A JavaScript Engine is an interpreter that interprets JavaScript code and runs it. The first way to develop a JavaScript engine is to implement it as a standard interpreter, as done by Mozilla’s SpiderMonkey. The other option is to employ Just-in-Time (JIT) compilation, which turns native JavaScript code to machine code as V8 does. The distinction between V8 code and other programming languages is that it does not generate intermediate code.

The Ignition interpreter compiles JavaScript code and generates non-optimized machine code when a developer or program runs it on V8 (i.e. in a browser or Node environment). The Turbofan and Crankshaft components of V8 examine and recompile the machine code at runtime for optimal performance.

**Node.Js and V8** :

Node.js is referred to as a runtime environment since it contains everything you need to run a JavaScript program.

This V8 engine is at the heart of Node.js. The diagram compares the Java Virtual Machine (JVM), which is used to power the Java Runtime environment with the V8 engine. The Node.js runtime environment includes several Node APIs to power the Node.js environment in addition to the V8 engine. We can enhance the functionality of our node code by installing extra npm packages.
![image](https://media.geeksforgeeks.org/wp-content/uploads/20211022221757/V8EGFG.png)

One thing to keep in mind is that V8 is essentially a standalone C++ library that is utilized to run JavaScript code by Node or Chromium. V8 exposes an API that other applications can utilize, so you can embed V8 in your C++ program and run a JavaScript program from it. Node and Chrome work in this manner.

Let’s say we want to add the ability to have statements like print(‘hello world’) in addition to console.log(‘Hello World’) in our JavaScript code. In V8, which is already open-sourced, we can add our own C++ implementation of the print function.

### 3. What is Event Loop in NodeJS ?

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

**Features of Event Loop** :

* Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
* The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
* The event loop allows us to use callbacks and promises.
* The event loop executes the tasks starting from the oldest first.

**For Example** :
```js
console.log("Roman 😎");

setTimeout(function(){
	console.log("The Head of the Table 😎");
}, 1000);

console.log("The Tribal Cheif 😎");
```

**Output**:
```
Roman 😎
THe Tribal Cheif 😎
The Head of the Table 😎
```

**Working of the Event loop** : 

When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, then begins processing the event loop. In the previous example, the initial input script consisted of console.log() statements and a setTimeout() function which schedules a timer.

When using Node.js, a special library module called libuv is used to perform async operations. This library is also used, together with the back logic of Node, to manage a special thread pool called the libuv thread pool.This thread pool is composed of four threads used to delegate operations that are too heavy for the event loop. I/O operations, Opening and closing connections, setTimeouts are the example of such operations.

When the thread pool completes a task, a callback function is called which handles the error(if any) or does some other operation. This callback function is sent to the event queue. When the call stack is empty, the event goes through the event queue and sends the callback to the call stack.

The following diagram is a proper representation of the event loop in a Node.js server :

![image](https://media.geeksforgeeks.org/wp-content/uploads/20200224050909/nodejs2.png)

**Phases of the Event loop** : The following diagram shows a simplified overview of the event loop order of operations :

![image](https://media.geeksforgeeks.org/wp-content/uploads/20200224062607/phasesofloop-300x240.png)

- **Timers** : Callbacks scheduled by setTimeout() or setInterval() are executed in this phase.
- **Pending Callbacks** : I/O callbacks deferred to the next loop iteration are executed here.
- **Idle, Prepare** : Used internally only.
- **Poll** : Retrieves new I/O events.
- **Check** : It invokes setIntermediate() callbacks.
- **Close Callbacks** : It handles some close callbacks. Eg: socket.on(‘close’, …)

### 4. What is the use of tsconfig.json file ?

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

JavaScript projects can use a `jsconfig.json` file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

A project is compiled in one of the following ways:
## Using `tsconfig.json` or `jsconfig.json`
* By invoking tsc with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.
* By invoking tsc with no input files and a `--project` (or just `-p`) command line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to a valid `.json` file containing the configurations.

When input files are specified on the command line, `tsconfig.json` files are ignored.

Example `tsconfig.json` files :
* Using the `files` property
```ts
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
```
* Using the `include` and `exclude` properties
```ts
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 5. What are the methods provided by `fs` module to manipulate files ?

**File System module** :

File System is a core module by a node to interact with files and folders. It provides various events and methods to access and manipulate files and folders in our machine.

**Some of the operations it provides to manipulate files are** :

* Create and delete files or folders.
* Accessing and renaming files or folders.
* Read, write and append files.
* Changing permission and owner of file or folder.

To use the File System module in your program, you need to fs node core module:

**Syntax** :
```
const fs = require('fs')
```
**Now before using the fs module you need to understand that there are two approaches to use fs module methods** :-

1. Using synchronous methods
2. Using asynchronous methods

Now the question comes which should we choose synchronous methods or asynchronous methods. Let’s discuss what is the difference between synchronous methods and asynchronous methods of fs module.
**Synchronous and Asynchronous methods** :
**Synchronous methods** use functions that are **blocking in nature**.  Blocking functions blocks the execution of the next instruction or piece of code till the current operation is not completed. **Synchronous methods** wait **for the current operation to be finished** and then it continues with the execution of the next instruction. But this creates problems when the current operation takes a lot of time.

**Example** : Suppose our server after getting a request needs to create a file and then write some text in it and then respond back to the client. If for creating and writing on a file we use a synchronous approach then for each coming request we would block the execution till we are done with operations and responding to that client. If a lot of requests come together we are basically blocking other users till we are finished with the first user. The last user would have to wait a lot to get this response and that would be bad.

**Asynchronous methods** are non-blocking in nature as they never wait for the current operation to complete. While calling an asynchronous method we have to pass a callback function as an argument.  When an asynchronous function is called it is registered or pushed by `Event loop` to a queue and the next line of code is executed. In the background, our asynchronous function is executed and when it completes, the callback function we passed as an argument is pushed in the callback queue and is executed when its turn comes.

```
Basically, the catch here is to understand that asynchronous methods do the operation in the background and do not block the execution of code.
```

![image](https://media.geeksforgeeks.org/wp-content/uploads/20211007162244/syncasyncapproach.png)

**File System provides us with synchronous as well as the asynchronous version of methods.**

**NOTE**  –   We should always use the asynchronous version of methods in our code if we have a choice.  Synchronous methods should only be used in top-level code because top-level code is executed only once or only in situations where we are certain that operation won’t take long (lightweight operation).

**Operations on file**:

* Reading a file –  The simplest way to read a file is using `fs.readFile()` method. This method takes care of opening and closing the file and it loads the file contents in the memory for us to use in our program.

**Syntax** :

```
fs.readFile(path,options,callback);
```
**Parameters** :

* path – the name or path of the file we want to read from
* options – this is an optional argument and generally we pass encoding which is `‘utf-8‘`
* callback – executed when we have read the file. It takes two parameters
	* error –  if any error occurs
	* data – contents of the file

**Example** –  Create a file name app.js and also create a text file input.txt

### Project Structure :
![image](https://media.geeksforgeeks.org/wp-content/uploads/20211027162425/new.jpg)
### app.js file -
```js
const fs = require("fs");
// Asynchronous version of readFile method
fs.readFile("input.txt", "utf-8", (error, data) => {

// If the file doesnt exist then there
// is error then if condition will run
if (error) {
	console.log("File not found");
} else {

	// Data contains the content that we
	// have read from file in case of
	// error , data will output undefined
	console.log(data);
}
});
```
Run app.js using the command below :
```
node app.js
```
**Output** : 
```
Hurrah, now you know how to read a file.
```

### 6. What is API ?

API is an abbreviation for Application Programming Interface which is a collection of communication protocols and subroutines used by various programs to communicate between them. A programmer can make use of various API tools to make its program easier and simpler. Also, an API facilitates the programmers with an efficient way to develop their software programs. Thus in simpler terms, an API helps two programs or applications to communicate with each other by providing them with necessary tools and functions. It takes the request from the user and sends it to the service provider and then again sends the result generated from the service provider to the desired user. A developer extensively uses API’s in his software to implement various features by using an API call without writing the complex codes for the same. We can create an API for an operating system, database systems, hardware system, for a JavaScript file or similar object oriented files. Also, an API is similar to a GUI(Graphical User Interface) with one major difference. Unlike GUI’s, an API helps the software developers to access the web tools while a GUI helps to make a program easier to understand by the users. 

**Real life example of an API** : Suppose, we are searching for a hotel room on an online website. In this case, you have a vast number of options to choose from and this may include the hotel location, the check-in and check-out dates, price, accommodation details and many more factors. So in order to book the room online, you need to interact with the hotel booking’s website which in further will let you know if there is a room available on that particular date or not and at what price. Now in the above example, the API is the interface that actually communicates in between. It takes the request of the user to the hotel booking’s website and in turn returns back the most relevant data from the website to the intended user. Thus, we can see from this example how an API works and it has numerous applications in real life from switching on mobile phones to maintaining a large amount of databases from any corner of the world. There are various kinds of API’s available according to their uses and applications like the Browser API which is created for the web browsers to abstract and to return the data from surroundings or the Third party API’s, for which we have to get the codes from other sites on the web(e.g. Facebook, Twitter). 

**Types of API's** : There are three basic forms of API-

### 1. WEB APIs : A Web API also called as Web Services is an extensively used API over the web and can be easily accessed using the HTTP protocols. A Web API is an open source interface and can be used by a large number of clients through their phones, tablets. or PC’s.

![image](https://media.geeksforgeeks.org/wp-content/uploads/pic-8.png)

### 2. LOCAL APIs: In this types of API, the programmers get the local middleware services. TAPI (Telephony Application Programming Interface), .NET are common examples of Local API’s.

### 3. PROGRAM APIs: It makes a remote program appears to be local by making use of RPC’s (Remote Procedural Calls). SOAP is a well-known example of this type of API.

**Few other types of APIs** :

### SOAP (SIMPLE OBJECT ACCESS PROTOCOL): It defines messages in XML format used by web applications to communicate with each other.
### REST (Representational State Transfer): It makes use of HTTP to GET, POST, PUT, or DELETE data. It is basically used to take advantage of the existing data.
### JSON-RPC: It use JSON for data transfer and is a light-weight remote procedural call defining few data structure types.
### XML-RPC: It is based on XML and uses HTTP for data transfer. This API is widely used to exchange information between two or more networks.

### Advantages of APIs – 

- **Efficiency** : API produces efficient, quicker and more reliable results than the outputs produced by human beings in an organization.
- **Flexible delivery of services** : API provides fast and flexible delivery of services according to developers requirements.
- **Integration** : The best feature of API is that it allows movement of data between various sites and thus enhances integrated user experience.
- **Automation** : As API makes use of robotic computers rather than humans, it produces better and automated results.
- **New functionality** : While using API the developers find new tools and functionality for API exchanges.

### Disadvantages of APIs – 

- **Cost** : Developing and implementing API is costly at times and requires high maintenance and support from developers.
- **Security issues** : Using API adds another layer of surface which is then prone to attacks, and hence the security risk problem is common in API’s.

### 7. What is JSON format ?

`JSON stands for JavaScript Object Notation. It is a format for structuring data. This format is used by different web applications to communicate with each other. It is the replacement of the XML data exchange format. It is easy to struct the data compare to XML. It supports data structures like arrays and objects and the JSON documents that are rapidly executed on the server.`

It is a Language-Independent format that is derived from JavaScript. It is Human-readable and writable. It is a lightweight text-based data interchange format which means, it is simpler to read and write when compared to XML. Though it is derived from a subset of JavaScript, yet it is Language independent. Thus, the code for generating and parsing JSON data can be written in any other programming language.

**Syntax Rules** : Data is in name/value pairs and they are separated by commas. It uses curly brackets to hold the objects and square brackets to hold the arrays.

**For Example** :
```js
{
    "Data Structures": [
        {
            "Name" : "Trees",
            "Course" : "Intoduction of Trees",
            "Content" : [ "Binary Tree", "BST",
                        "Generic Tree"]
        },
        {
            "Name" : "Graphs",
            "Topics" : [ "BFS", "DFS", "Topological Sort" ]
        }
    ]
}
```

**Advantages of JSON** :

- It stores all the data in an array so that data transfer makes easier. That’s why it is the best for sharing data of any size even audio, video, etc.
- Its syntax is very small, easy, and light-weighted that’s the reason it executes and responds in a faster way.
- It has a wide range for browser support compatibility with the operating systems. It doesn’t require much effort to make it all browser compatible.
- On the server-side parsing is the most important part that developers want. If the parsing will be fast on the server side then the user can get a fast response, so in this case, JSON server-side parsing is the strong point compared to others.

**Disadvantages of JSON** :

- The main disadvantage is that there is no error handling. If there was a slight mistake in the script then you will not get the structured data.
- It becomes quite dangerous when you used it with some unauthorized browsers. Like JSON service return a JSON file wrapped in a function call that has to be executed by the browsers if the browsers are unauthorized then your data can be hacked.
- It has limited supported tools that we can use during the development.

### 8. Why we use JSON format for API ?

This is where the JavaScript Object Notation (JSON) enters the picture. JSON is nothing more than the data structure part of the JavaScript programming language. That means by its very definition, it is a perfect fit to represent JavaScript objects.

But because most programming languages have similar models of how to represent structured data, JSON also is a good fit for the internal model of many other programming languages.

This meant that JSON was a much more natural fit for developers to exchange structured data. It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.

Instead, JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.

### 9. What is a Framework ?

**Framework**, on the other hand has defined open or unimplemented functions or objects which the user writes to create a custom application. (C++/Java users will understand this as it is much like implementing an abstract function). Because a framework is itself an application, it has a wider scope and includes almost everything necessary to make a user application as per his own needs. Wikipedia makes it more clear: 

“In computer programming, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software” 

![image](https://media.geeksforgeeks.org/wp-content/uploads/framework-vs-library.png)

Thus, the key difference is in the **“Inversion of Control”**, commonly called as IoC. When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us. It defines a skeleton where the application defines its own features to fill out the skeleton. Example, in Javascript, we usually use this: 

```
$(document.ready(){     // this call will be done by the jquery 
// framework when document will be ready.
    
    function() {
        /* your code */    // our implementation inside the framework's function
    }
});
```
