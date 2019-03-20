// Below is the most common way that this problem is presented:
/* 
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”.
 */


 /* The main reason this problem is presented is to eliminate the new devs that don't know the basic 
 conditional statements and operators */

 //This is the most common solution to this challenge.
for (let i=1; i < 101; i++){
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Less common shorter solution using ternary operators
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
/* I considered removing the 'let' signal but 
this was not advised in the forum I read
 due to it removing compatibility in a strict environment */


