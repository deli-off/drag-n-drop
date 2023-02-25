// const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// fill.addEventListener('dragstart', dragStart)
// fill.addEventListener('dragend', dragEnd)

let todos = [
    {
        id: '1sdffdfwe2543241',
        title: 'buy milk',
        description: 'description will be here',
        completed: 'todo'
    },
    {
        id: '1sadasd2543241',
        title: 'chek h w',
        description: 'description will be here',
        completed: 'todo'
    },
    {
        id: '1sdasdasd241',
        title: 'todo h/t',
        description: 'description will be here',
        completed: 'todo'
    }
]

let temp = []
let form = document.forms.task
let openMOdal = document.querySelector('.open-btn')
let closeMOdal = document.querySelector('.close-btn')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal__bg')



form.onsubmit = (event) => {
    event.preventDefault();

    let todo = {
        id: Math.random(),
        title: 'buy milk',
        description: 'description will be here',
        completed: 'todo'
    }

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        todo[key] = value;
    });


    todos.push(todo)
    createTodo(todos)
    drag()
    dragn()

    console.log(dashboard);;
};

function createTodo(arr) {
    empties.forEach(empty => {
        empty.innerHTML = ''
    })

    for (let todo of arr) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let p = document.createElement('p')

        div.setAttribute('id', todo.id)
        div.setAttribute('class', 'fill')
        div.setAttribute('draggable', true)

        b.innerHTML = todo.title
        p.innerHTML = todo.description

        div.append(b, p)

        todo.completed.toLowerCase().trim()

        if (todo.completed === 'todo') {
            empties[0].append(div)
        } else if (todo.completed === 'inprogres') {
            empties[1].append(div)
        } else if (todo.completed === 'done') {
            empties[2].append(div)
        }

        temp.push(div)
    }
}

createTodo(todos)

openMOdal.onclick = () => {
    modal.style.display = 'block'
    modalBg.style.display = 'block'
}

closeMOdal.onclick = () => {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
}

function dragn() {
    temp.forEach((item, index) => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragend', dragEnd)
    })
}

dragn()

function drag() {
    for (empty of empties) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
    }
}

drag()

let temp_id

function dragStart() {
    console.log('dragStart');
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    console.log('dragEnd');
    this.className = 'fill'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    console.log('');
    event.preventDefault()
    this.className += ' hovered'
}


function dragLeave() {
    console.log('dragLeave');
    this.className = 'empty'
    console.log(this);
}

function dragDrop(params) {
    console.log('dragDrop');
    this.className = 'empty'
    temp.forEach((item, index) => {
        if (item.id === temp_id) {
            this.append(item)
        }
    })
}
