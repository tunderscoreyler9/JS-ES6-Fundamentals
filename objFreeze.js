// Freezing objects
const ourObject = {
    anmialOne: 'cat',
    animalTwo: 'dog',
    animalThree: 'sheep'
};

Object.freeze(ourObject);

// ourObject = {};
// returns: " Uncaught TypeError: Assignment to constant variable "!

// We change properties (values) of an object using const in JS
// Objects and arrays are mutable
ourObject.anmialOne = 'iguana';
console.log(ourObject);


// Using the freeze method:
// This freezes and object and prevents it from being mutated. (See line 8)