/* 
10. Write a JS program to find first and last 
digit of a number. 
*/
function findFirstAndLast(num){
    num = Math.abs(num)
    let first, last;
    last = num % 10;
    while(num>=10){
        num = Math.floor(num / 10);
    }
    first = num;
    console.log('First', first, 'last:', last)
}
findFirstAndLast(1);
