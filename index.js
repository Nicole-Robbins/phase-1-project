document.addEventListener('DOMContentLoaded', () => {//event listener #1: DOMContentLoaded

const newTask = document.querySelector("#chores");
let taskItem = document.createElement('li');


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
            if (oneTask.time < 5){
                quickTicks.innerHTML += `
                <li> ${newTask.value}
                    <button> X </button>
                </li>`; 
            } else if (oneTask.time <= 15){
                mediumTasks.appendChild(taskItem);
                taskItem.innerText = `${newTask.value}`;
            } else {
                projects.appendChild(taskItem);
                taskItem.innerText = `${newTask.value}`;
            }
        }
    })
}
    
//event listener #3: delete a task 'click'
// will remove a task from the field but not the dropdown list
})
