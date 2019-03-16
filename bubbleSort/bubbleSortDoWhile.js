//You are given a random array of numbers and you must loop through the array to 'sort' the contents

/*
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
            if (num > array[i + 1]){
                let temp = num;
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            };
        });
    } while (swapped === true);
    return array;
};