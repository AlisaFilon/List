const homeworksSection = document.querySelector("#homework-section");

function showHomeworks(homeworks) {
    homeworksSection.innerHTML = "";
    homeworks.forEach((lista, position) => {
        const htmlElement = document.createElement("div");
        htmlElement.innerHTML = `<div class="tarea">
            <div 
                class="close-button"
                onclick="fetch(\`/homeworks/${position}\`, {method: 'DELETE'}).then(reloadHomeworks)">Complete</div>
            <p class="toDo">${lista.task}</p>
        </div>`;
        homeworksSection.appendChild(htmlElement)
    })
 }

 let reloadHomeworks = () => {
    fetch("/homeworks")
        .then(r => r.json())
        .then(showHomeworks)
 };

document.addEventListener("DOMContentLoaded", reloadHomeworks);



const toDoInput = document.getElementById("homework");
const submitButton = document.getElementById("homework-submit");

const validateHomework = (event) => {
    const homework = event.target.value;
    if (homework.length < 3) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
toDoInput.addEventListener("input" , validateHomework);









