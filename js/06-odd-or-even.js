/*eslint-env browser*/

/* Odd or Even?
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even" */


// ----------- Odd or Even? --------------

var i;
i = 0;

while (i <= 15) {
    if (i%2 == 0) {
        window.console.log(i + " is even");
    } else {
       window.console.log(i + " is odd"); 
    }
    i +=1;
}
