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

// fs.promises.readdir(filePath1)
// .then((data) => console.log(data))
// .catch((err)=> console.log(err));

// const readFolder = async () => {
//     try{
//        const res =  await fs.promises.readdir(filePath);
//        console.log(res);
//     }
//     catch(error){
//         console.log(error)
//     }
// };
// readFolder();


// 1. Write File
const writeFileExample = async () => {
    try {
        const res = await fs.promises.writeFile(filePath, "This is initil Data", "utf-8")
        console.log("File Created Successfully", res)
    } catch (error) {
        console.log(error)
    }
};
writeFileExample();

//2. Read File
// 3. Append file
//4. Delete File