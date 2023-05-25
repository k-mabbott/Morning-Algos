
/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.

 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */


function binarySearch(sortedNums, num, start=0, end=sortedNums.length - 1) {
    //Base cases? 
    if (start > end) return false;
    //Logic
    let mid = Math.floor((start + end) / 2);
    if (sortedNums[mid] == num) return true;
    //Recursive call(s) /return(s)
    if (sortedNums[mid] > num) return binarySearch(sortedNums, num, start, mid - 1);
    else return binarySearch(sortedNums, num, mid + 1, end);
}





console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true
console.log(binarySearch(nums3, searchNum3)); // true








// function binarySearch(sortedNums, num, lb=0, up=sortedNums.length-1) {
//     //Your code here
//     if (lb > up) return false;
//     s = Math.floor(sortedNums.length/2)
//     //Base cases? 
//     if (sortedNums[s] === num){
//         return true
//     } else if (sortedNums[s] > num) {
//         lb = s
//     } else {
//         up = s
//     }
//     //Logic

//     //Recursive call(s) /return(s)

// }