// Assignment code here
//var numbers = ["1"+"2"+"3"+"4"+"5"+"6"+"7"+"8"+"9"+"0"];
//var symbols = ["!"+"#"+"$"+"%"+"&"+"*"+"+"+"-"+"/"+":"+";"+"<"+"="+">"+"?"+"@"];
//var characterCodes = Array.from(Array(26)).map( (_, i)=> i+97);
//var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
//var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
//var options = numbers.concat(symbols, lowercaseLetters, uppercaseLetters);
//var passwordLength = (i>8, i<128);

const value = document.querySelector("#value");
const input = document.querySelector("#user-input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let pass = '';
  let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'

  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.Random() * string.length + 1);
    pass += string.charAt(char)
  }
  return pass;
}
console.log(writePassword());
function prompt() {
  let text = "Allow numbers?\nYes or No";
  if (confirm(text) == true) {
    text = "You allowed numbers in your password!";
  } else {
    text = "You did not allow numbers.";
  }
}
var password = generatePassword();
//var passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});