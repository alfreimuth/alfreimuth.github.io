
// Dynamic Welcome
console.log('hi')

const hours = new Date().getHours()

const isMorning = hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

let greet = ''

const welcome = document.getElementById("welcome")

if(isMorning) {
    console.log('Morning')
    greet = 'Morning'
    welcome.style.color = 'yellow'; 
}
else if(isAfternoon) {
    console.log('Afternoon')
    greet = 'Afternoon'
    welcome.style.color = 'orange'; 
}
else {
    console.log('Evening')
    greet = 'Evening'
    welcome.style.color = 'lightblue'; 
}

welcome.textContent = 'Good ' + greet + '!'


// secret key
localStorage.setItem("It's a secret to everybody.", 'This message is low-key')


// Carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const changeImage = (input) => { // shorten and sweeten
    currentImage = currentImage + input
    showImages()
}

const button = document.querySelectorAll('button')

button[0].addEventListener('click', () => changeImage(-1))
button[1].addEventListener('click', () => changeImage(1))

setInterval(() => changeImage(1), 1500)


// Todo list

// Get from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Save the list
const saveList = () => localStorage.setItem('todo-list', JSON.stringify(todos))

saveList()

// Add new item 
const btnAddItem = document.getElementById("todo")
const txtAddItem = document.getElementById("new-todo")

btnAddItem.addEventListener('click', () => {
    if (!txtAddItem.value) return alert('Please enter your item to do.')
    todos.push({ text: txtAddItem.value, completed: false })
    saveList()
    renderTodos()
})

const todoList = document.getElementById("todo-list")
// Clear list items before recreating them
todoList.innerHTML = ''

// Create and add new list items to DOM
const renderTodos = () => {
            todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
})}

renderTodos()

// Reset list (Am lazy)
const btnResetList = document.getElementById("reset")
btnResetList.addEventListener('click', () => { 
    todos.forEach(todo => {
        todos.length = 0
        saveList()
        renderTodos()
    })
})


// Pokemon Api Interaction

const pokemon = document.getElementById("pokemon")

const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150 + 1) 

console.log('Pokemon')

const getRandomPokemon = (async() => {
    const data = await fetch(url)
    const json = await data.json()
    return json
})

const renderPokemon = (async() => {
    const json = await(getRandomPokemon())
    console.log(json)

    const pokename = json.species.name
    console.log(json.species.name)

    const pokeimg = json.sprites.front_default
    console.log(pokeimg)

    const img = document.createElement('img')
    img.src = pokeimg // url of the image from the 'front_default' property
    img.alt = pokename // name of the pokemon
    pokemon.append(img)
})

renderPokemon()
