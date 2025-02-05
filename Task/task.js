//? Challenge: "Event Maestro: Handle It All!"

//? Objective
//* Create a program using Node.js EventEmmiter that:

//? Listens for multiple types of user events (e.g, login, logout, purchase and profile update).
//? Tracks How many times each event is emmited.
//? Logs a sumary of all event occurance when a special summmary event is triggered.

//! Requirements
//? Create at least four event (e.g, user-login, user-log-out, user-purchase, profile-update)
//? Track and store the count of each event type.
//? Define a summary event that logs a detailsreport of how many times each event was triggered.

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCount = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0
};
//User Login
emitter.on("user-login", (arg)=>{
    eventCount["user-login"]++;
    console.log(`${arg.name} logged in`)
})
emitter.emit("user-login", {name: "Shubham Gupta"})
// User logout
emitter.on("user-logout", (arg) => {
    eventCount["user-logout"]++;
    console.log(`${arg.name} logged out`)
})
emitter.emit("user-logout", {name: "Shubham Gupta"})

// User purchase
emitter.on("user-purchase", (arg) => {
    eventCount["user-purchase"]++;
    console.log(`${arg.name} purchase ${arg.pur}`)
})
emitter.emit("user-purchase", {name: "Shubham Gupta", pur: "Laptop"})

//profile-update
emitter.on("profile-update", (arg) => {
    eventCount["profile-update"]++;
    console.log(`${arg.name} update ${arg.upd}`)
})
emitter.emit("profile-update", {name: "Shubham Gupta", upd: "Email"})

//Summary
emitter.on("Summary", () => {
    console.log(eventCount)
})
emitter.emit("Summary")