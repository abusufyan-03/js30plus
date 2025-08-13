/* 
07. Write a C program to find sum 
of all odd numbers between 1 to n.
*/
function findSumOfAllOddNum(num) {
    let sum = 0;
    for(let i = 1; i<=num; i++){
        if(i %2 !=0 ) {
            sum = sum + i;
        }
    }
    console.log(sum)
}
findSumOfAllOddNum(4)