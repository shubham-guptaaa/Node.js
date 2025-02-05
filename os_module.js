const os = require("os")
// Get os platform and user Info
console.log("Platform:", os.platform())
console.log("User Info:", os.userInfo())
// 2. Get the OS Architecture
console.log("Architecture:", os.arch())

// 3.Get free memory space
console.log("Free Memory:", os.freemem(), "bytes")
//4. Total Memory
console.log("Total Memory:", os.totalmem(), "bytes")

//5. System Uptime

console.log("System Uptime:", os.uptime())