//chiamo getRandomNumbers e genero 5 numeri causali in un array
const numeriCasuali = getRandomNumbers(5, 1, 100);

//stampo l'array in pagina 
document.getElementById("msg").innerHTML = numeriCasuali.join(", ");

//dopo 30s, faccio scompare i numeri scompaiono dal DOM
setTimeout(function() {
    document.getElementById("msg").innerHTML = "";
}, 2000);

//dopo 30s, chiedo i numeri all'utente
setTimeout(function() {
    let numeriUtente = getUserNumbers();
    let numeriIndovinati = getOkNumbers(numeriCasuali, numeriUtente);
    alert("Hai indovinato " + numeriIndovinati.length + " numeri");
    alert("I numeri che hai indovinato sono: " + numeriIndovinati.join(", ") );
}, 2100);

//l'utente deve inserire da prompt (5) i numeri visti prima
function getUserNumbers() {
    //chiedo il prompt all'utente per cinque volte
    //ad ogni prompt pusho il dato nell'array
    let risultato = [];
    while(risultato.length<5) {
        let nuovoNumero = parseInt(prompt("Inserisci un numero"));
        if(!risultato.includes(nuovoNumero)) {
            risultato.push(nuovoNumero);
        } else {
            alert("Non puoi inserire doppioni");
        }
    }
    return risultato;
}

//controllo e restituiamo quali e quanti numeri sono stati indovinati
function getOkNumbers(arrayOriginale, arrayDaConfrontare){

    //array di appoggio con i risultati
    let risultato = [];

    //per ogni elemento dell'array originale, controllo che ci sia corrispondenza nell'altro array
    for (let i = 0; i < arrayOriginale.length; i++) {
        if( arrayDaConfrontare.includes(arrayOriginale[i])) {
            risultato.push(arrayOriginale[i]);
        }
    }
    return risultato;
}

//funzione che resituisce un array contenente N numeri casuali tutti diversi
//accetta tre parametri: quanti numeri generare e il range min-max
function getRandomNumbers(quanti, min, max) {
    let risultato = [];

    while(risultato.length < quanti) {
        const nuovoNumero = getRndInteger(min, max);
        //controllo che non sia in array
        if(!risultato.includes(nuovoNumero)) {
            //nel caso lo pusho
            risultato.push( nuovoNumero );
        }
    }

    return risultato;
}

//funzione che restituisce un intero casuale compreso nel range min/max (inclusi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}