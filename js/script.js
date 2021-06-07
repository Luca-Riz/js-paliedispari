// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

//
var risultato = pali(prompt('inserisci una parola').toLowerCase()); //trasformata tutta in minuscolo
document.getElementById('risultatoPali').innerHTML = risultato;

// * funzione calcolo parola palindroma
function pali(input){
    var inputRovescio = '';
    for(var i=input.length-1; i>=0; i--){
        inputRovescio += input[i];
    }    
    if (input == inputRovescio){
        return 'Parola palindroma';
    } else {
        return 'Parola non palindroma';  
    }
}
// * fine funzione calcolo parola palindroma


// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// scegli 'pari' o 'dispari' digitandolo, assegno a var

var pariDisUser = prompt('scegli "pari" o "dipari"');  
document.getElementById('pariDisUser').innerHTML += pariDisUser;

//digita numero da 1 a 5, lo assegno a var

var numUser = parseInt(prompt('digita un numero da 1 a 5')); 
document.getElementById('numUser').innerHTML += numUser;

//genero numero random da 1 a 5, per computer (function)

function random5(){
    return Math.floor(Math.random() * 5) +1;
} 

var numPc = random5(); //assegno a var numPc il numero random della funzione
document.getElementById('numPc').innerHTML += numPc;

//sommo i due numeri

var somma = numUser + numPc;
console.log(somma);

//stabilisco se la somma è pari o dispari (function)

function pariDis(x){
    if (x % 2 == 0){
        return 'pari'
    } else {
        return 'dispari'
    }
}

//dichiaro chi ha vinto

if (pariDis(somma) == pariDisUser){
    document.getElementById('risultatoNumeri').innerHTML = 'Hai vinto';
} else {
    document.getElementById('risultatoNumeri').innerHTML = 'Hai perso';
}
