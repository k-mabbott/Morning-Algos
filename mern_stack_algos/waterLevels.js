

/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels1(waterLevels) {
    if (waterLevels.length < 2) return -1;
    let start = 0;
    let end = 0;
    let res = -1;

    for (let i = 0; i < waterLevels.length - 1; i++) {
        if (waterLevels[i] < waterLevels[i+1]) {
            start = i;
            end = i + 1;
            while (end < waterLevels.length && waterLevels[end] < waterLevels[end + 1]) {
                end = end + 1;
            }
            res = Math.max(waterLevels[end] - waterLevels[start], res);
            i = end;
        }
    }
    return res;
}
console.log(measureWaterLevels1(riverLevels1), 'expected', expected1)
console.log(measureWaterLevels1(riverLevels2), 'expected', expected2)
console.log(measureWaterLevels1(riverLevels3), 'expected', expected3)
console.log(measureWaterLevels1(riverLevels4), 'expected', expected4)
console.log(measureWaterLevels1(riverLevels5), 'expected', expected5)
console.log(measureWaterLevels1(riverLevels6), 'expected', expected6)
console.log(measureWaterLevels1(riverLevels7), 'expected', expected7)
console.log(measureWaterLevels1(riverLevels8), 'expected', expected8)

/*****************************************************************************/

// function measureWaterLevels(waterLevels) {
//     if (waterLevels.length < 2) return -1;
//     let low = waterLevels[0];
//     let high = waterLevels[0];
//     const diff = [];
//     for (let i = 1; i < waterLevels.length; i++) {
//         if (waterLevels[i] > waterLevels[i-1]){
//             high = waterLevels[i];
//         } else if (waterLevels[i] < waterLevels[i-1]){
//             diff.push(high-low);
//             low = waterLevels[i];
//         }
//     // diff.push(high-low);
//     }
//     return Math.max(...diff);
// }

// console.log(measureWaterLevels(riverLevels1), 'expected', expected1)
// console.log(measureWaterLevels(riverLevels2), 'expected', expected2)
// console.log(measureWaterLevels(riverLevels3), 'expected', expected3)
// console.log(measureWaterLevels(riverLevels4), 'expected', expected4)
// console.log(measureWaterLevels(riverLevels5), 'expected', expected5)
// console.log(measureWaterLevels(riverLevels6), 'expected', expected6)