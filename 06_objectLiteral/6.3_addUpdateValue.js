const student = {
    name: "Garv",
    age: 23,
    marks: 94.4,
    city: "Jhansi" 
};

// task is to update the city to "Lucknow"

student.city = "Lucknow";
console.log(student);

// task is to add a new key "country" with value "India"

student.country = "India";
console.log(student);   


/* Notes 

 for deleting
 syntax => {delete objectName.keyName}

 => to get random maths value
    - maths.random() => gives random value between 0 and 1
    - to get random value between 0 and n => math.random() * n
    - to get random value between m and n => math.random() * (n-m) + m
*/