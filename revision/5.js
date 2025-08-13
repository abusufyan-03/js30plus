// 6. Write a C program to find sum of all natural numbers between 1 to n
function sumOfAllNatural(num){
    let sum = 0;
    for(let i = 1; i<=num; i++) {
        sum+=i;
    }
    console.log(sum)
}
sumOfAllNatural(4)