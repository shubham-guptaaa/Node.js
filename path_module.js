const path = require("path")

console.log(__dirname)
console.log(__filename)

// school folder / student / data.txt

const filepath = path.join("folder", "student", "data.txt")
console.log(filepath)

const parseData = path.parse(filepath)
const resolvePath = path.resolve(filepath)
const extname = path.extname(filepath)
const dirName = path.dirname(filepath)
const baseName = path.basename(filepath)

console.log({parseData, resolvePath, extname, dirName, baseName})