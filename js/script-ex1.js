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

     // Scomporre la parola in singole lettere
    let userLetters = [];

    //creare un ciclo che trasformi le lettere in stringhe
    for(let i = 0; i < userWord.length ; i++){
        //console.log(userWord.charAt(i));

        //pushare le stringhe in un'array
        userLetters.push(userWord.charAt(i));
    }
 console.log(userLetters);

    //Ricomporre la parola partendo dall'ultima lettera fino alla prima
    const turnWord = [];
    
    for(let i = userWord.length - 1; i >= 0; i--){
        //console.log(userWord.charAt(i));

        turnWord.push(userWord.charAt(i));
    }
  
 console.log(turnWord)

    let result = ' ';

    //Comparare la parola di partenza con quella ottenuta
    function compare(turnWord, userLetters){

        //SE le parole sono uguali, stampare in pagina 'SI'
        if(turnWord == userLetters){
            
            result = 'SI'
        }
        //ALTRIMENTI stampare in pagina 'NO'
        else{
            result= 'NO'

        }
    }
    
    compare();
    
    //3. stampo in pagina
    answer.innerText = result;
})

