// DOM manipulation solution
// create a list item for each iceCreamFlavor using a for loop
// and append it to the list

function createIceCreamElement(flavorName) {
  listItem = document.createElement('li');
  listItem.textContent = flavorName;
  listItem.classList.add('ice-cream-flavor');

  return listItem;
}

function concatElement(parentEl, el) {
  parentEl.appendChild(el);
  return parentEl;
}

function appendElements(parentEl, elements) {
  parentEl.appendChild(elements);
}

appendElements(
  document.getElementsByClassName('ice-cream-list')[0],
  window.iceCreamFlavors
    .map(createIceCreamElement)
    .reduce(concatElement, document.createDocumentFragment())
)
