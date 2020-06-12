// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
    var lowerCaseInput = prompt(
      "Do you want to include lowercase characters? Enter y for yes"
    );
    if (lowerCaseInput === "y") {
      options.push("lowercase");
    }

    var upperCaseInput = prompt(
      "Do you want to include uppercase characters? Enter y for yes"
    );
    if (upperCaseInput === "y") {
      options.push("uppercase");
    }

    var numericCaseInput = prompt(
      "Do you want to include numeric characters? Enter y for yes"
    );
    if (numericCaseInput === "y") {
      options.push("numeric");
    }

    var specialInput = prompt(
      "Do you want to include special characters? Enter y for yes"
    );
    if (specialInput === "y") {
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
