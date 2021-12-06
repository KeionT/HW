// let colors = ['Red','Black','Green',];
// let food =['Pizza','Hamburger','Wings','Sushi'];
// console.log(colors)

let word = "balls"

function isPalindrome(str){
    //orginal compare it to a 2nd one, reversed
    if(str == str.split('').reverse().join('')){
       return true   
    }else{
        return false
        }
    }

console.log(isPalindrome(word));

//step 1) string is entered
//step 2) examine the sting keep everything lowercase
//step 3) make a copy or duplicate racecar
//step 4) reverse the duplicate > compare with orginal if its true ===
//
//