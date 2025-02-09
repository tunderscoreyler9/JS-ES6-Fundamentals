const days = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

// Prior to ES6
// const first = days[0];
// const second = days[1];
// const third = days[2];

// Instead, use Array Destructuring:
const [first, second, third] = days;

// Skipping values
const [, tuesday] = days;

// Using the rest operator:
const otherDays = [,,, ...others] = days; // Returns '['Thursday', 'Friday', 'Saturday', 'Sunday']'

console.log(first, second, third);