/* 
13.  Write a JS program to calculate sum 
of digits of a number.
*/
function sumOfdigitsOfNumber(num){
    num = Math.abs(num)
    let sum = 0;
    let digit;
    while(num>0){
        digit = num % 10;
        num = Math.floor(num/10)
        sum = sum + digit;
    }
    console.log(sum)
}
sumOfdigitsOfNumber(11)
