const iceCreamFlavors = window.iceCreamFlavors;
// jQuery Solution
// get the list element
// use for each loop to create a li, set the text, and append to the list

var list = $('ul.ice-cream-list');

$.each(iceCreamFlavors, i => {
    $('<li/>').text(iceCreamFlavors[i]).addClass('ice-cream-flavor').appendTo(list);
});