// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

//
var risultato = pali(prompt('inserisci una parola'));
document.getElementById('risultatoPali').innerHTML = risultato;

// * funzione calcolo parola palindroma
function pali(input){
    var lengthDiv2 = input.length/2; //calcolo la metà della lunghezza della parola
    for(var i=0; i<lengthDiv2; i++){
        if (input[i] != input[input.length-1-i]){
            return 'La parola non è palindroma';
        } else {
            return 'Parola palindroma';
        }  
    }    
}
// * fine funzione calcolo parola palindroma

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// scegli 'pari' o 'dispari' digitandolo, assegno a var

//digita numero da 1 a 5, lo assegno a var

//genero numero random da 1 a 5, per computer (function)

//sommo i due numeri

//stabilisco se la somma è pari o dispari (function)

//dichiaro chi ha vinto




