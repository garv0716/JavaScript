// arrow function
const sum = (a, b) => {
    console.log( a + b ); 
}

// Implicit return {implicit -> automatically, it include () not {}}
const mul = (a, b) => ( // it return value without using return keyword
    a * b
);

/*
=> NOTES
- arror functions : it is a one more type of logic to define function in JS, 
                    it is basically smaller in size as conpare to general function 
                    {hum arrow function ko high order function mai as a parameter use krr sakte hai, use as a callback}
   syntax: const func =  [ (arg1, arg2..) => {function definaation} ]

*/

