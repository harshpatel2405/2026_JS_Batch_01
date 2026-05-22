// * finding a character in the string

let str = "Java"
let target = 'a'

// console.log(str.includes(target))

let found = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] == target) {
        console.log(target + " found at " + i + " index")
        found = true
        break;
    }
}

if (!found) // found  ==false
{
    console.log("Element not found");
}

// *remove spaces from the program 
let data = "This is a data which I will be using to remove spaces";
let removedSpacesData = "";
for (let i = 0; i < data.length; i++) {
    if (data[i] == " ") {
        continue;
    }
    removedSpacesData = removedSpacesData + data[i];
}

console.log(removedSpacesData)

// * find the longest word
let information = "Finding longest word from this";
let longestWord = "";
let currentWord = ""
for (let i = 0; i < data.length; i++) {
    if (information[i] != " ") {
        currentWord = currentWord + information[i];
    } else {
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }

        currentWord = "";
    }


}

console.log(longestWord)