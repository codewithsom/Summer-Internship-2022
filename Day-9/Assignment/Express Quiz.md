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

### 2. What is V8 Engine ?

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron.

### 3. What is Event Loop in NodeJS ?

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

### Event Loop Explained :

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the `REPL`, which is not covered in this document) which may make async API calls, schedule timers, or call `process.nextTick()`, then begins processing the event loop.

The following diagram shows a simplified overview of the event loop's order of operations.

![image](https://miro.medium.com/max/1400/0*g6TFRGQDfqd2TWUn)

**Features of Event Loop**:

* Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
* The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
* The event loop allows us to use callbacks and promises.
* The event loop executes the tasks starting from the oldest first.

**For Example**:
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
The Head of the Table 😎
THe Tribal Cheif 😎
```

