/* 
12. Write a JS program to swap first and last digits of a number.
   → Approach 1: Pure Math
   → Approach 2: String-based (handles edge cases like 10, 20, 90 etc.)
*/
function swapNumber(num){
    num = Math.abs(num);
    if(num<10){
        console.log('please enter 2 digit number');
        return;
    }
    let number = num;
    let first, last, digit, mid, withOutFirst, newNum;
    last = num % 10; // Extract last digit
    while(num>=10){ // Extract First digit
        num = Math.floor(num / 10);
    }
    first = num;
    digit = Math.floor(Math.log10(number)+1) // count digit
    withOutFirst = number % (Math.pow(10, digit-1)); // remove first digit (e.g, 1234 -> 234)
    mid = Math.floor(withOutFirst / 10); // remove last digit (e.g, 234 -> 23)
    newNum = (last * (Math.pow(10, digit-1)) + mid * 10 + first); // construct num: f + mid + l
    console.log(newNum);
}
swapNumber(10);
/* 
Note: If the input ends with 0 (like 90), mathematically the swapped number will lose the 0 (→ 9).To preserve formatting, we can use a string-based solution.
*/

// Approach 2: String-based (handles edge cases like 10, 20, 90 etc.)
function swapNumber2(num) {
    let str, swapped;
    num = Math.abs(num);
    str = num.toString();
    if(str.length === 1){
        console.log('please enter 2 digit number');
        return;
    }
    swapped = str[str.length - 1] + str.slice(1, -1) + str[0];
    console.log('swapped:', swapped);
}
swapNumber2(7);