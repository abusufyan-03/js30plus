/* 
04. Write a C program to print all 
odd number between 1 to 100. 
*/
function printAllOddNumber() {
    for (let i = 0; i < 100; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}
printAllOddNumber();