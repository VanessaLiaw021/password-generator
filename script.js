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

//Function expression to prompt user for lenght of password
var promptLength = function() {

  //Prompt user for length of password
  userLengthInput = prompt("How long do you want your password?");

  //Validate the user input
  if (userLengthInput === "") {
    
    //Alert message to user to enter a number
    alert("Please enter a number");

    //Re-prompt user for length of password
    promptLength();

  } else if (userLengthInput < 8) {

    //Alert message to user to enter a number greater than 8 
    alert("Please enter a number greater than 8");

    //Re-prompt user for length of password
    promptLength();

  } else if (userLengthInput > 128) {

    //Alert message to user to enter a number less than 128
    alert("Please enter a number less than 128");

    //Re-prompt user for length of password
    promptLength();
    
  }

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);