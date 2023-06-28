/* 
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.
# character means a backspace character.

i.e., after processing the backspaces, are the two strings equal?

Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""



const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"


const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */

function deleteAfter(str){
    const arr =[];
    for (let a of str){
        if (a !== '#'){
            arr.push(a)
        }
        if (a === '#'){
            arr.pop()
        }
    }
    return arr
}

function backspaceStringCompare(S, T) {
    const sBack = deleteAfter(S)
    const tBack = deleteAfter(T)

    if (sBack.length !== tBack.length) {
        return false;
    }

    for (let i = 0; i < sBack.length; i++) {
        if (sBack[i] !== tBack[i]) {
            return false;
        }
    }
    return true;
}



console.log(backspaceStringCompare(S1, T1), expected1)
console.log(backspaceStringCompare(S2, T2), expected2)
console.log(backspaceStringCompare(S3, T3), expected3)
console.log(backspaceStringCompare(S4, T4), expected4)

/*****************************************************************************/
