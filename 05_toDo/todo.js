let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        break;
    } else if (req == "list") {
        console.log("**********");
        for (task of todo) {
            console.log(task);
        }
        console.log("**********");
    } else if (req == "add") {
        let task = prompt("Enter a task to add");
        todo.push(task);
        console.log(`${task} added to the list`);
    }
    else if (req == "delete") {
        let index = prompt("Enter the index of the task to delete");
        todo.splice(index, 1);
        console.log("Task deleted");
    }
    else {
        console.log("Unknown request");
    }
    req = prompt("Please enter your request");
}



