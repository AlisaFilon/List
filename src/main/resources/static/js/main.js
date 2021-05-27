const homeworksSection = document.querySelector("#homework-section");

function showHomeworks(homeworks) {
    homeworksSection.innerHTML = "";
    for (let [id, homework] of Object.entries(homeworks)){
        const htmlElement = document.createElement("div");
        htmlElement.innerHTML = `<div class="tarea">
            <div class="close-button"
                onclick="fetch(\`/homeworks/${id}\`, {method: 'DELETE'}).then(reloadHomeworks)"></div>
                 <p class="toDo">${homework.task}</p>
            </div>`;
        homeworksSection.appendChild(htmlElement)
    }
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

381







