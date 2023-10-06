// Assignment code here
var numbers = "1234567890";
var symbols = "!@#$%^&*;";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passText = document.querySelector("#password")

var checkboxes = document.querySelectorAll("input");
let enabledSettings = []
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){
  Array.from(checkboxes)
  .filter(i => i.checked)
  .map(i => i.value)
})
})

const value = document.querySelector("#value");
const input = document.querySelector("#user-input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var numbersEL = document.getElementById("AllowNumbers");
  var includeNumbers = numbersEL.checked;

  var specialCharacterEL = document.getElementById("AllowSymbols");
  var includeSpecialCharacters = specialCharacterEL.checked;

  var lowercaseLettersEl = document.getElementById("AllowLowercaseLetters");
  var includelowercaseLetters = lowercaseLettersEl.checked;

  var uppercaseLettersEl = document.getElementById("AllowUpperCaseLetters");
  var includeuppercaseLetters = uppercaseLettersEl.checked;

  var passwordLengthEl = document.getElementById("user-input");
  var passValue = passwordLengthEl.value;
  
  let pass = '';

  let passwordString = "";

  if(includeNumbers) {
    passwordString = passwordString + numbers
  }
  if (includeSpecialCharacters) {
    passwordString += symbols
  }
  if (includelowercaseLetters) {
    passwordString += lowercaseLetters
  }
  if(includeuppercaseLetters) {
    passwordString += uppercaseLetters
  }

  for (let i = 1; i <= passValue; i++) {
      let char = Math.floor(Math.random()
        * passwordString.length + 1);
      pass += passwordString.charAt(char)
  }
  passText.value = pass;
}

// themeSwitcher. addEventListener("click", function allowNumbers() {
//   // If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

