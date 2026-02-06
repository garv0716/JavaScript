// slice means, to cut a part of the string and return it as a new string. 
// It does not change the original string.

// syntax : str.slice( start, end)
// or : str.slice( start)


let str = "ILOVECODING";

str.slice(5) // CODING
str.slice(0,5) // ILOVE

// negative index
str.slice(-6) // CODING {Length - 6 = 11 - 6 = 5}
