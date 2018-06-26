const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // Check is they had the shift key down
  // AND check that they are checking the checkbox
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Check in between')
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this; // "this" is the input that is checked
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));