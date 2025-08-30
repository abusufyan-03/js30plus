/* 
16.  Write a JS program to check whether a number 
is palindrome or not. 
*/
function checkPalindromeStringMethod(num){
    let str = num.toString();
    let i = str.length - 1;
    let rev = '';
    while(i>=0){
        rev = rev + str[i];
        i--
    }
    if(str === rev){
        return `Given number is palindrom`;
    } else {
        return `Given number is not palindrome`
    }
}
console.log(checkPalindromeStringMethod(-121));