// Expands the iterable into multiple values
/* function func (...arr){
    // do something
}
*/ 

// console.log (..."yourname"); // 3 dot

let arr = [2,34,5,5,67,7,8,89]

Math.min(...arr)

console.log(...arr)

let arr = [1,2,4,54,4,5,6]
let newArr = [...arr];

let char = [..."hello"];

let odd = [1,3,5,7]
let even = [2,4,6,8]

let nums = [...even, ...odd]
console.log (nums)
