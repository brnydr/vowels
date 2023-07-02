function convertPhrase(text) {
  let vowels = ["a", "e", "i", "o", "u"];
  let puzzlePhrase = text;
  let lowerCasePuzzlePhrase = puzzlePhrase.toLowerCase();
  for (let i = 0; i <= lowerCasePuzzlePhrase.length; i++) {
    let character = lowerCasePuzzlePhrase[i];
    if (vowels.includes(character)) {
      puzzlePhrase = puzzlePhrase.replace(puzzlePhrase[i], "-");
    } else {
      puzzlePhrase;
    }
  } 
   return puzzlePhrase;
}

function printPhrase(text) {
  let output = document.getElementById("vowels-removed")
  output.innerText = text;
}

function clearTextArea() {
  let textArea = document.getElementById("text-passage");
  textArea.value = "";
}

function handleFormSubmission(e) {
    e.preventDefault();
    let phrase = document.getElementById("text-passage").value;
    let convertedPhrase =  convertPhrase(phrase);
    printPhrase(convertedPhrase);
    clearTextArea();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
