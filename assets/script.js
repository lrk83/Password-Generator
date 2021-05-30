// Assignment code here

//generate one character to append to the password
var generateChar = function(upperCase, lowerCase, num, specialChar){
  letters=""

  //include uppercase letters
  if (upperCase){
    letters=letters+'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  //include lowercase letters
  if (lowerCase){
    letters=letters+'abcdefghijklmnopqrstuvwxyz';
  }

  //include numbers
  if (num){
    letters=letters+'0123456789';
  }

  //include special characters
  if (specialChar){
    letters=letters+" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }

  length=letters.length;
  return letters.charAt(Math.floor(Math.random()*length));
}

//generate password
var generatePassword = function(){
  
  //prompt user for password length
  var length=(window.prompt("How long would you like your password to be?"));
  
  //if user enters a valid input
  if (length>=8 && length<=128){
    var pwd=[];
    var upperCase=window.confirm("Would you like to include uppercase letters?");
    var lowerCase=window.confirm("Would you like to include lowercase letters?");
    var num=window.confirm("Would you like to include numbers?");
    var specialChar=window.confirm("Would you like to include special characters?");
    
    //if user does not select any character type alert them and prompt them again
    if (upperCase===false && lowerCase===false && num===false && specialChar===false){
      window.alert("Password must include at least one type of caracter");
      return null;
    }

    //if user selects at least one character type return a password
    for (var x=0;x<length;x++){
      pwd.push(generateChar(upperCase,lowerCase,num,specialChar));
    }
    return pwd.join('');
  }

  //if user does not input a valid length alert them and prompt them again
  else{
    window.alert("please enter an integer between 8 and 128");
    return null;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //if user entered an invalid length, or failed to select at least one type of character, prompt them again.
  passwordText.value = password;
  if (password===null){
    writePassword();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
