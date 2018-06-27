// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions
function togglePlay() {
  // if (video.pause) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚❚';  // 'this' refers to the video
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip) --> -10 and 25
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  // console.log(this.name);    --> volume or playbackRate
  // console.log(this.value);   --> volume (0 to 1), playbackRate (0.5 to 2)
}

function handleProgress() {
  const percent = (video.currentTime / vide.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));
progressBar.addEventListener('change', handleProgress);