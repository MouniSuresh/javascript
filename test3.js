
let taskList = [];


const addTask = (task, callback) => {
    let localMessage = `Task "${task}" is being added.`; 
    console.log(localMessage);
    taskList.push(task);
    callback(); 
};

const printTasks = function () {
    console.log("=== Current Tasks ===");
    taskList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    }
const addMultipleTasks = (...tasks) => {
    console.log(`Adding ${tasks.length} tasks...`);
    tasks.forEach(task => taskList.push(task));
    printTasks(); // Show tasks after adding
};


let globalMessage = "This is a global message.";

function demonstrateScope() {
    let localMessage = "This is a local message.";
    console.log("Inside function - localMessage:", localMessage);
    console.log("Inside function - globalMessage:", globalMessage);
}

console.log("Outside function - globalMessage:", globalMessage)

addTask("Buy groceries", printTasks);
addTask("Clean the room", printTasks);


addMultipleTasks("Walk the dog", "Do laundry", "Write report");


demonstrateScope();
