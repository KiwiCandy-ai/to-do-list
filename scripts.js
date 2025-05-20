const addtask = document.getElementById('add-task')


function addNewTask() {
    const li = document.createElement('li')
    const inputValue = document.getElementById('new-task').value
    const text = document.createTextNode(inputValue);
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList = 'checkbox'
    checkbox.addEventListener('change', removeTasks)
    const bin = document.createElement('button')
    bin.classList = 'delete'
    bin.addEventListener('click', removeTasks)
    if (inputValue === '') {
    } else {
        li.appendChild(checkbox)
    li.appendChild(text)
        li.appendChild(bin)
        document.getElementById('task-list').appendChild(li)
    }
    
document.getElementById('new-task').value = ''
}

const checkboxes = document.querySelectorAll('.checkbox')
const removetasks = document.querySelectorAll('.delete')

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', removeTasks)
})

function removeTasks(e) {
    const parentElement = this.parentElement
    parentElement.remove() 
}
removetasks.forEach((removebutton) => {
    removebutton.addEventListener('click', removeTasks)
})

addtask.addEventListener('click', function(e) {
    addNewTask()
})

