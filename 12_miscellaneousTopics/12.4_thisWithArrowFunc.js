let student = {
    name: "Garv",
    class: "sec A",
    rollNumber: 76,
    prop:  this, // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // student
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(()=>{
            console.log(this); // student
        }, 2000);
    },
     getInfo2: function () {
        setTimeout (function() {
            console.log(this); // windoe
        }, 2000);
    },
};

/* 
=> Notes:
this keyword behave differentialy with both of the function 

-> Arrow function
-Lexical scope
  -parent -> call(inherit)
 

-> Function 
-  depends upon calling object
  -scope ->this -> calling object


  -> summary
  * normal function ke liye this hota hai jo object usse call laga rahii hai'
  * arrow function ke liye this hota hai, humare parent ko call lagane wali object
  
*/