/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {Array<number>} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no pair is found.
 *    If there were multiple solutions, the one with the longest song should be used.
 */

// Need to fix  commented section
/*
function musicRuntime(busDuration, songDurations) {
    const rideDur = busDuration - 30
    let i = 0;
    let j = songDurations.length-1;
    const res = []
    const map = {

    }

    for (let i = 0; i < songDurations.length; i++) {
        map[ rideDur - songDurations[i] ] = songDurations[i]
        if (map.hasOwnProperty(songDurations[i])){
            res.push([songDurations[i], map[songDurations[i]] ])
        }
    }

    // while (i <= j) {


    //     if (songDurations[i] + songDurations[j] === rideDur) {
    //         res.push([i, j])
    //         j--;
    //         i++;
    //     }
    //     else if (songDurations[i] + songDurations[j] > rideDur) {
    //         j--
    //     }
    //     else if (songDurations[i] + songDurations[j] < rideDur) {
    //         i++
    //     }
    // }
    return res
}
*/

function musicRuntime(busDuration, songDurations) {
    const duration = busDuration - 30;
    const songMap = new Map();
    let max = 0;
    let songPair = [-1, -1];

    for (let i = 0; i < songDurations.length; i++) {
        const complement = duration - songDurations[i];

        if (songMap.has(complement)) {
            const complementIndex = songMap.get(complement);

            if (Math.max(complement, songDurations[i]) > max) {
                max = Math.max(complement, songDurations[i]);
                songPair = [complementIndex, i];
            }
        }

        if (!songMap.has(songDurations[i])) {
            songMap.set(songDurations[i], i);
        }
    }

    return songPair;
}


console.log(musicRuntime(busDuration1, songDurations1), 'Expected => ', expected1)
console.log(musicRuntime(busDuration2, songDurations2), 'Expected => ', expected2)
console.log(musicRuntime(busDuration3, songDurations3), 'Expected => ', expected3)