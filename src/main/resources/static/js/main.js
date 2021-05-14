let addToDoButton = document.getElementById('addhomework');
let ToDoListaUl = document.getElementById('lista-ul');
let inputField = document.getElementById('inputfield');


function addToList() {

    let doing = document.createElement('li');
    doing.innerText = inputField.value;
    ToDoListaUl.appendChild(doing);
    inputField.value = "";
 }

 function loadRequest(){
    fetch("/homeworks")
        .then(response => response.json())
        .then(addToList)
 }
 document.addEventListener("DOMContentLoaded", loadRequest);
addToDoButton.addEventListener('click', addToList);





