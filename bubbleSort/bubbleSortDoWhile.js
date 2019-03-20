/*
You are given a random array of numbers and you must loop through the array to 'sort' the contents.
Algorithm:
(1) Loop through the whole array starting from index 1
(2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
(3) Once the end of the array is reached, start looping again from the beginning
(3) Once no more elements can be swapped, the sorting is complete
*/

const bubbleSort = (array) => {
    do {
        let swapped = false;
        array.forEach((num, i) => {
            if (num > array[i + 1]){   //checks if the array is currently sorted
                let temp = num;     //used as a place holder for to be swapped value
                array[i] = array[i + 1];    //swaps value for first elements
                array[i + 1] = temp;    //swaps the second using our placeholder
                swapped = true;     //tells the function to run again and check for a sorted array
            };
        });
    } while (swapped === true); //This will remain true while our condition or swapping is met once
    return array;
};