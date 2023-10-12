

/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {
    if (numbers.length < 2) return numbers;
    let min;
    let mindex;
    for (let i = 0; i < numbers.length - 1; i++) {
        mindex = i;
        min = numbers[mindex];
        for (let j = i; j < numbers.length; j++) {
            if (numbers[j] < min) {
                min = numbers[j];
                mindex = j;
            }
        }
        [numbers[mindex], numbers[i]] = [numbers[i], numbers[mindex]]
        // let temp = numbers[i];
        // numbers[i] = numbers[mindex];
        // numbers[mindex] = temp;
    };
    return numbers;
}



// console.log(selectionSort(numbersRandomOrder))
// console.log(selectionSort(numbersReversed))
// console.log(selectionSort([0, 1]))


/*****************************************************************************/


let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

let recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available2 = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe, available))
console.log(cakes(recipe2, available2))

function cakes(recipe, available) {
    // let i = 0;
    let amount = Infinity;
    let temp;
    for (let key in recipe) {
        // console.log(key, recipe[key]);
        if (available.hasOwnProperty(key)){
            console.log(Math.floor(available[key] / recipe[key]) );
            temp = Math.floor(available[key] / recipe[key])
            if (temp < amount) {
                amount = temp;
            }
        } else {
            return 0;
        }
    }
    return amount;
}








