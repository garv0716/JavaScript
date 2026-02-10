/* 
---> Syntax for creating function in js

=> function defination 
  function funcName(){
     // do something
  }

=> function calling(using the function)
    funcName();
*/


function isAdult(age){
    if (age >= 18){
        console.log ("Adult")
    }
    else{
        console.log("Not Adult")
    }
}

isAdult(17);