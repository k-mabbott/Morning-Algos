/*
    Union Sorted Arrays

    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.

    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbers1A = [1, 2, 2, 2, 7];
const numbers1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const numbers2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const numbers2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const numbers3A = [];
const numbers3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const numbers4A = [2, 2, 3, 3, 3];
const numbers4B = [];
const expected4 = [2, 2, 3, 3, 3];

const numbers5A = [];
const numbers5B = [];
const expected5 = [];
/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    // if (sortedA.length < 1) return sortedA
    // if (sortedB.length < 1) return sortedB
    let i = 0;
    let j = 0;
    const res = [];
    // let count = 0;
    while (i < sortedA.length && j < sortedB.length) {
        if (sortedA[i] < sortedB[j]) {
            res.push(sortedA[i]);
            i++;
        } else if (sortedA[i] === sortedB[j]) {
            res.push(sortedA[i]);
            i++;
            j++;
        }
        else {
            res.push(sortedB[j])
            j++
        }
    }
    while (i < sortedA.length) res.push(sortedA[i++]);
    while (j < sortedB.length) res.push(sortedB[j++]);
    return res
}


console.log("1: \n" + orderedMultisetUnion(numbers1A, numbers1B), 'expected', expected1)
console.log("2: \n" + orderedMultisetUnion(numbers2A, numbers2B), 'expected', expected2)
console.log("3: \n" + orderedMultisetUnion(numbers3A, numbers3B), 'expected', expected3)
console.log("4: \n" + orderedMultisetUnion(numbers4A, numbers4B), 'expected', expected4)
console.log("5: \n" + orderedMultisetUnion(numbers5A, numbers5B), 'expected', expected5)

/*****************************************************************************/