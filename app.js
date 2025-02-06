// const drinks = ['cola', 'tea', 'water', 'soda'];

// classic for loop
// for (let i = 0; i < drinks.length; i++) {
//     console.log(drinks[i]);
// };

// for...of
// for (const drink of drinks) {
//     console.log(drink);
// }

const drinksObject = {
    soda: ['pepsi', 'coca-cola', 'cola'],
    tea: ['earl grey', 'english breakfast'],
    other: 'water'
};

for (const drink in drinksObject) {
    // console.log({ [drink]: [drinksObject[drink]]}); // Computed property syntax
    console.log(`${drink}: ${drinksObject[drink]}`); //Template literals
}