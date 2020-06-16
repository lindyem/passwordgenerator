// Assignment Code = document.getElementById
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //grabbing textbox ID password (HTML) 1 - VAR 2 - HTML - input uses .value
  passwordText.value = password;
}

function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!$^&*-=+_?";

  var options = [];

  var passwordLength = prompt(
    "Choose the length of your password. Enter a number between 8-128"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCaseInput = confirm(
      "Do you want to include lowercase characters?"
    );
    if (lowerCaseInput === true) {
      options.push("lowercase");
    }

    var upperCaseInput = confirm(
      "Do you want to include uppercase characters?"
    );
    if (upperCaseInput === true) {
      options.push("uppercase");
    }

    var numericCaseInput = confirm(
      "Do you want to include numeric characters?"
    );
    if (numericCaseInput === true) {
      options.push("numeric");
    }

    var specialInput = confirm("Do you want to include special characters?");
    if (specialInput === true) {
      options.push("special");
    }

    if (options.length > 0) {
      var generatedPassword = "";

      for (var i = 0; i < passwordLength; i++) {
        var characterToInsert = "";
        var characterTypeToInsert =
          options[Math.floor(Math.random() * options.length)];

        if (characterTypeToInsert === "lowercase") {
          characterToInsert =
            lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
        } else if (characterTypeToInsert === "uppercase") {
          characterToInsert =
            uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
        } else if (characterTypeToInsert === "numeric") {
          characterToInsert =
            numericChars[Math.floor(Math.random() * numericChars.length)];
        } else if (characterTypeToInsert === "special") {
          characterToInsert =
            specialChars[Math.floor(Math.random() * specialChars.length)];
        }

        //runs adding characters until end of input length add a character to genreatedPassword var
        generatedPassword = generatedPassword + characterToInsert;
        console.log(generatedPassword);
      }

      return generatedPassword;
    } else {
      alert("Error! At least one character option should be selected");
      return "Error";
    }
  } else {
    alert("Password length must be between 8-128... Please try again");
    return "Error";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
