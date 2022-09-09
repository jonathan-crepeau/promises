// console.log('Fear is the mind killer.');

// SECTION - The issue: Asynchronous events occur after synchronous events (example below):

// const users = [];

// console.log('Users array starting value \n', users);
// console.log('===================')

// setTimeout(() => {
//     console.log('Adding new user');
//     users.push({id: 1, name: 'John Doe'});
//     console.log('===================');
//     console.log('Users after push \n', users);
//     console.log('===================')
// }, 2000);

// console.log('Users last check \n', users);
// console.log('===================')


// SECTION - One way to solve this issue is to use a callback fuction to control the execution order of our code:

// const users = [];
// console.log("Users starting value \n", users);

// const addUser = (user, callback) => {
//     setTimeout(() => {
//         console.log('Adding new user');
//         users.push(user);
//         console.log("Users after push \n", users)
//         callback();
//     }, 2000);
// }

// addUser({id: 1, name: 'John Doe'}, () => {
//     console.log("Users last check \n", users);
// });


// SECTION - Create our own equivalent "array.forEach". Synchronous example:

// const characters = ["Korra", "Asami", "Bolin", "Mako"];

// const forEach = (arr, cb) => {
//     for (let counter = 0; counter < arr.length; counter++) {
//         const element = arr[counter];
//         cb(element);
//     }
// }

// forEach(characters, (x) => {
//     console.log(x.split("").reverse());
// })


// SECTION - Asynchronous example, call Pokemon API:

// const loadPokemon = (id, cb) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(res => res.json())
//     .then(data => {
//         cb(data)
//     })
// }

// loadPokemon(77, (pokemon) => {
//     console.log(pokemon);
// });


// SECTION - Callback example:

// const numbers = [8, 2, 9, 3, 7];
// const lessThanFive = (number) => number < 5;
// const lesserThanFive = numbers.filter(lessThanFive);
// console.log(lesserThanFive);

const addOne = (num) => num + 1;
console.log(addOne(1));
console.log(addOne(2));



// const isNumberType = (input) => {
//     return typeof input == 'number';
// }
// console.log(isNumberType(7));
// console.log(isNumberType('Jonathan'));
// console.log(isNumberType(23));


// SECTION - Callback example:

// const functionThatAcceptsCallback = (func) => {
//     return func(4, 18, 3);
// }

// const callbackFunc = (arg1, arg2, arg3) => {
//     return Math.floor((arg1 + arg2) / arg3);
// }

// console.log(functionThatAcceptsCallback(callbackFunc));

