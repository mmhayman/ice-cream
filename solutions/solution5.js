const iceCreamFlavors = window.iceCreamFlavors;
// DOM manipulation solution
// create a list item for each iceCreamFlavor using a for loop
// and append it to the list

var emptyList, iceCreamList, iceCreamListItem, i, len;

emptyList = document.getElementsByClassName('ice-cream-list')[0];
iceCreamList = document.createElement('ul');

for (i = 0, len = iceCreamFlavors.length; i < len; i++) {
    listItem = document.createElement('li');
    listItem.textContent = iceCreamFlavors[i];
    listItem.classList.add('ice-cream-flavor');

    iceCreamList.appendChild(listItem);
}

// Only modifies DOM once time to limit number of browser redraws
document.body.replaceChild(iceCreamList, emptyList)
