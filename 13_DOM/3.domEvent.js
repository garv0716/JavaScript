/* DOM Events

## What is an Event?
An event is an action performed by the user or browser.
Example:
- click
- scroll
- keypress
- submit

## Event Handling Ways:

1. Inline HTML
   <button onclick="alert('Hi')">Click</button>

2. Using JS
   element.onclick = function() {}

3. addEventListener() (Best Practice)

## Example:
js
let btn = document.querySelector("button");

btn.onclick = function() {
    console.log("Button clicked");
};

*/
let btn = document.querySelector("button");

btn.onclick = function() {
    console.log("Button clicked");
};