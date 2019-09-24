const iceCreamFlavors = window.iceCreamFlavors;
// DOM manipulation solution
// create a list item for each iceCreamFlavor using a for loop
// and append it to the list

var list = document.getElementsByClassName('ice-cream-list')[0];

for (var i = 0; i < iceCreamFlavors.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = iceCreamFlavors[i];
    listItem.classList.add('ice-cream-flavor');

    list.appendChild(listItem);
}