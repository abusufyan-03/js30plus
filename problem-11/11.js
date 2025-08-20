/* 
11.  Write a JS program to find sum of first and 
last digit of a number.
*/
function sumOfFirstAndLast(num) {
    num = Math.abs(num);
    let first, last;
    last = num % 10;
    while(num>=10){
        num = Math.floor(num / 10);
    }
    first = num;
    console.log("sum:", first + last)
}
sumOfFirstAndLast(10)