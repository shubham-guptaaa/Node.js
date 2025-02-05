// Import EventEmitter class
const EventEmitter = require("events");
// Creater an instance of EventEmmiter

const emitter = new EventEmitter();
//!. Define an event listener (addlistener)
emitter.on("greet", (username, prof) => {
    console.log(`Hello ${username}, You are a ${prof}`)
})

//2. Trigger (emit) the "greet" event
emitter.emit("greet", "Shubham Gupta", "FullStack Dev");

// hello shubham
// greet()