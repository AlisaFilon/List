const homeworksSection = document.querySelector("#homework-section");

function showHomeworks(text) {
    text.forEach(Lista => {
        const element = `<div class="tarea">
            <p class="toDo">${Lista.homework}</p>
        </div>`;
        homeworksSection.insertAdjacentHTML("beforeend", element)
    })
 }

 function loadRequest(){
    fetch("/homeworks")
        .then(response => response.json())
        .then(showHomeworks)
 };

document.addEventListener("DOMContentLoaded", loadRequest);






