/* 
Given an array and an index,
remove the item at that index.
return the removed item

No built-in array methods except pop().
*/

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const removeIdx1 = 1;
const expectedA1 = 'b';
// after function call, arr1 should be:
const arr1Expected = ['a', 'c', 'd', 'e'];

const arr2 = ['a', 'b', 'c'];
const removeIdx2 = 3;
const expectedA2 = null;
const arr2Expected = ['a', 'b', 'c'];

const arr3 = ['a', 'b', 'c'];
const removeIdx3 = -3;
const expectedA3 = null;
const arr3Expected = ['a', 'b', 'c'];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
    // if (!items[idx]){
    //     return null;
    // }
    if (idx < 0 || idx > items.length-1){
        return null;
    }
    let temp = items[idx]
    for (var i = idx; i < items.length-1;i++) {
        items[i] = items[i+1]
    }
    items.pop()
    // console.log(items)
    return temp;
}
console.log(removeAt(arr1, removeIdx1))
console.log(removeAt(arr2, removeIdx2))
console.log(removeAt(arr3, removeIdx3))
/* 
Given an array, move the minimum value to the front in-place
return the array after done.
≤
No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expectedB1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expectedB2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expectedB3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
    let min = nums[0]
    let mindex = 0
    for (var i = 1; i < nums.length ; i++){
        if (nums[i] < min){
            min = nums[i];
            mindex = i;
        }
    }
    for (var i = mindex; i > 0 ; i--){
        min = nums[i-1]
        nums[i-1] = nums[i];
        nums[i] = min;
    }
    return nums
}

console.log(minToFront(nums1),expectedB1)
console.log(minToFront(nums2),expectedB2)
console.log(minToFront(nums3),expectedB3)





