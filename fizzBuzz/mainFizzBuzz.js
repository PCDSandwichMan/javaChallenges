// Below is the most common way that this problem is presented:
/* 
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 */

 /* The main reason this challenge is to weed out the new devs who can't use basic 
 conditional statements and operators */

 //This is the most common way that this can be solved
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

//The shortest way that I am to find/create this challenge using ternary operators

/* I considered removing the 'let' signal but this was not advised in the forum I read due to it removing compatibility in a strict environment */
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)