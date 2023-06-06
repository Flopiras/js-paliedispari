console.log('js ok')

//1. Prendere l'elemento dal DOM
const wordInput = document.getElementById('word');
const button = document.getElementById('palindrome-button');
const answer = document.getElementById('palindrome-answer');

//2. Mettere in ascolto il bottone
button.addEventListener('click', function(){
    
    // Individuare la parola inserita dall'utente
    const userWord = wordInput.value.trim();
     console.log(userWord);

    //Ricomporre la parola partendo dall'ultima lettera fino alla prima
    let turnWord = '';
    
    for(let i = userWord.length - 1; i >= 0; i--){
        //console.log(userWord.charAt(i));

        turnWord +=(userWord.charAt(i));
    }
  
 console.log(turnWord)
 console.log(userWord);

    //Comparare la parola di partenza con quella ottenuta
    let result = compare(turnWord, userWord);
    console.log(result)

    //4. stampo in pagina
    answer.innerText = result;
})

 //Creare una funzione di comparazione
 function compare(a, b){
    let isEqual;
    //SE le parole sono uguali, stampare in pagina 'SI'
    if(a == b){
        
        isEqual = 'SI'
    }
    //ALTRIMENTI stampare in pagina 'NO'
    else{
        isEqual= 'NO'

    }
    return isEqual;
}