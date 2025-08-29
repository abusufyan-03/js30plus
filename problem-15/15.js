/* 
15.  Write a JS program to enter a number 
and print its reverse. 
*/
function printReverse(num){
    num = Math.abs(num);
    let rev = 0;
    let digit;
    console.log(num)
    while(num>0){
        digit = num % 10;
        num = Math.floor(num / 10)
        rev = rev * 10 + digit;
    }
    console.log(rev)
}
printReverse(2240);
