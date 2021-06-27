// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write a function to generate the password
function generatePassword() {
  setCharLength()
}

// Write a function to set the password character length
function setCharLength() {
  var charLength = prompt("How many characters in your password?");
  charLength = Number(charLength);
  console.log(typeof charLength, charLength);
    if (charLength === 0 || isNaN(charLength)) {
    alert("Please enter a number.");
  } 
  else if (charLength < 8){
    alert("Password must be 8 characters or longer.")
  }
  else if (charLength > 126) {
    alert("Password must be 126 characters or less.")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
