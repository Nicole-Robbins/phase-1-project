document.addEventListener('DOMContentLoaded', () => {//event listener #1: DOMContentLoaded

const newTask = document.querySelector("#chores");
const categories = document.querySelector('#categories');
const quickTicks = document.querySelector('#shorttasks');
const mediumTasks = document.querySelector('#mediumtasks');
const projects = document.querySelector('#longtasks');

document.querySelector('form').addEventListener('submit', (e) =>{//event listener #2: submit
    e.preventDefault();

    fetch('http://localhost:3000/to-dos')//using json server
    .then((res) => res.json())
    .then((data) => filterData(data)) 
})

function filterData(data){
    data.find(function (oneTask){//iteration using find
        if (oneTask.action === newTask.value){
            if (oneTask.time <= 5){
                quickTicks.innerHTML += `
                <li> ${newTask.value}, ${oneTask.time} minutes
                    <button data-action="delete"> X </button>
                </li>`; 
            } else if (oneTask.time <= 15){
                mediumTasks.innerHTML += `
                <li> ${newTask.value}, ${oneTask.time} minutes
                    <button data-action="delete"> X </button>
                </li>`;
            } else {
                projects.innerHTML += `
                <li> ${newTask.value}, ${oneTask.time} minutes
                    <button data-action="delete"> X </button>
                </li>`;//sourced this code from Evans Wang's lecture
            }
        }
    })
}

categories.addEventListener('click', (e) => {//event listener #3: click
    if (e.target.dataset.action === 'delete'){
        e.target.parentElement.remove();
    }

})
})
