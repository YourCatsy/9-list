'use strict';

document.getElementById('add-to-list-button').addEventListener('click', onAddToListClick);

function onAddToListClick(event) {
    event.preventDefault();

    let titleInput = document.getElementById('list-element-title');
    let elementTitle = titleInput.value.trim();
    if (elementTitle.length !== 0) {
        let li = document.createElement('li');
        li.innerText = elementTitle;

        let toDoList = document.getElementById('list');
        toDoList.appendChild(li);

        titleInput.value = '';
    }
}