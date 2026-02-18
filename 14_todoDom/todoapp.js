let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item); // add task to the list
    inp.value =""; //after print it will clear the input box
});
  // event bubbling

 ul.addEventListener("click",function(event){
    console.log(event.target); // it tell which key is pressed, means it tells the reason why the event triggered
    console.dir(event.target.nodeName);
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log ("DELETED");
    }
    console.log("Button Clicked");
 })

// let delBtns = document.querySelector(".delete");
// for (delBtn of delBtns){
//     delBtns.addEventListener("click", function(){
//         console.log("Task Deleted");
//         let par = this.parentElement;
//         par.remove();
//     });
// }



/*
=> Notes: Add Task & Delete Task (Event Delegation)

1) Selecting Elements
   - document.querySelector("button") → selects Add Task button
   - document.querySelector("ul")     → selects task list
   - document.querySelector("input")  → selects input field

--------------------------------------------------

2) Adding a New Task
   - btn.addEventListener("click", function(){...})
     → Runs when Add button is clicked.

   Steps Inside:
   - document.createElement("li")
       → Creates new list item.
   - item.innerText = inp.value
       → Sets input text as task.
   - Create delete button:
       → document.createElement("button")
       → innerText = "delete"
       → classList.add("delete")
   - item.appendChild(delBtn)
       → Adds delete button inside <li>.
   - ul.appendChild(item)
       → Adds new task to the list.
   - inp.value = ""
       → Clears input after adding task.

--------------------------------------------------

3) Event Delegation (Using Event Bubbling)

   - Instead of adding event listener to every delete button,
     we add ONE listener to the parent <ul>.

   ul.addEventListener("click", function(event){...})

   Important:
   - event.target
       → Tells which element actually triggered the event.
   - event.target.nodeName
       → Returns tag name (e.g., "BUTTON", "LI")

   Condition:
   - if (event.target.nodeName == "BUTTON")
       → Check if delete button was clicked.
       → Get parent <li> using parentElement.
       → Remove that <li> using remove().

   This works because of EVENT BUBBLING:
   - Click on button → bubbles up to <ul>
   - <ul> handles deletion.

--------------------------------------------------

4) Why Not Use Old Method?

   // querySelector(".delete") only selects first element.
   // Also newly added buttons won't have event listeners.

   Event Delegation solves:
   ✔ Works for dynamically added elements
   ✔ Cleaner & more efficient
   ✔ Only one event listener needed

--------------------------------------------------

=> Summary
   - Click Add → New <li> + Delete button created.
   - Click Delete → That specific task is removed.
   - Uses DOM Manipulation + Event Delegation.
*/
