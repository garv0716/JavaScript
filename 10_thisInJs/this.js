const student = {
    name: "shradha",
    age: 23,
    eng: 99,
    maths: 60,
    biology: 100,
    get avg(){
        let avg = (this.eng + this.maths + this.biology)/3;
        console.log (avg);
        student.avg;
    }
}


/* Notes
-> "this" keyword refers to an object that is executing the current piece of code.
-> jab bhi kisi function ke andar hume uske parameters ko use krrna hota hai to waha par 
   hum "this" keyword ka use krrte hai. 
*/