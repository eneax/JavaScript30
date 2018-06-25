const paragraph = document.querySelector('.styleParagraph');
paragraph.addEventListener('click', styleParagraph);

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function styleParagraph() {
  // const p = document.querySelector('p');
  // p.style.textDecoration = 'underline';
  // p.style.fontSize = '50px';
  paragraph.classList.toggle('stylish')
}

// Regular
console.log('hello');

// Interpolated
console.log(`Hello, my name is ${name}`);

// Styled --> style everything that follows '%c'
console.log('Hi, I am a %cgreat font', 'font-size: 20px; background: red; color: #fff');

// warning!
console.warn('Four-ooohhhh-four!');

// Error :|
console.error('Danger zone!');

// Info
console.info('Crocodiles eat 3-4 people per year!!!');

// Testing --> check if things are true and displays an error if things are false
console.assert(1 === 2, 'Wrong!!!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log('p'); // it displays the actual element p
console.dir('p'); // it displays all the methods and properties of the paragraph

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old!`);
  console.groupEnd(`${dog.name}`);
})

// counting --> how many times you run something
console.count('Enea');
console.count('Enea');
console.count('Wes');
console.count('Enea');
console.count('Enea');

// timing --> how long something takes
console.time('Fetching data from Github API');
fetch('https://api.github.com/users/eneax')
  .then(res => res.json())
  .then(data => {
    console.timeEnd('Fetching data from Github API');
    console.table(data);
  });