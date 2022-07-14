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
