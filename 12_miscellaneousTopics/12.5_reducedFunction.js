let nums = [1,2,3,4,5,6,7]
let finalValue = nums.reduce((res, el) => {
    return res + el;
});
console.log(finalValue);

/*
=> NOTES;
reduces the array to a single value
  arr.reduce(reduce function with 2 variable for(accumulator, element));

*/