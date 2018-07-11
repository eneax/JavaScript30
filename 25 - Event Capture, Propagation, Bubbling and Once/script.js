const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling this event up
}

divs.forEach((div) => div.addEventListener('click', logText, {
  capture: false, // capture runs the function on the way down, rather than up (bubble-up effect)
  once: true // it will listen for a click and then unbind itself --> it's like div.removeEventListener
}));

// you can click the button only once
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
