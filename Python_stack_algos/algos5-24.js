

/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
  i.e, for n > 1 fib(n) = fib(n-1) + fib(n-2) 
  */

  const num1 = 0;
  const expected1 = 0;
  
  const num2 = 1;
  const expected2 = 1;
  
  const num3 = 2;
  const expected3 = 1;
  
  const num4 = 3;
  const expected4 = 2;
  
  const num5 = 4;
  const expected5 = 3;
  
  const num6 = 8;
  const expected6 = 21;
  
  /**
   * Recursively finds the nth number in the fibonacci sequence.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} num The position of the desired number in the fibonacci sequence.
   * @returns {number} The fibonacci number at the given position.
   */
  // Finish early? Try to implement memoization. Feel free to google! 

function fibonacci(num) {
    //Base case(s)?
    if (num <= 0){
        return 0
    } else if (num == 1){
        return 1
    }
    //Logic?  0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
    // Recursive call
    return fibonacci(num-1)+fibonacci(num-2)
  } //         


// console.log(fibonacci(42)); // 0
// console.log(fibonacci(num2)); // 1
// console.log(fibonacci(num3)); // 1
// console.log(fibonacci(num4)); // 2
// console.log(fibonacci(num5)); // 3
// console.log(fibonacci(num6)); // 21




// function fibonacci1(num, memo) {
//     if (num <= 0){
//         return 0
//     } else if (num == 1){
//         return 1
//     }
//     memo = memo || {};
//     console.log('memo: ', memo)
//     if (memo[num]) return memo[num];
//     return memo[num] = fibonacci1(num - 1, memo) + fibonacci1(num - 2, memo);
// }


function fibonacci1(num, memo={1: 1, 2: 1}) {
    if (num <= 0){
    return 0
    }
    memo[num] = memo[num] || fibonacci1(num - 1, memo) + fibonacci1(num - 2, memo);
    return memo[num]
}

console.log(fibonacci1(42)); // 0
// console.log(fibonacci1(num2)); // 1
// console.log(fibonacci1(num3)); // 1
// console.log(fibonacci1(num4)); // 2
// console.log(fibonacci1(num5)); // 3
// console.log(fibonacci1(num6)); // 21
// console.log(fibonacci1(12)); // 21
// console.log(fibonacci1(5)); // 21
  /*****************************************************************************/
  
