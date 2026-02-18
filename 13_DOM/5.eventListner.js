/*


=> Event Listeners

- Method:
element.addEventListener("event", callback)

## Why Use It?
- Can attach multiple listeners
- Cleaner and more flexible
*/
// Example:
btn.addEventListener("click", function() {
    console.log("Clicked!");
});


/*
----------------------------------------------------------
Remove Listener:

=> element.removeEventListener("event", functionRef);

 Usually includes:
- Creating buttons
- Adding click events
- Changing styles dynamically
- Updating text content

## Key Practice:
- Select element
- Add event
- Modify DOM
*/

/*
----------------------------------------------------------
=> ElementsEvent Listeners for Elements

When selecting multiple elements:
Use loop.

*/

// Example:

let buttons = document.querySelectorAll("button");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log("Button clicked");
    });
//Important:

// querySelectorAll() returns NodeList (static).


/*

----------------------------------------------------------

=> `this` in Event Listeners


Inside a normal function,
`this` refers to the element that triggered the event.

*/

btn.addEventListener("click", function() {
    this.style.backgroundColor = "green";
});


/*


------------------------------------------------------------

=> Keyboard Events

## Common Events:
- keydown
- keyup
- keypress (deprecated)
*/

//Example:
document.addEventListener("keydown", function(event) {
    console.log(event.key);
});


/*

------------------------------------------------------------

=> Form Events

## Common Events:
- submit
- change
- input
- focus
- blur

## Prevent Default Behavior:
event.preventDefault();

*/
 
//Example:

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});




/*
------------------------------------------------------------

=> Extracting Form Data

*/

// Method 1: Using Input Value

let input = document.querySelector("#username");
console.log(input.value);

// Method 2: Using FormData

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new FormData(form);

    console.log(data.get("username"));
});

/*

------------------------------------------------------------


=> More Events

## Window Events:
- load
- resize
- scroll

*/

// Example:

window.addEventListener("scroll", function() {
    console.log("Scrolling...");
});
