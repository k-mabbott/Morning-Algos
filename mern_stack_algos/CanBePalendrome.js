/* 

Given a string
return whether or not it's possible to make a palindrome out of the string's
characters.

What is it about a string that makes it possible for it to become a
palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    if (str.length < 1) return false;
    if (str.length === 1) return true;

    const counts = {};
    let oddCounts = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(counts[str[i]])
        // set up turnary for if count has been seen before if not set to 1
        counts[str[i]] = counts[str[i]] ? ++counts[str[i]] : 1
        if (counts[str[i]] % 2 === 1)
            oddCounts++
        else
            oddCounts--
    }
    console.log(oddCounts)
    return oddCounts === 0 || oddCounts === 1
}

// console.log(map)
// return map;


console.log(canStringBecomePalindrome(str1),'=>', expected1)
console.log(canStringBecomePalindrome(str2),'=>', expected2)
console.log(canStringBecomePalindrome(str3),'=>', expected3)
console.log(canStringBecomePalindrome(str4), '=>', expected4)
console.log(canStringBecomePalindrome(str5),'=>', expected5)
console.log(canStringBecomePalindrome(str6),'=>', expected6)

/*****************************************************************************/