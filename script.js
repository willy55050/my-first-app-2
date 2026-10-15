// ARRAY:
// Stores list of Dragon Ball characters with their clues
const characters = [
  {
    name: "Goku",
    clues: [
      "He is a Saiyan sent to Earth as a baby.",
      "He loves eating and fighting strong opponents."
    ],
    extraClue: "He can transform into Super Saiyan with yellow hair."
  }
];

// VARIABLE:
// Tracks current character index
let currentCharacterIndex = 0;

// FUNCTION:
// Displays initial 2 clues on screen
function displayClues() {
  const cluesList = document.getElementById("clues-list");
  cluesList.innerHTML = "";

  const currentCharacter = characters[currentCharacterIndex];

  // Loop through initial clues
  currentCharacter.clues.forEach(function(clue) {
    const li = document.createElement("li");
    li.textContent = clue;
    cluesList.appendChild(li);
  });
}

// RUN ON LOAD:
displayClues();