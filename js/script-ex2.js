console.log('js ok')

//FUNZIONI

//funzione che genera numeri random (con il numero più alto compreso)
function getRandomNumber(min, max, isMaxIncluded = true){
    if (min >= max){
        return;
    }

    if (isMaxIncluded) max++;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

//funzione che decreta se un numero è pari
function isEven(number){
    if(isNaN(number) || number % 2){
        return false;
    }
    else{
        return true;
    }
}

//recuperare gli elementi dal DOM
const inputChoice = document.getElementById('choice').value;
const inputNumber = document.getElementById('number').value;
const cpuNumber = document.getElementById('cpu-number');
const sum = document.getElementById('sum');
const result = document.getElementById('result');
const playButton = document.getElementById('play');

console.log(typeof inputChoice);
console.log(typeof inputNumber);
console.log(typeof inputChoice);


//mettere in ascolto il bottone
playButton.addEventListener('click', function(){
    
    //individuare le scelte dell'utente
    const userNumber = parseInt(inputNumber);
    let userChoice = inputChoice;

    //costante per il numero random
    const cpuRandomNumber = getRandomNumber(1, 5, true);
    console.log(cpuRandomNumber)

    //costante per la somma
    const sumResult = inputNumber + cpuRandomNumber;
    
    //preparo gli elementi per l'HTML
    let resultText = 'HAI PERSO!'
    
    if(userChoice === 'even' && isEven(sumResult) || (userChoice === 'odd' && !isEven(sumResult))){
        resultText = 'HAI VINTO!!!'
    }
    
    //stampare in pagina
    result.innerText = resultText;
    cpuNumber.innerText = cpuRandomNumber;
    sum.innerText = sumResult;
})
