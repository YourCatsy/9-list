'use strict';

document.getElementById('add-to-list-button').addEventListener('click', onAddToListClick);
const toDoList = document.getElementById('list');
const titleInput = document.getElementById('list-element-title');

function onAddToListClick(event) {
    event.preventDefault();

    let elementTitle = titleInput.value.trim();
    if (elementTitle.length !== 0) {
        let li = document.createElement('li');
        li.innerText = elementTitle;
        toDoList.appendChild(li);

        titleInput.value = '';
    }
}