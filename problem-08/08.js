/*  
08. Write a C program to print multiplication table of any number. 
*/
function multiplicationTable(num){
    for(let i = 1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
multiplicationTable(2)