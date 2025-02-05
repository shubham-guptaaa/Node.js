const fs = require("fs");
const path = require("path");
const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname
fs.promises
.readdir(file)
.then((data) => console.log(data))
.catch((err) => console.log(err));

const filePath1 = __dirname;

fs.promises.readdir(filePath1)
.then((data) => console.log(data))
.catch((err)=> console.log(err));

// CURD Operation

//1. Write Operation
// Syntax: -fs.promises.writeFile(path, data, operation).then().catch();
// path : path to the file;
// data: conten to write
// operation: Encoding ('utf8'), flags, etc. (Optional)
//*______________________________________________________________________________________

fs.promises.writeFile(filePath, "This is Fs Module Promises", "utf-8")
.then((data)=> console.log(data))
.catch((err) => console.log(err));

//2. Read Operation
// Syntax: -fs.promises.readFile(path, operation).then((data) => ....).catch((err) => ...);
// path : path to the file;
// operation: Encoding ('utf8'), flags, etc. (Optional)
//*______________________________________________________________________________________

fs.promises.readFile(filePath, "utf-8")
.then((data) => console.log("The data is : " , data))
.catch((err) => console.log("The error is : ", err));

//3. Append Operation
// Syntax:- fs.promises.appendFile(path, data, operation).then((data) => ....).catch((err) => ...);
// path : path to the file;
// operation: Encoding ('utf8'), flags, etc. (Optional)
//*______________________________________________________________________________________

fs.promises.appendFile(filePath, "\nThis is Fs Module Promises", "utf-8")
.then((data)=> console.log(data))
.catch((err) => console.log(err));

//3. Delete Operation
// Syntax:- fs.promises.unlink(path).then((data) => ....).catch((err) => ...);
// path : path to the file;
//*______________________________________________________________________________________

fs.promises.unlink(filePath)
.then((data)=> console.log(data))
.catch((err) => console.log(err));