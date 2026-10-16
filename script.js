// ARRAY:
// Stores list of Dragon Ball characters with their clues
const characters = [
  {
    name: "Goku",
    clues: [
      "He is a Saiyan sent to Earth as a baby.",
      "He loves eating and fighting strong opponents."
    ],
    extraClue: "Extra Clue: He can transform into Super Saiyan with yellow hair."
  },
  {
    name: "Vegeta",
    clues: [
      "He is the proud Prince of all Saiyans.",
      "He was originally an enemy but became an ally of Earth."
    ],
    extraClue: "Extra Clue: His iconic attack is called the Final Flash."
  },
  {
    name: "Piccolo",
    clues: [
      "He is a Namekian warrior who has green skin.",
      "He trained Gohan when Gohan was a child."
    ],
    extraClue: "Extra Clue: His signature move is Special Beam Cannon (Makkankosappo)."
  }
];

// VARIABLES:
let currentCharacterIndex = 0;

// FUNCTION:
// Displays initial 2 clues on screen
function displayClues() {
  const cluesList = document.getElementById("clues-list");
  cluesList.innerHTML = "";

  const currentCharacter = characters[currentCharacterIndex];

  currentCharacter.clues.forEach(function(clue) {
    const li = document.createElement("li");
    li.textContent = clue;
    cluesList.appendChild(li);
  });

  // Clear previous feedback and input
  document.getElementById("feedback-message").textContent = "";
  document.getElementById("extra-clue-text").textContent = "";
  document.getElementById("user-guess").value = "";
}

// FUNCTION:
// Checks if the user guess is correct
function checkAnswer() {
  const userGuessInput = document.getElementById("user-guess").value.trim();
  const feedbackMessage = document.getElementById("feedback-message");
  const extraClueText = document.getElementById("extra-clue-text");
  
  const currentCharacter = characters[currentCharacterIndex];

  // CONDITIONALS:
  if (userGuessInput.toLowerCase() === currentCharacter.name.toLowerCase()) {
    feedbackMessage.textContent = "Correct! Loading next character...";
    feedbackMessage.className = "correct";
    
    setTimeout(function() {
      currentCharacterIndex++;
      if (currentCharacterIndex < characters.length) {
        displayClues();
      } else {
        feedbackMessage.textContent = "You completed all characters! Exam Finished!";
      }
    }, 1500);

  } else {
    feedbackMessage.textContent = "Incorrect! Here is an extra clue:";
    feedbackMessage.className = "incorrect";
    extraClueText.textContent = currentCharacter.extraClue;
  }
}

// EVENT LISTENER:
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// RUN ON LOAD:
displayClues();