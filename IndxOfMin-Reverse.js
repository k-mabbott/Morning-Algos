/* 
    Given an array of integers
    return the index where the smallest integer is located

    return -1 if there is no smallest integer (array is empty) 
    since -1 is not a valid index, this indicates it couldn't be found

    If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
// const expected1 = 1;

const nums2 = [5, 4, 2, 2, 3];
// const expected2 = 2;

const nums3 = [];
// const expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
    var min = nums[0]
    var result = 0
    if (nums == ''){
        return -1;
    }
    for (var i = 1; i < nums.length; i++){
        if (min > nums[i]){
            min = nums[i]
            result = i;
        }
    }
    return result;
}
console.log(indexOfMinVal(nums1))
console.log(indexOfMinVal(nums2))
console.log(indexOfMinVal(nums3))


/*******************************************************************************/

/* 
    Given an array, reverse it's items in place
    return the array after reversing it

    Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ['a', 'b'];
const expected2 = ['b', 'a'];

const arr3 = ['a'];
const expected3 = ['a'];

const arr4 = [];
const expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */


// function reverseArr(items) {
//     var max = items.length-1
//     var temp = ''
//     for (var i = 0 ; i < Math.floor(items.length / 2); i++){
//         temp = items[i]
//         items[i] = items[max - i]
//         items[max - i] = temp;
//     }
//     return items;
    
// }

function reverseArr(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // the idea of swap
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
    return arr;
}

console.log(reverseArr(arr1))


// function reverseArr(items) {
//     for (var i = 0 ; i < Math.floor(items.length / 2) ; i++){
//         [items[i], items[items.length - 1 - i]] = [items[items.length - 1 - i], items[i]]
//     }
    
//     return items;
// }