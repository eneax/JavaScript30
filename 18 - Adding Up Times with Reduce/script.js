const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // converts NodeList into an Array

const seconds = timeNodes
  .map((node) => node.dataset.time) // we get the time --> 4:04
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat); // .map(parseFloat) will convert immediately the array of strings into an array of numbers
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds); // we finally get the total number of seconds for every video

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(...timeNodes);
console.log(hours, mins, secondsLeft);