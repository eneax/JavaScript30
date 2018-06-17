function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  
  if (!audio) return; // stop function from running if there is no audio for the pressed key
  audio.currentTime = 0; // rewind to the start --> play the audio repeatedly without waiting for it to finish
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // we want only the event with propertyName === transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);