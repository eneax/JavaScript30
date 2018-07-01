const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // it will try to get items from localStorage and if there is nothing there it will fallback to an empty array 
const toggleItems = document.querySelector('.toggle-items');
const clearItems = document.querySelector('.clear-list');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;  // 'this' refers to the form which contains an input with name = item
  const item = {
    text: text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // clears the input
}

function populateList(plates = [], platesList) {      // items or plates is empty by default
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type='checkbox' data-index=${i} id='item${i}' ${plate.done ? 'checked' : ''}/>
        <label for='item${i}'>${plate.text}</label>
      </li>
    `
  }).join('');    // map will return an array, but with innerHtml we are creating one big string 
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input (we need to skip the labels
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function toggleAllDone(e) {
  e.preventDefault();
  items.filter(el => el.done = !el.done);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearList(e) {
  e.preventDefault();
  items.length = 0;
  localStorage.clear();
  populateList([], itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
toggleItems.addEventListener('click', toggleAllDone);
clearItems.addEventListener('click', clearList);

populateList(items, itemsList);