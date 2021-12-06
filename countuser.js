let prompt = require('prompt-sync')()
let msg = prompt('Enter your USERNAME')
function countOccurrences(str,word)
    {
    let a = str.split(" ");
    let count = 0;
    for (let i = 0; i <a.length; i++)
    {
        if (word ==(a[i]))
        count++;
    }
    return count;
    }
    let str = "Hello count the words"
    let word = "counting";
    console.log(countOccurrences(str,word));