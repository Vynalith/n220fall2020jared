let userGuess = document.getElementById("txtGuess");
let targetNum = Math.floor(Math.random() * 20);
let dvOutput = document.querySelector("#dvOutput");

function guessNumber(){
    let guess = userGuess.value;
    
    if(guess == targetNum){
        dvOutput.innerHTML = "You got it! Now guess the new number!";
        targetNum = Math.floor(Math.random() * 20);
    }
    else if(guess > targetNum){
        dvOutput.innerHTML = "Too high!";
    }
    else{
        dvOutput.innerHTML = "Too low!";
    }

   userGuess.value = '';
}