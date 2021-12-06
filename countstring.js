// var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// if(format.test('string')){
//     return true;
// }else{
//     return false;
// }

function countCharacterType (str){
    
    consonant = 0
    specialChar= 0
    digit = 0
    for(var i = 0; i< str.length; i++){
        var ch = str [i];
        if ((ch>= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z")) {
            ch=ch.toLowerCase();
            //else consonant++;
        }else if(ch>='0' && ch <= '9') digit++;
        else specialChar++
    }
    console.log("Consonant: " + consonant + "<br>");
    console.log("Digit: " + digit + "<br>");
    console.log("Special Character: " + specialChar + "<br>");

}

var str ='Hello for the count';
countCharacterType(str)