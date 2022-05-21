//Global Variables
var generateBtn = document.querySelector("#generate");
var userLengthInput;
var lowerCaseInput;
var upperCaseInput;
var numberCaseInput;
var specialCaseInput;


// Write password to the #password input
function writePassword() {

  //Call function and stored the value in a variable
  var password = generatePassword();

  //Get the input text of where the password will be displayed at 
  var passwordText = document.querySelector("#password");

  //Get the value of the generated password and display it
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);