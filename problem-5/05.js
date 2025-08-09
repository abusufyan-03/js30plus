/* 
05. Write a C program to find sum of all 
natural numbers between 1 to n.
*/
function sumOfAllNaturalNumber(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum = sum + i;
    }
    console.log(sum)
}
sumOfAllNaturalNumber(4)