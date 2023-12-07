

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";         // ( () () )
const expected1 = true;

const str2 = "N(0(p)3";               // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";          // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.

 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let open = 0
    for (var i = 0; i < str.length; i++){
        if (str[i] == '(' ){
            open++
        } else if (str[i] == ')'){
            open--
        }
        // if odd number of open or close parens
        if (open == -1){
            return false
        }
    }

    return open == 0;
}



    // for (var i = str.length/2; i >= 0; i--){
    //     [str.legnth-1-i] [i]


console.log(parensValid(str1), 'true') // expected: true
console.log(parensValid(str2), 'false') // expected: false
console.log(parensValid(str3), 'false') // expected: false


/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";    // ( {} [ ({}) ] ) [{}]
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e";          // ({} []) {
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k";       // () [(] {) }
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.

 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */

function bracesValid(str) {
    const stack = []
    const openers = "({["
    const enders = ")}]"
    for (const c of str) {
        if(enders.includes(c)){
            let valid = openers[enders.indexOf(c)]
            if(stack[stack.length - 1] === valid){
                stack.pop()
            }else{
                return false
            }
        }else if (openers.includes(c)){
            stack.push(c)
        }
    }
    return stack.length === 0
}
    
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false





function bracesValid(str) {
    temp = {}
    let paren = 0
    let curly = 0
    let sqr = 0
    for (var i = 0; i < str.length; i++){
        // temp[str[i]] = str[i];
        switch(str[i]){
            case '(':
                paren++
                break;
            case ')':
                paren--
                break;
            case '{':
                curly++
                break;
            case '}':
                curly--
                break;
            case '[':
                sqr++
                break;
            case ']':
                sqr--
                break;
        }
    }
    result = paren + curly + sqr
    return result
}