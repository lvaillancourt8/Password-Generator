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
  setCharLength();
  chooseCharSet();
  return getRandomString();
  }

// Allow User to set the password character length and character types
function setCharLength() {
  charLength = prompt("How many characters in your password?");
  charLength = Number(charLength);
    if (charLength === 0 || isNaN(charLength)) {
    alert("Please enter a number!");
    setCharLength();
  } 
  else if (charLength < 8){
    alert("Password must be 8 characters or longer.");
    setCharLength();
  }
  else if (charLength > 128) {
    alert("Password must be 128 characters or less.");
    setCharLength();
  }
  else {
    lowerCaseChar = confirm("Include lowercase letters in the password?\n Choose OK for Yes, Cancel for No.");
    upperCaseChar = confirm("Include uppercase letters in the password?\n Choose OK for Yes, Cancel for No.");
    numberChar = confirm("Include numbers in the password?\n Choose OK for Yes, Cancel for No.");
    specialChar = confirm("Include special characters in the password?\n Choose OK for Yes, Cancel for No.");
  }
}

//Create the Character String to choose password characters from
function chooseCharSet() {
  if (lowerCaseChar === true) {
    charString = charString.concat(lowerCaseString);
    upperEval();
  } else {
      upperEval();
    }
} 
      
function upperEval() {
  if (upperCaseChar === true) {
    charString = charString.concat(upperCaseString);
    numberEval();
  } else {
      numberEval();
    }
}       
        
function numberEval() {
  if (numberChar === true) {
    charString = charString.concat(numberString);
    specialEval();
  } else {
      specialEval();
    }
}  

function specialEval() {
  if (specialChar === true) {
    charString = charString.concat(specialString);
    return(charString);
  } else {
      errorEval();
    }
}
  
function errorEval(){
  if (!lowerCaseChar && !upperCaseChar && !numberChar && !specialChar) {
    alert("You must include at least one category of characters!")
  }
}          

// Generate a random string from the Character Set
function getRandomString() {
  var randomString = "";
  for ( var i = 0; i < charLength; i++ ) {
    randomString += charString.charAt(Math.floor(Math.random() * charString.length));
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
