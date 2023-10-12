

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution

  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

  Hard Bonus: make it O(n) time
*/

const numbers1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const numbers2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(numbers, k) {
    let result = [];
    let data = {}
    for (let i = 0; i < numbers.length; i++) {
        if (data.hasOwnProperty(numbers[i])){
            data[numbers[i]]++
        } else {
            data[numbers[i]] = 1;
        }
    }
    const sortable = Object.entries(data);
    const sorted = sortable.sort((a,b) => b[1] - a[1])
    for (let i = 0; i < k; i++){
        result.push(parseInt(sorted[i][0]))
    }
    return result;
}

function topKFrequent(nums, k) {
    let result = []
    let hash = {}
    for (let num of nums) {
        if (!hash[num]) hash[num] = 0
        hash[num]++
    }
    const sortable = Object.entries(hash);
    const sorted = sortable.sort((a,b) => b[1] - a[1])
    for (let i = 0; i < k; i++){
        result.push(parseInt(sorted[i][0]))
    }
    return result
}


console.log(kMostFrequent(numbers1,k1)," Expected =>", expected1)
console.log(kMostFrequent(numbers2,k2)," Expected =>", expected2)
console.log(kMostFrequent(numbers3,k3)," Expected =>", expected3)

console.log(topKFrequent(numbers1,k1)," Expected =>", expected1)
console.log(topKFrequent(numbers2,k2)," Expected =>", expected2)
console.log(topKFrequent(numbers3,k3)," Expected =>", expected3)



/*****************************************************************************/