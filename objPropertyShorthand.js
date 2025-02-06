// function createWardrobe() {
//     var hat = 1;
//     var shorts = 5;
//     var jumper = 8;
//     var socks = 2;

//     var myWardrobe = {
//         hat: hat,
//         shorts: shorts,
//         jumper: jumper,
//         socks: socks
//     };

//     return myWardrobe;
// };

// console.log(createWardrobe()
// );


// After object property hsorthand was introduced in ES6, everything 
//  got easier:
const createWardrobe = () => {
    let hat = 1;
    let shorts = 5;
    let jumper = 8;
    let socks = 2;

    let myWardrobe = {
        hat,
        shorts,
        jumper,
        socks
    };

    return myWardrobe;
};

console.log(createWardrobe()
);