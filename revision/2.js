// 3. Write a C program to print all alphabets from a to z. – using while loop 
// 4. Write a C program to print all even numbers between 1 to 100. – using while loop 
// 5. Write a C program to print all odd number between 1 to 100. 
// 6. Write a C program to find sum of all natural numbers between 1 to n

function printAllAlbhabet(){
    let i = 97;
    while(i<=122){
        console.log(String.fromCharCode(i))
        i++;
    }
}
printAllAlbhabet()