var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    var numberOfListElements = document.getElementsByTagName("li").length;
    element.innerHTML = 'item ' + numberOfListElements;

    list.appendChild(element);
});