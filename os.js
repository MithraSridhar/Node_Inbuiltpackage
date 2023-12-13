const os = require("os")
//memory info
console.log("Free memory", os.freemem()/1024/1024/1024)
console.log("Total memory", os.totalmem()/1024/1024/1024)

//1kb => 1024 bytes 
//1mb => 1024 kb
//1gb => 1024 mb

//get user info
console.log("User Info", os.userInfo())
//get os info
console.log("Platform ", os.platform())
console.log("Type ", os.type())
console.log("Released at ", os.release())

//get CPU info
console.log("Arch ", os.arch())
console.log("Cores ", os.cpus().length)
console.log("CPU Speed ", os.cpus()[0].speed)
console.log("Network Interface ", os.networkInterfaces())