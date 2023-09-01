/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba"
const expected5 = true;

//SOLUTION 1
function isPalindrome(str) {
    // Your code here
    for (var i=0; i<str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false
        }
    } 
    return true
}

//SOLUTION 2
function isPalindrome(str){
    let newstr = ""
    for (var i=str.length-1; i >= 0; i--){
        newstr += str[i]
    }
    console.log(newstr)
    if (newstr == str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome(str1)) //expected: true
console.log(isPalindrome(str2)) //expected: true
console.log(isPalindrome(str3)) //expected: false
console.log(isPalindrome(str4)) //expected: false
console.log(isPalindrome(str5)) //expected: true