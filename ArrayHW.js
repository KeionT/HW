// let colors = ['Red','Black','Green',];
// let food =['Pizza','Hamburger','Wings','Sushi'];
// console.log(colors)


 
 // Program to count vowels, consonant,
 // digits and
 // special character in a given string.

 // Function to count number of vowels, consonant,
 // digitsand special character in a string.
 function countCharacterType(str) {
   // Declare the variable vowels,
   // consonant, digit
   // and special characters
   var vowels = 0,
     consonant = 0,
     specialChar = 0,
     digit = 0;

   // str.length() function to count number of
   // character in given string.
   for (var i = 0; i < str.length; i++) {
     var ch = str[i];

     if ((ch >= "a" && ch <= "z") ||
     (ch >= "A" && ch <= "Z")) {
       // To handle upper case letters
       ch = ch.toLowerCase();

       if (ch == "a" || ch == "e" || ch == "i" ||
       ch == "o" || ch == "u")
         vowels++;
       else consonant++;
     } else if (ch >= "0" && ch <= "9") digit++;
     else specialChar++;
   }
 
   console.log("Consonant: " + consonant + "<br>");
   console.log("Digit: " + digit + "<br>");
   console.log("Special Character: " + specialChar + "<br>");
 }

 // Driver function.
 var str = "geeks for geeks121";
 countCharacterType(str);
  
