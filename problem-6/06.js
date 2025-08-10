/* 
06. Write a C program to find sum of all 
even numbers between 1 to n. 
*/
function findSumOfAllevenNumber(num){
    let sum = 0
    for(let i = 1; i<=num; i++){
        if(i%2 == 0){
            sum = sum + i;
        }
    }
    console.log(sum)
}
findSumOfAllevenNumber(10)