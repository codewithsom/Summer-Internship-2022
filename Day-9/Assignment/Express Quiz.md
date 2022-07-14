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
