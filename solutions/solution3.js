const iceCreamFlavors = window.iceCreamFlavors;
// DOM manipulation solution
// create a list item for each iceCreamFlavor using a forEach loop
// and append it to the list

var list = document.getElementsByClassName('ice-cream-list')[0];

iceCreamFlavors.forEach(function (iceCreamFlavors) {
    var listItem = document.createElement('li');
    listItem.classList.add('ice-cream-flavor');
    listItem.textContent = iceCreamFlavors;
    
    list.appendChild(listItem);
});