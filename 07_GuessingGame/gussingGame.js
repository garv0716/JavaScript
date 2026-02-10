const max= readlineSync.question("Enter the number ");

const random = Math.floor(Math.random() * max) + 1;

let guess = readlineSync.question ("Guess the number");

while (true){
    if (guess == "quit"){
        console.log("User quit");
        break;
    }
    if ( guess == random){
        console.log("you are right!");
        break;
    }
    else if (guess > random){
        guess = readlineSync.question("you enter too big value")
    }
    else{
        guess = readlineSync.question ("you enter too small value ")
    }
}
