const addtask = document.getElementById('add-task')


function addNewTask() {
    const li = document.createElement('li')
    const inputValue = document.getElementById('new-task').value
    const text = document.createTextNode(inputValue);
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
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


const removetasks = document.querySelectorAll('.delete')

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

