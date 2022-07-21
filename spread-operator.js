/**************************************
 *  SPREAD OPERATORS
 * 
 *  MDN Reference: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
 *************************************/

let myArrOfParams = [1,2,3,4,5,6,7,8,9,10]

function sum(a,b,c,d) {
    return a + b + c +d
}

/* console.log(sum(myArrOfParams[0], myArrOfParams[1], myArrOfParams[2], myArrOfParams[3]))
console.log(sum(...myArrOfParams)) */

/* console.log(myArrOfParams[0], myArrOfParams[1], myArrOfParams[2], myArrOfParams[3])
console.log(...myArrOfParams)
console.log(myArrOfParams) */

/* Combining arrays (or merging arrays) */
let newArr = [-1, 0, ...myArrOfParams, 11, 12]
// Equivalent to: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(newArr)

let myArr1 = ['a', 'b', 'c', 'd']
let myArr2 = ['e', 'f', 'g', 'h']

let myCombinedArr = [...myArr1, ...myArr2]
console.log(myCombinedArr)

/* Making copies of arrays */
let originalArr = [1,2,3]
let copyArr = [...originalArr]

copyArr[0] = 10

console.log(originalArr)

/* Object Spread Operators */

// MERGING objects
let userAuthInfo = {
    id: "12390",
    sessionToken: "1lk324jwlkdjs23"
}

let userData = {
    username: "cthrutchley",
    password: "12039d",
    firstName: "Chris",
    lastName: "Thrutchley"
}

let userObject = {
    ...userAuthInfo,
    ...userData
}

console.log(userObject)

// Making copies of objects
let originalUserObject = {
    id: '12390',
    sessionToken: '1lk324jwlkdjs23',
    username: 'cthrutchley',
    password: '12039d',
    firstName: 'Chris',
    lastName: 'Thrutchley'
}

let newUserObject = { ...originalUserObject }

newUserObject.id = '12'

console.log(originalUserObject)