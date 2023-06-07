console.log('js ok')

//recuperare gli elementi dal DOM
const inputChoice = document.getElementById('choice').value;
const inputNumber = document.getElementById('number').value;
const cpuNumber = document.getElementById('cpu-number');
const sum = document.getElementById('sum');
const result = document.getElementById('result');
const button = document.getElementById('play');

console.log(typeof inputChoice);
console.log(typeof inputNumber);
console.log(typeof inputChoice);

//individuare le scelte dell'utente
const userNumber = parseInt(inputNumber);
let userChoice = inputChoice;

//creare una funzione che genera numeri random (con il numero più alto compreso)
function getRandomNumber(min, max, isMaxIncluded = true){
    if (min >= max){
        return;
    }

    if (isMaxIncluded) max++;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}
