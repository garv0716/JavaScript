// check weather all number is divisible by 10 or not

let nums = [10, 20, 44, 30, 566]

let ans = nums.every((el)=> el % 10 == 0);

console.log(ans);


// create an dunction to find a minimum number of an array

let min = nums.reduce((min, el) => {
    if (min < el){
        return min;
    }else{
        return el
    }
})

console.log(min)