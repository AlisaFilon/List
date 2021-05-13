let addToDoButton = document.getElementById('addhomework');
let ToDoListaUl = document.getElementById('lista-ul');
let inputField = document.getElementById('inputfield');


function addToList() {
    let doing = document.createElement('li');
    doing.innerText = inputField.value;
    ToDoListaUl.appendChild(doing);
    inputField.value = "";
 }

addToDoButton.addEventListener('click', addToList);

let removeHomework = document.createElement




