// include map and reduce along with the differences between two


// 'map' can be called on an array and will then be passed a function for what to do to each element

const numbersSquared = num => num**2;
const myNumArray = [1,2,3,4,5,6,7,8,9,10];

console.log(myNumArray.map(numbersSquared));
// Expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//This works are array with words too
const noisyArray = word => word.toUpperCase() + '!';
const myWordArray = ['Cat', 'I\'ma', 'Kitty', 'Cat', 'And', 'I', 'Meow', 'Meow', 'Meow', 'And', 'I', 'Meow', 'Meow', 'Meow'];

console.log(myWordArray.map(noisyArray));
// Expected output: ["CAT!", "I'MA!", "KITTY!", "CAT!", "AND!", "I!", "MEOW!", "MEOW!", "MEOW!", "AND!", "I!", "MEOW!", "MEOW!", "MEOW!"]

