//You are given a random array of numbers and you must loop through the array to 'sort' the contents

/*
Algorithm:
(1) Loop through the whole array starting from index 1
(2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
(3) Once the end of the array is reached, start looping again from the beginning
(3) Once no more elements can be swapped, the sorting is complete
*/


//Function to swap characters and supplement secondary loop
const swap = (nums, i1, i2) => {
    let temp = nums[i1]; //save the value since we will be reassigning
    nums[i1] = nums[i2];
    nums[i2] = temp;
}
//Main function that takes in an array and bubble sorts using swap and a single loop
const bubbleSort = (array) => {
    let completed = true //Variable that we can use to determine if our loop is still iterating
    while(completed){
        completed = false; //will remain false if the 'if' conditional is not met
        for (i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) { //this checks if the list is sorted or not
                swap(array, i-1, i); //We use our swap function to have our elements trade indices
                completed = true; //resets our value since we know that the array was unsorted
            }
        }
    }
};

console.log(bubbleSort([3,7,2,76,3,135,45,64,12]));