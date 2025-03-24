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
