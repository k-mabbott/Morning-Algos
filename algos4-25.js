/* 
    Given array and an additional value, insert this value at the beginning of
    the array by making space for it at the beginning of the array.
    return the new length of the array.

    Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = 'a';
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ['a'];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
    let temp = ''
    items.push(newItem);
    for (var i = items.length-1; i > 0; i--){
        temp = items[i];
        items[i] = items[i-1];
        items[i-1] = temp;
    }
    return items.length;
}
console.log(unshift(arr1, newItem1), 'expected' + expected1)
console.log(unshift(arr2, newItem2), 'expected' + expected2)
/* 
    Given an array, remove and
    return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

    Do this without using any built-in array methods except pop().
*/

const arr01 = [1, 2, 3];
const expected01 = 1;
// after running function arr1 should now be:
const expectedArr1 = [2, 3];

const arr02 = ['a', 'b', 'c', 'd'];
const expected02 = 'a';
// after running function arr2 should now be:
const expectedArr2 = ['b', 'c', 'd'];

const arr03 = [];
const expected3 = undefined;
const expectedArr3 = [];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
    let temp = ''
    for (var i = 1; i < items.length; i++){
        temp = items[i];
        items[i] = items[i-1];
        items[i-1] = temp;
    }
    return items.pop();
}
console.log(shift(arr01), 'expected' + expected01)
console.log(shift(arr02), 'expected' + expected02)
console.log(shift(arr03), 'expected' + '' + expected3)






