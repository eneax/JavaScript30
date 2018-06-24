const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');   // all the drawing is done on the ctx

// make canvas as big as window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // starting color
ctx.lineJoin = 'round';      // in order to connect the lines
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'lighter';

let isDrawing = false;      // it draws only when cursor is down
let lastX = 0;              // where you start the line drawing
let lastY = 0;              // where you end the line drawing
let hue = 0;                // 0 = red
let direction = true;

function draw(e) {
  if (!isDrawing) return;   // stop the function from running where there are no mouse down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;   // 100% saturation and 50% lightness
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);   // offsetX and offsetY values are coming from the event
  ctx.stroke();                       // makes the drawing

  lastX = e.offsetX;
  lastY = e.offsetY;
  
  hue++;                              // increment hue each time we draw
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// as soon as mouse is down, before the mousemove, we are updating lastX and lastY 
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);