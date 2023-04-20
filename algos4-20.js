/**
 * Nested Arrays
 */
 
const arr1 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];
const value1 = 6;
const expected1 = true;

/**
 * Given a two dimensional array, determine if the value is present
 * @param {Array<Array<any>>} arr2d
 * @param {number} value
 * @returns {boolean} true if present, false if not
 */
function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){
            if(value == arr2d[i][j]){
                return true;
            }
    }
} return false;
}
// console.log(arr1[0][1])
console.log(isPresent2d(arr1, value1))
/************************************************************************** */

const arr2 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];
const expected2 = [2, 5, 8, 3, 6, 1, 5, 7, 7];

/**
 * Given a two dimensional array, return a new array that the contains
 * just the elements of the inner arrays
 * @param {Array<Array<any>>} arr2d
 * @returns {Array<any>} the flattened array
 */
function flattenArray(arr2d) {
    var newArr = []
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){
            newArr.push(arr2d[i][j]);
        }
    } return newArr;
}

console.log(flattenArray(arr2))