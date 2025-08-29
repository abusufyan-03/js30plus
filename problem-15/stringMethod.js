/* 
15.  Write a JS program to enter a number 
and print its reverse. 
*/
function printReverseStringMethod(num){
    num = Math.abs(num);
    let str = num.toString();
    let rev = '';
    let i = str.length - 1;
    while(i >= 0){
        rev+= str[i];
        i--;
    }
    return rev;
    
}
console.log(printReverseStringMethod(1230))