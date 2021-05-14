const homeworksSection = document.querySelector("#homework-section");

function showHomeworks(text) {
    text.forEach(Lista => {
        const element = `<div class="tarea">
            <p class="toDo">${Lista.homework}</p>
        </div>`;
        homeworksSection.insertAdjacentHTML("beforeend", element)
    })
 }

const toDoInput = document.getElementById("homework");

const submitButton = document.getElementById("homework-submit");

const validateHomework = (event) => {
    const homework = event.target.value;
    if (homework.length < 3) {
        toDoInput.style.border = "2px solid red";
        submitButton.disabled = true;
    } else {
        toDoInput.style.border = "";
        submitButton.disabled = false;
    }
}

 function loadRequest(){
    fetch("/homeworks")
        .then(response => response.json())
        .then(showHomeworks)
 };

document.addEventListener("DOMContentLoaded", loadRequest);








