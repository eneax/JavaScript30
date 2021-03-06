
// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100

let name = 'enea';
let name2 = 'enea';
console.log(name, name2); // enea, enea
name = 'eneaxharja';
console.log(name, name2); // eneaxharja, enea

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team); // ['Wes', 'Sarah', 'Ryan', 'Poppy'] for both

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players, team); // ['Wes', 'Sarah', 'Ryan', 'Lux'] for both --> if you update an array, it will always reference back

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.age = 99; // the age of person will update to 99, just like the age of captain

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { age: 99 }); // {} creates new obj, using 'person' as reference and updates { age } to 99

// We will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
twitter: '@wesbos',
facebook: 'wesbos.developer'
  }
}
console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
console.log(dev);

dev.name = 'Wesley';
console.log('wes', wes); // {name: "Wes", age: 100, social: {…}}
console.log('dev', dev); // {name: "Wesley", age: 100, social: {…}}

dev.social.twitter = '@coolman';
console.log('wes', wes.social.twitter); // @coolman
console.log('dev', dev.social.twitter); // @coolman
console.clear();

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@coolman';
console.log('wes', wes.social.twitter); // @wesbos
console.log('dev2', dev2.social.twitter);   // @coolman