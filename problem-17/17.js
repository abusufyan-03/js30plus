/* 
17.  Write a JS program to find frequency 
of each digit in a given integer.
*/
function frequencyOfEachDigit(num){
    num = Math.abs(num);
    let count, digit;
    let number = num
    count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while(num > 0){
        digit = num % 10;
        num = Math.floor(num / 10);
        count[digit]++;
    }
    let i = 0;
    while (i <= 9){
        if(count[i] > 0){
            console.log(i, '->', count[i])
        }
        i++;
    }
    
}
frequencyOfEachDigit(1100333);