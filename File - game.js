// Array of possible secret words
const secretWords = ["apple", "banana", "grape", "mango", "peach", "kiwi", "orange"];
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)]; 
let attemptsLeft = 5; 

const guessInput = document.getElementById("guessInput");
const submitButton = document.getElementById("submitButton");
const feedbackMessage = document.getElementById("feedbackMessage");
const restartButton = document.getElementById("restartButton");


console.log("Secret Word:", secretWord);


function handleGuess() {
  const userGuess = guessInput.value.trim().toLowerCase(); 

  if (userGuess === "") {
    feedbackMessage.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    feedbackMessage.style.color = "orange";
    return; 
  }

  if (userGuess === secretWord) {
    feedbackMessage.textContent = "🎉 Congratulations! You guessed the secret word!";
    feedbackMessage.style.color = "green";
    document.body.classList.add("win");
    endGame();
    return;
  }

  attemptsLeft--;
  
  if (attemptsLeft > 0) {
    feedbackMessage.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
    feedbackMessage.style.color = "orange";
  } else {
    feedbackMessage.textContent = `😞 Game over! The secret word was '${secretWord}'.`;
    feedbackMessage.style.color = "red";
    document.body.classList.add("lose"); 
    endGame();
  }
}


function endGame() {
  submitButton.disabled = true; 
  restartButton.style.display = "inline-block"; 
}


function restartGame() {
  secretWord = secretWords[Math.floor(Math.random() * secretWords.length)]; 
  attemptsLeft = 5;
  feedbackMessage.textContent = ""; 
  submitButton.disabled = false; 
  restartButton.style.display = "none"; 
  guessInput.value = ""; 
  document.body.classList.remove("win", "lose");

  console.log("New Secret Word:", secretWord);
}


submitButton.addEventListener("click", handleGuess);
restartButton.addEventListener("click", restartGame);


guessInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});
