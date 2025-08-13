/* 
03. Write a C program to print all even numbers between 
1 to 100. – using while loop
*/
function printAllEvenNumber(){
    let i = 2;
    while (i < 100) {
        if(i % 2 == 0){
            console.log(i)
        }
        i++
    }
}
printAllEvenNumber()