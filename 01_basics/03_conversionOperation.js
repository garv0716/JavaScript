let score = "1000"
let score2 = "500abc"
let score3 = null

console.log(typeof score)
console.log (typeof(score)) // both are same


let valueInNumber = Number(score)  // All data types starts with capital letter, because of something class based
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)

console.log(valueInNumber)

console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // NaN -> Not a Number

console.log(typeof valueInNumber3)
console.log(valueInNumber3) // 0



//NOTES ON TYPE CONVERSION

//"33" -> 33
//"33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1
// false -> 0

// boolean

// " " -> 0, false
//1-> true
// "GARV" -> true