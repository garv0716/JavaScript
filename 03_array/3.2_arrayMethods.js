// push = add to end
// pop = delete from end & returns it 
// unshift = add to start 
// shift = delete from start & returns it
// indexOf = return index of something
// includes = search for a value
// concat = merge two arrays
// reverse = reverse the array
// slice = extract a portion of an array [endong index is exclusive], not alter the original array
// splice = remove/replace/ add elements in place. {splice(start, deleteCount, item1, item2, ...)} . alter the original array




let follower = ["Garv", "Shiv", "Anamika"];
let blocked = follower.shift();
console.log("follower: " + follower);
console.log("Blocked user: " + blocked);  

let primary = [1, 2, 3];
let secondary = [4, 5, 6];
let combined = primary.concat(secondary); // original arrays are not changed
console.log("After concatenation: " + combined);

let arr = [1, 2, 3, 4, 5];
arr.reverse();// orignal array is changed
console.log("After reversing: " + arr);

 

