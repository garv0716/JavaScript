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



/***************** Operations ********************/

console.log ( 5 + 5 ) //10
console.log (5 * 5) //25
console.log ( 5 ** 5) // 5^5 = 3125
console.log ( 5 - 5) //0
console.log ( 5 / 5) //1
console.log ( 5 % 5) //0

// + operator is also used for string concatenation

console.log ("1" + 2) // "12"
console.log (1 + "2") // "12"
console.log (1 + 2 + "3") // "33"
console.log ("3" + 1 + 2) // "312"

// if sting first then all treated as string
// if number first then all treated as number until string comes

console.log( +true ) // 1, bad practice, better use Number(true)
console.log(true +) // error