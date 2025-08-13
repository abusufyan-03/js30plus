// 4. Write a C program to print all even numbers between 1 to 100. – using while loop 
// 5. Write a C program to print all odd number between 1 to 100. 
// 6. Write a C program to find sum of all natural numbers between 1 to n
function printAllEven(){
    let i = 1;
    while(i<=100){
        if(i % 2 == 0) {
            console.log(i);
        }
        i++
    }
}
printAllEven()