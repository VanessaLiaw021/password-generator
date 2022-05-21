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

  } else {

    //Return the user answer
    return userLengthInput;
  }
}

//Function expression that confirm user choice for lower, upper, number, and special case characters
var promptCharacters = function() {

  //Confirm user for lower case letters
  lowerCaseInput = confirm("Click Ok if you want to include lowercase letter in your password");

  //Confirm user for upper case letters
  upperCaseInput = confirm("Click OK if you want to include uppercase letter in your password");

  //Confirm user for numbers
  numberCaseInput = confirm("Click OK if you want to include numebrs in your password");

  //Confirm user for special case characters
  specialCaseInput = confirm("Click OK if you want to include special characters");

  //Validate user input 
  if (!lowerCaseInput && !upperCaseInput && !numberCaseInput && !specialCaseInput) {

    //Alert user to choose at least one of the characters choice 
    alert("You must choose at least one of the following in your password");

    //Re-prompt user for choices 
    promptCharacters();
  }
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);