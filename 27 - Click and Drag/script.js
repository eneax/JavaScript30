const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; // we want to make sure that we get the coords from onside the box and not from the whole page
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop the function from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;  // we want to recalculate where we are when we move the mouse
  const walk = (x - startX) * 3; // it tells us how far we deviated from that initial point --> for every pixel moved we are gonna scroll the slider 3px
  slider.scrollLeft = scrollLeft - walk;
});