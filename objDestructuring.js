const ourObject = {
    one: 1,
    two: 2
};
 
const { one, two } = ourObject;

console.log(one, two);


const cat = {
    name: 'Molly',
    owner: 'Fred Larkin',
    color: 'Brown',
    age: 3,
    kittens: 0
};

const catOwner = { owner } = cat;