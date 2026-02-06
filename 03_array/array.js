// types of array initialiazation

let marks = [99, 29, 44, 85, 98];
let names = ["Garv", "Shiv", "Anamika"];
let info = ["Garv", 99, true]; // Mixed array 

// empty array
let arr = [];

console.log(marks);
console.log(names);
console.log(info);
console.log(arr);   
console.log(info[0]); // accessing array element

// Js is smart enough to understand that info[0] is a string and we are trying to access the first character of that string. 
// So it will print 'G' as output.
console.log(info[0][0]) 

// Notes
// 1. Arrays are mutable in JS, changes are done in orignal array.

  