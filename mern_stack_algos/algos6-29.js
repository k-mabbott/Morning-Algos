// https://leetcode.com/problems/compare-version-numbers/

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */

function compareVersionNumbers(v1, v2) {

    const nums1 = v1.split('.');
    const nums2 = v2.split('.');
    console.log(nums1, nums2);

    for (let i = 0; i < nums1.length || i < nums2.length; i++) {
        let 
        if (parseInt(nums1[1]?? 0) > parseInt(nums2[i]?? 0)){
            return -1
        } else if (parseInt(nums2[1]?? 0) > parseInt(nums1[i])?? 0){
            return 1
        }
        return 0
    }
}



console.log(compareVersionNumbers(test1V1, test1V2), 'expected => ', expected1)
console.log(compareVersionNumbers(test2V1, test2V2), 'expected => ', expected2)
console.log(compareVersionNumbers(test3V1, test3V2), 'expected => ', expected3)
console.log(compareVersionNumbers(test4V1, test4V2), 'expected => ', expected4)
console.log(compareVersionNumbers(test5V1, test5V2), 'expected => ', expected5)
console.log(compareVersionNumbers(test6V1, test6V2), 'expected => ', expected6)


/*****************************************************************************/


function compareVersionNumbers2(v1, v2) {

    for (let i = 0 ; i < v1.length || i < v2.length; i++) {

        
        if (parseInt(v1[1] ?? 0) > parseInt(v2[i] ?? 0)) {
            return -1
        } else if (parseInt(v2[1] ?? 0) > parseInt(v1[i]) ?? 0) {
            return 1
        }
        return 0
    }
}