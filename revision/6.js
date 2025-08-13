/* 
7. Write a C program to find sum of all even numbers between 1 to n. 
8. Write a C program to find sum of all odd numbers between 1 to n. 
9. Write a C program to print multiplication table of any number. 
10.  Write a C program to count number of digits in a number.
*/

// function sumOfAllEven(num){
//     let sum = 0;
//     for(let i = 1; i<=num; i++){
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     console.log(sum)
// }
// sumOfAllEven(4);

// 8. Write a C program to find sum of all odd numbers between 1 to n. 
// function sumOfAllOdd(num){
//     let sum = 0;
//     for(let i = 0; i<=num; i++){
//         if(i%2 != 0){
//             sum = sum + i;
//         }
//     }
//     console.log(sum)
// }
// sumOfAllOdd(4)

// 9. Write a C program to print multiplication table of any number. 
// function multiplication(num){
//     for(let i = 1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }
// multiplication(2)

// 10.  Write a C program to count number of digits in a number.
function countNumberOfDigits(num){
    if(num === 0) return 1
    let count = 0;
    num = Math.abs(num)
    while(num>0){
        count++;
        num = Math.floor(num / 10);
    }
    return (count)
}
console.log(countNumberOfDigits(0))