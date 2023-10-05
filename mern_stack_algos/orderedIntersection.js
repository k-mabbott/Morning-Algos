

/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

const numbersA4 = [1,1,1,1,5,5,5,5];
const numbersB4 = [1,1,1,1,5,5,5,5];
const expected4 = [1,5];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
function orderedIntersection(sortedA, sortedB) {
    const seen = {};
    const res = new Set();
    for (let i = 0; i < sortedA.length; i++) {
        if (!seen.hasOwnProperty(sortedA[i])) {
            seen[sortedA[i]] = 1;
        }
    }
    for (let j = 0; j < sortedB.length; j++) {
        if (seen.hasOwnProperty(sortedB[j])) {
            res.add(sortedB[j]);
        }
    }
    return [...res]
}


function orderedIntersection1(sortedA, sortedB) {
    let i = 0;
    let j = 0;
    const res = []
    while (i < sortedA.length || j < sortedB.length) {
        if (sortedA[i] == sortedB[j] && sortedA[i] != res[res.length-1] ){
            res.push(sortedA[i]);
            i++
            j++
        }
        sortedA[i] < sortedB[j] ? i++ : j++;
    } 
    
    return res;
}








console.log(orderedIntersection(numbersA1, numbersB1))
console.log(orderedIntersection1(numbersA1, numbersB1))
console.log(orderedIntersection1(numbersA2, numbersB2))
console.log(orderedIntersection1(numbersA3, numbersB3))
console.log(orderedIntersection1(numbersA4, numbersB4))

/*****************************************************************************/