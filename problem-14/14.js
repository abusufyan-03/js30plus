/* 
14.  Write a JS program to calculate product 
of digits of a number. 
*/
function productOfDigitsOfNumber(num){
    num = Math.abs(num);
    if(num == 0){
        return 0;
    }
    let digit;
    let product = 1;
    while(num>0){
        digit = num % 10;
        num = Math.floor(num / 10);
        product = product * digit;
    }
    return product;
}
console.log(productOfDigitsOfNumber(10));