//Guess fav movie

const favoriteMovie = "Animal";
let guess = prompt("Guess My Favorite Movie");
while (guess != favoriteMovie && guess != "quit"){
    console.log("Wrong Answer, Try Again");
    guess = prompt("Guess My Favorite Movie");
}
if (guess == favoriteMovie){
    console.log("Congratulations! You Guessed Correctly!");
}