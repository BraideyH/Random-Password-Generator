// Assignment code here
var numbers = "1234567890";
var symbols = "!@#$%^&*;";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
  console.log(document.querySelector("#AllowNumbers").checked)
  let pass = '';
  let str = numbers + symbols + lowercaseLetters + uppercaseLetters;
  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);
      pass += str.charAt(char)
  }
  return pass;
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

console.log(writePassword());