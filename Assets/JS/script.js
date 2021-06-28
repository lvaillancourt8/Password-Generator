// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = false;
var upperCaseChar = false;
var numberChar = false;
var specialChar = false;
var lowerCaseString = "abcdefghijklmnopqrstuvwzyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "1234567890";
var specialString = "~!@#$%^&*()_+";
var charString = "";
var charLength;

// Write a function to generate the password
function generatePassword() {
  console.log(charString);
  setCharLength();
  chooseCharSet();
  getRandomString(charLength);
  return;
  }

// Allow User to set the password character length and character types
function setCharLength() {
  var charLength = prompt("How many characters in your password?");
  charLength = Number(charLength);
    if (charLength === 0 || isNaN(charLength)) {
    alert("Please enter a number.");
  } 
  else if (charLength < 8){
    alert("Password must be 8 characters or longer.");
  }
  else if (charLength > 128) {
    alert("Password must be 128 characters or less.");
  }
  else {
    lowerCaseChar = confirm("Include lowercase letters in the password?");
    upperCaseChar = confirm("Include uppercase letters in the password?");
    numberChar = confirm("Include numbers in the password?");
    specialChar = confirm("Include special characters in the password?");
  }
  console.log(charLength);
}

//Create the Character String to choose password characters from
function chooseCharSet() {
  if (lowerCaseChar === true) {
    charString = charString.concat(lowerCaseString);
    console.log(charString);
    upperEval();
    } else {
      upperEval();
    }
  }

function upperEval() {
    if (upperCaseChar === true) {
      charString = charString.concat(upperCaseString);
      console.log(charString);
      numberEval();
    } else {
      numberEval();
    }
  }

function numberEval() {
    if (numberChar === true) {
      charString = charString.concat(numberString);
      console.log(charString);
      specialEval();
    } else {
     specialEval();
    }
  }

function specialEval() {
      if (specialChar === true) {
        charString = charString.concat(specialString);
      } else {
        errorEval();
      }
      console.log(charString); 
  }

  function errorEval(){
    if (!lowerCaseChar || !upperCaseChar || !numberChar || !specialChar) {
      alert("You must include at least one category of characters!")
    } else {
      console.log(charString);
    }
  }

// Generate a random string from the Character Set
function getRandomString() {
  var randomString = "";
  // var randomStringLength = charLength.length
  for ( var i = 0; i < length; i++ ) {
      randomString +- charString.charAt(Math.floor(Math.random() * charLength));
  }
  return(randomString);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
