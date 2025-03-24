// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
let word = prompt('Inserisci una parola');

// Funzione per capire se la parola inserita è palindroma

function isPalindrome(string) {
    let lowerCaseWord = string.toLowerCase();
    let reverseWord = lowerCaseWord.split('').reverse().join('');
    if (lowerCaseWord === reverseWord) {
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è palindroma');
    }
}

isPalindrome(word);

// FINE ESERCIZIO 1

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).  
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
let userChoice = prompt('Scegli pari o dispari').toLowerCase();
console.log('Hai scelto: ' + userChoice);
// L'utente inserisce un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Hai scelto: ' + userNumber);

// Funzione per generare un numero random da 1 a 5
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = getRandomNumber(1, 5);
console.log('Il computer ha scelto: ' + computerNumber);

// Funzione per sommare i due numeri e stabilire se somma e' pari o dispari
function isSumEven(number1, number2) {
    let sum = number1 + number2;
    let isEven= false;
    if (sum % 2 == 0) {
        isEven = true;
    }
    return isEven;
}

if ((isSumEven(userNumber, computerNumber) && userChoice === 'pari') || (!isSumEven(userNumber, computerNumber) && userChoice === 'dispari')) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}
