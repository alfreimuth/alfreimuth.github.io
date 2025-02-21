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

localStorage.setItem("It's a secret to everybody.", 'This message is low-key')
