// const greet = function(name) { return `Hello, ${name}!`};

// console.log(greet("Tyler"));

const greet = (name) => {
    return `Hello, ${name}`;
};

console.log(greet("Mr. Adams"));

// Single-line arrow function:
const generateName = (name) => name;
console.log(generateName("Andrew!"));

const age = (value) => value + 10;

console.log(age(30));