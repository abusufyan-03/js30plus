/* 
16.  Write a JS program to check whether a number 
is palindrome or not. 
*/
function checkPalindrome(num){
    if(num < 0){
        return `Given number is not palindrome`;
    }
    let number = num;
    let digit;
    let rev = 0;
    while(num>0){
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    if(number === rev){
        return `Given number is palindrome`
    } else {
        return `Given number is not palindrome`
    }
}
console.log(checkPalindrome(-101));