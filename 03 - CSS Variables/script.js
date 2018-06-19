const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));



/*
THIS.DATASET

- this.dataset is an object that will contain all the data attributes from that specific element
- const suffix selects the inputs with data-sizing="px" and nothing for the color
- this.name refers to the single input
*/ 