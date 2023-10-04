// Assignment code here
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@",];
var characterCodes = Array.from(Array(26)).map( (_, i)=> i+97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
var options = numbers.concat(symbols, lowercaseLetters, uppercaseLetters);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
