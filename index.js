document.addEventListener('DOMContentLoaded', () => {
//event listener #1: dom content loaded
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const newTask = document.querySelector("#lang");
    taskFilter(newTask.value);
})
const quickTicks = document.querySelector('#shorttasks');
const mediumTasks = document.querySelector('#mediumtasks');
const projects = document.querySelector('#longtasks');

function taskFilter(nt){
    let taskItem = document.createElement('li');
    taskItem.innerText = nt;
    quickTicks.appendChild(taskItem);
}
    
//event listener #2: choosing a task enter button 'submit'
// will add a task to the appropriate category using if then and iteration to look at each category

//event listener #3: delete a task 'click'
// will remove a task from the field but not the dropdown list
})

//still need an iteration and a fetch json