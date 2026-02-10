// SCOPE => scope setermines the accrssobility of variable, object, and function from different parts of the code 
// Types : 1) functional scope 2) block scope 3) lexicle scope


// 1) functional scope
let sum = 33 // Global scope

function calSum(a,b){
    let sum = a+b; // functional scope
    console.log(sum);
}
function innerGreet (){
    consloe.log
}
calSum(1,5);


// 2) block scope

// 3) lexical scope

// => a variable lsefineid outside a function can be accessible inside another function defines after the varaible seclaration 
// => the opposite is not true