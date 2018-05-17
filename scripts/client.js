$(document).ready(onReady);

class Item{
    constructor(color, name, size){
        this.color = color;
        this.name = name;
        this.size = size;
    }
}

let items =[];

function onReady() {
    // handle a click event on addItemButton
    // target the button by ID
    $('#addItemButton').on('click', addItem);
    $(document).on('click', 'li', liClick);
    showItems();
} // end onReady

function addItem() {
    console.log('in addItem');
    // get user input
    // create a new item
    // log out
    // push into array
    items.push(new Item($('#colorIn').val(), $('#nameIn').val(), $('#sizeIn').val()));
    showItems();
} // end addItem

function liClick(){
    console.log('in liClick', $(this).text());
    
}

function showItems() {
    // target output list by id
    let el = $('#itemsOut');
    // empty out current list
    el.empty();
    // loop through items
    for(item of items){
        // display each on DOM
        el.append('<li>' + item.size + ' ' + item.color + ' ' + item.name + '</li>');
    }
    
}