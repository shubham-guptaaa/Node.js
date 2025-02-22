import fs from "fs";
const filePath = "./task.json"



const loadTask = () =>{
    try{
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (error){
        return []
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}
const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({
        task})
    saveTask(tasks)
    console.log("Task added", task);
}
const listTask = () =>{
    tasks.forEach((task,index)=> console.log(`${index+1} - ${task.task}`));
};


const command = process.argv[2]
const argument = process.argv[3]

if(command=== "add"){
    addTask(argument);

}
else if(command==="list"){
    listTask();
}
else if(command==="remover"){
    removerTask(parseInt(argument));
}
else{
    console.log("Command not Found");
}