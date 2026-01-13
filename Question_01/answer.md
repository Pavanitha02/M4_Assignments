###Node.js Architecture:
#1.JavaScript Engine(V8)->chef who cooks JS
2.Node.js Core APIs->Menu of services (file,timers)
Native Bindings->translators between Js and C++
Event Loops->Manager who handles orders efficiently

/////////////
JS Engine (V8):
*V8 is the engine that executes JS Code.
*It is written in C++ and used by Chrome +Node.js

*converts JS ->MC
*Handles Memory(garbage collection)
**without V8->Node.js cannot run JS

///////////////
2.Node.js Core APIs
**Built-in moduls that give Node.js superPower beyond browsers

fs-> File system

http->Create servers

path->Work with paths

os->System info

events->Event handling

example:
const fs = require("fs");

fs.readFile("test.txt","utf-8",(err, data)=> {
  if (err) console.log(err);
  else console.log(data);
});

/////////////////
3.Native Bindings
**Node.js is written in C++, but you write code in JavaScript.
Native bindings are the bridge between them.

*Access file system directly
*Use network sockets
*Create threads

###
Example:
###
fs.readFile("test.txt", callback);

JS calls fs.readFile
Native binding sends request to C++ code
C++ talks to OS to read file
Result comes back to JS
Callback is executed

//////////////////////
4.Event Looop
The Event Loop allows Node.js to be:

**Non-blocking & asynchronous
**Even though Node runs on one thread, it can handle thousands of users.

###
How it works
###
Run main code
Send async tasks to background
Keep checking:
Is any task finished?
When done->execute its callback


# 2. libuv

* **What is libuv?**  
libuv is a C library used by Node.js that provides the core support for asynchronous operations. It handles the event loop, non-blocking I/O, thread pool management, timers, and networking. libuv is the reason Node.js can perform many tasks without blocking the main thread.

* **Why Node.js needs libuv**  
JavaScript by itself cannot perform low-level operations like file system access, network communication, or thread management. Node.js uses libuv to communicate with the operating system and execute these tasks asynchronously, making Node.js fast and scalable.

* **Responsibilities of libuv**  
libuv is responsible for:  
- Managing the event loop  
- Handling asynchronous I/O operations  
- Maintaining the thread pool  
- Managing timers like setTimeout and setInterval  
- Handling networking and sockets  
- Providing cross-platform support  

---

# 3. Thread Pool

* **What is a thread pool?**  
A thread pool is a collection of background threads that execute time-consuming or blocking operations so that the main thread remains free to handle other tasks.

* **Why Node.js uses a thread pool**  
Node.js runs JavaScript on a single thread. If heavy operations run on this thread, the entire application can freeze. To avoid this, Node.js uses a thread pool (managed by libuv) to handle slow or CPU-intensive operations in the background.

* **Which operations are handled by the thread pool**  
The following operations are handled by the libuv thread pool:  
- File system operations (`fs`)  
- Cryptography tasks (`crypto`)  
- Compression (`zlib`)  
- DNS lookup (`dns.lookup`)  

These tasks are executed in background threads and their results are sent back to the event loop.

---

# 4. Worker Threads

* **What are worker threads?**  
Worker threads are separate JavaScript execution threads in Node.js that allow running JS code in parallel. Each worker has its own event loop and memory space.

* **Why are worker threads needed?**  
Node.js is efficient for I/O tasks but not suitable for heavy CPU computations like image processing or large calculations. Worker threads allow such CPU-intensive tasks to run without blocking the main event loop.

* **Difference between thread pool and worker threads**

| Feature | Thread Pool | Worker Threads |
|--------|-------------|----------------|
| Managed by | libuv | Node.js |
| Executes | C++ based tasks | JavaScript code |
| Purpose | Handle I/O & system tasks | Handle CPU-heavy JS tasks |
| User control | Not directly controllable | Fully controllable |
| Example | fs.readFile, crypto | data processing, ML tasks |

---

# 5. Event Loop Queues

* **Macro Task Queue**  
The macro task queue stores tasks that are scheduled to run later. These include:  
- `setTimeout()`  
- `setInterval()`  
- `setImmediate()`  
- I/O callbacks  

These tasks are executed in different phases of the event loop.

---

* **Micro Task Queue**  
The micro task queue contains tasks that must run immediately after the current execution finishes, before any macro tasks. These include:  
- `Promise.then()`  
- `queueMicrotask()`  
- `process.nextTick()` (Node.js specific)

---

* **Execution priority between them**  
In Node.js, tasks are executed in the following order:  

1. Current synchronous code  
2. `process.nextTick()` queue  
3. Microtask queue (Promises)  
4. Macro task queue (timers, I/O)

This ensures that critical tasks are handled first.

---

* **Examples of tasks in each queue**

**Micro Task Example**
```js
Promise.resolve().then(() => {
  console.log("Microtask executed");
});

