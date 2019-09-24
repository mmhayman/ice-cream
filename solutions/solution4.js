const iceCreamFlavors = window.iceCreamFlavors;
// DOM manipulation solution
// create a list item for each iceCreamFlavor using a for loop
// set the innerHTML in the list as a string

var list = document.getElementsByClassName('ice-cream-list')[0];

for (var i = 0; i < iceCreamFlavors.length; i++) {
    var listItem = iceCreamFlavors[i];
    list.innerHTML += "<li class=ice-cream-flavor>" + listItem + "</li>";
};