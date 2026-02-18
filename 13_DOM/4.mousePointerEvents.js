/*

---

# Mouse / Pointer Events

## Common Mouse Events:

- click
- dblclick
- mouseover
- mouseout
- mousedown
- mouseup
- mousemove

## Example:
*/

let box = document.querySelector(".box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});


/*
Use Case:

-Hover effects
-Drag & Drop
-Custom UI interactions
*/