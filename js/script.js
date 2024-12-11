//Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//BONUS:
//Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
//Consigli del giorno:
//Pensate prima in italiano.
//Dividete in piccoli problemi la consegna.
//Individuate gli elementi di cui avete bisogno per realizzare il programma.
//Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array


//ID'S//
const displayCount = document.getElementById("timer");
const displayIntruction = document.getElementById("instructions")
const displayNumbers = document.getElementById("numbers")
const inputContainerNumb = document.getElementById("inputs-container")
const inputNumb = document.getElementById("inputs")
const submitBtn = document.getElementById("submit-button")
const showResult = document.getElementById("result")

let randomNumbers = [];
let timer = 2;

//CREO UN GENERATORE DI NUMERO RANDOMICO//
function generateRandomNumbers() {
    randomNumbers = [];
    displayNumbers.innerHTML = ""; 
  
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      randomNumbers.push(randomNum);
  
      displayNumbers.textContent = randomNumbers.join(" ");
    }
  }

//CREO UNA FUNZIONE PER IL COUNTDOWN//
function startCountdown() {
    const countdown = setInterval(() => {
      timer--;
      displayCount.textContent = timer;
  
      if (timer === 0) {
        clearInterval(countdown);
        displayIntruction.textContent =
          "Inserisci tutti i numeri che ricordi (l'ordine non è importante):";
        displayNumbers.textContent = ""; 
        showInputs();
      }
    }, 1000);
  }
  
  //CREO UNA FUNZIONE PER FAR COMPARIRE GLI INPUT PER I NUMERI DATI//
function showInputs() {
    inputContainerNumb.style.display = "block";
    inputNumb.innerHTML = ""; 
  
    for (let i = 0; i < 5; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.classList.add("number-input");
      inputNumb.appendChild(input);
    }
  }
  //AVVIO IL GIOCO AL CARICAMENTO//
document.addEventListener("DOMContentLoaded", () => {
    generateRandomNumbers();
    startCountdown();})
  
  
//AGGIUNGO UN CONTROLLO SUI NUMERI//
function checkNumbers() {
    const userNumbers = Array.from(inputNumb.querySelectorAll("input"))
      .map((input) => parseInt(input.value, 10))
      .filter((value) => !isNaN(value));
    const guessedNumbers = randomNumbers.filter((num) =>
      userNumbers.includes(num)
    );
    showResult.textContent = `Hai indovinato ${guessedNumbers.length} numeri! (${guessedNumbers.join(" ")})`;
  }
  submitBtn.addEventListener("click", checkNumbers);
  
  
  
  


     
    





