
// Dynamic Welcome
console.log('hi')

const hours = new Date().getHours()

const isMorning = hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

let greet = ''

if(isMorning) {
    console.log('Morning')
    greet = 'Morning'
}
else if(isAfternoon) {
    console.log('Afternoon')
    greet = 'Afternoon'
}
else {
    console.log('Evening')
    greet = 'Evening'
}


const welcome = document.getElementById("welcome")

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


