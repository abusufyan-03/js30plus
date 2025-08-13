/* 
02 Write a C program to print all alphabets 
from a to z. – using while loop 
*/

function printAllAlbhabetsFromAtoZ(){
    let i = 97;
    while(i<=122){
        console.log(String.fromCharCode(i))
        i++
    }
}
printAllAlbhabetsFromAtoZ()