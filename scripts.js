const addtask = document.getElementById('add-task')


function addNewTask() {
    const li = document.createElement('li')
    const inputValue = document.getElementById('new-task').value
    const text = document.createTextNode(inputValue);
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const deletetask = document.createElement('button')
    deletetask.classList = 'delete'
    li.appendChild(text)
    if (inputValue === '') {
    } else {
        document.getElementById('task-list').appendChild(checkbox)
        document.getElementById('task-list').appendChild(li)
        document.getElementById('task-list').appendChild(deletetask)
    }
document.getElementById('new-task').value = ''
}

addtask.addEventListener('click', function(e) {
    addNewTask()
})

