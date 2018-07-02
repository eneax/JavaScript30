const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px --> how far the shadow should stretch

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  // we e.target to be part of the window and not be considered separately
  if (this !== e.target) {    // 'this' --> div with class=hero (the thing that you listened on), 'e.target' --> target is the thing that the event is triggered on
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2)); // the walk can stretch from +50 to -50
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
    
}

hero.addEventListener('mousemove', shadow);