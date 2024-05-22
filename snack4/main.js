'use strict';

//Crea un array di oggetti che rappresentano delle persone

const identityPeople = [
    {
        nome: 'Eugenio',
        cognome: 'Scognamiglio',
        età: '20',
    },
    {
        nome: 'Mario',
        cognome: 'Giordano',
        età: '27',
    },
    {
        nome: 'Gaetano',
        cognome: 'Pucci',
        età: '15',
    },
    {
        nome: 'Marco',
        cognome: 'Soldo',
        età: '17',
    },
    {
        nome: 'Giuseppe',
        cognome: 'Ancelotti',
        età: '55',
    },
    {
        nome: 'Francesco',
        cognome: 'Guida',
        età: '37',
    },

]

//console.log(identityPeople);


//Creo un nuovo array che conterrà le nuove info
//const importantInfo = [];

//Inizio del ciclo 
for (let i = 0; i < identityPeople.length; i++) {
    const licensedPerson = identityPeople[i];

//Istruzione condizionale che inserirà all'interno del nuovo array le informazioni aggiornate
    if (licensedPerson.età >= '18') {
        licensedPerson.info = `${licensedPerson.nome} ${licensedPerson.cognome} Patentato`;
    } else {
        licensedPerson.info = `${licensedPerson.nome} ${licensedPerson.cognome} Non patentato`;
    }
}

/* console.log(patented);
console.log(notPatented); */
console.log(identityPeople);

//PUSHO IL LAVORO, MA VORREI MODIFICARLO
//L'INTENZIONE E' QUELLA DI CREARE UN NUOVO ARRAY LASCIANDO INVARIATO QUELLO ORIGINALE, INVECE IN QUESTO CASO ANCHE L'ORIGINALE SUBISCE MODIFICA.