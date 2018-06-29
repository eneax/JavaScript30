// runs a function once every 20 milliseconds --> optimize performance for addEventListener('scroll')
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

// runs every time a person scrolls
function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.screenY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));












/*
(window.scrollY + window.innerHeight)
tells you the pixel level of where you currently are at the bottom of the page

(sliderImage.height / 2)
when you are in the middle of the image

(offsetTop)
how far the top of the image is from the top of the window

const isNotScrolledPast = window.screenY < imageBottom;
makes sure we didn't scroll past the image
*/ 