// DOM manipulation solution
// create a list item for each iceCreamFlavor using a for loop
// and append it to the list

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const createIceCreamElement = flavorName => {
  return sleep(0).then(() => {
    listItem = document.createElement('li');
    listItem.textContent = flavorName;
    listItem.classList.add('ice-cream-flavor');

    return listItem;
  })
}

var fragment = document.createDocumentFragment();
var iceCreamList = document.getElementsByClassName('ice-cream-list')[0];

Promise.all(window.iceCreamFlavors.map(async flavorName => {
  const flavorEl = await createIceCreamElement(flavorName);
  fragment.appendChild(flavorEl);
})).then(() => { iceCreamList.appendChild(fragment) });