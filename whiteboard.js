/* 
Given an array of strings words, return the words that can be typed using letters of the 
alphabet on only one row of American keyboard like the image below.
In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:
Input: words = ["omk"]
Output: []
Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"] 
*/
const isRowValid = function(row, word) {
    for (let l of word) {
        if (row.includes(l)) {
        } else {
            return false
        } 
    }
    return true
}

var isWordValid = function (word) {
    let keyboardRows = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ]

    for (let i = 0; i < keyboardRows.length; i++) {
        if (isRowValid(keyboardRows[i], word)) {
            return true
        }
    }
    return false
}

function findWords(words) {
    // let finale = words.filter((currWord) => isWordValid(currWord))
    /*
    let finale = words.filter((currWord) => {
        return isWordValid(currWord)
    })
    */
    let finale = words.filter(function(currWord) {
        return isWordValid(currWord)
    })
    return finale


/*     let resultWords = []
    for (let word of words) {
        if (isWordValid(word)) {
            resultWords.push(word)
        }
    }
    return resultWords */
}


console.log(findWords(['hello', 'alaska', 'why']))