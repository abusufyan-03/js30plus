/* 
09. Write a C program to count number of digits in a number. 
*/
function countNumberOfDigits(num) {
    if(num === 0) return 1;
    let count = 0;
    num = Math.abs(num); // for edge cases (negative numbers)
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return (count);
}
console.log(countNumberOfDigits(123));