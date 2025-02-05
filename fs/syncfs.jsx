const fs = require("fs")

const file = ("new.txt")

const writeFile = fs.writeFileSync(
    file,
    "This is my first file",
    "utf-8"
);
console.log(writeFile);


// Read file
const readFile = fs.readFileSync(
    file,
    "utf-8"

)
// console.log(readFile.toString())
console.log(readFile)

//Append data

const appendFile = fs.appendFileSync(
    file,
    "\nThis is update data",
    "utf-8"
)
console.log(appendFile)

//Delete file

// const deleteFile = fs.unlinkSync(
//     file,
// )
// console.log(deleteFile)

//Rename file

// fs.renameSync(oldpath, newpath)

const newFilePath = "newFilePath.txt"
const newFile = path.join(__dirname, newFilePath)
const renameFile = fs.renameSync(
    file,
    newFilePath
)
console.log(readFile)