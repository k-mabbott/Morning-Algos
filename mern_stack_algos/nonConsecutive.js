

/* 
Given an array of ints, find all the non-consecutive integers
A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

The first element is never considered non-consecutive.

Return an array of objects where each object contains the number itself
and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const numbers2 = [];
const expected2 = [];

const numbers3 = [1, 3, 7, 9];
const expected3 = [
    { i: 1, n: 3 },
    { i: 2, n: 7 },
    { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecutiveNumbers}
 */

function allNonConsecutive(sortedNumbers) {
    const output = []
    for (let i = 1; i < sortedNumbers.length; i++) {
        const prevNum = sortedNumbers[i-1];
        const curNum = sortedNumbers[i];
        if (prevNum + 1 !== curNum){
            output.push({i:i, n:curNum})
        }
    }
    return output
}

// console.log(allNonConsecutive(numbers1), 'Expected' , expected1)
// console.log(allNonConsecutive(numbers2), 'Expected' , expected2)
// console.log(allNonConsecutive(numbers3), 'Expected' , expected3)

/*****************************************************************************/

function allNonConsecutive1(sortedNumbers) {
    const output = []
    for (let i = 1; i < sortedNumbers.length; i++) {
        if (sortedNumbers[i-1] + 1 !== sortedNumbers[i]){
            output.push({i:i, n:sortedNumbers[i]})
        }
    }
    return output
}
// console.log(allNonConsecutive1(numbers1), 'Expected' , expected1)
// console.log(allNonConsecutive1(numbers2), 'Expected' , expected2)
// console.log(allNonConsecutive1(numbers3), 'Expected' , expected3)


const numbers01 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected01 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const numbers02 = [];
const sum2 = 5;
const expected02 = [];

const numbers03 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected03 = [];

// Bonus:
const numbers04 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected04 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const numbers05 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected05 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
// function findConsecutiveSums(numbers, targetSum) {
    
//     const res = []
//     let total
//     for (let i = 0; i < numbers.length; i++) {
//         total = 0
//         let j = i;
//         while(total <= targetSum  ) {
//             total += numbers[j];
//             if (total === targetSum){
//                 res.push(numbers.slice(i,j+1))
//             }
//             j++;
//         }
        
//     }
//     return res
// }

// console.log(findConsecutiveSums(numbers01, sum1), 'expected', expected01)
// console.log(findConsecutiveSums(numbers02, sum2), 'expected', expected02)
// console.log(findConsecutiveSums(numbers03, sum3), 'expected', expected03)
// console.log(findConsecutiveSums(numbers04, sum4), 'expected', expected04)
// // console.log(findConsecutiveSums(numbers05, sum5), 'expected', expected05)


/*****************************************************************************/
// sliding window
// Assume there are all positive numbers or all negative numbers
function findConsecutiveSumsKen(numbers, targetSum) {
    const absTargetSum = Math.abs(targetSum);
    let start = 0;
    let end = 0;
    let sum = 0;
    const res = [];

    while (end < numbers.length && start <= end) {
        if (sum >= absTargetSum) {
            if (sum == absTargetSum) res.push(numbers.slice(start, end));
            sum -= Math.abs(numbers[start]);
            start++;
            continue;
        }
        sum += Math.abs(numbers[end]);
        end++;
    }
    return res;
}

function findConsecutiveSumsDanny(numbers, targetSum) {
    const result = [];
    let i = 0;
    let j = 1;

    while (j < numbers.length) {
        let sum = numbers[i];
        const possible = [sum];

        while (j < numbers.length && Math.abs(sum) <= Math.abs(targetSum)) {
            sum += numbers[j];
            possible.push(numbers[j]);
            if (sum === targetSum) {
                result.push([...possible]);
            }
            j++;
        }
        i++;
        j = i + 1;
    }
    return result;
}

console.log(findConsecutiveSumsDanny(numbers01, sum1), 'expected', expected01)
console.log(findConsecutiveSumsDanny(numbers02, sum2), 'expected', expected02)
console.log(findConsecutiveSumsDanny(numbers03, sum3), 'expected', expected03)
console.log(findConsecutiveSumsDanny(numbers04, sum4), 'expected', expected04)
console.log(findConsecutiveSumsDanny(numbers05, sum5), 'expected', expected05)

