'use strict';

//Crea un array di oggetti che rappresentano degli animali.

const animalPresentation = [
{
    nome: 'leone',
    famiglia: 'felini',
    classe: 'mammiferi',
},
{
    nome: 'tigre',
    famiglia: 'felidi',
    classe: 'mammiferi',
},
{
    nome: 'giraffa',
    famiglia: 'giraffidi',
    classe: 'mammiferi',
},
{
    nome: 'granchio',
    famiglia: 'potamidi',
    classe: 'malacostraca',
},
{
    nome: 'cavallo',
    famiglia: 'equidi',
    classe: 'mammiferi',
},
{
    nome: 'piccione',
    famiglia: 'columbidi',
    classe: 'neorniti',
},
];
//console.log(animalPresentation);

//Dopo aver stampato in console l'array ho bisogno di creare un nuovo array contentente solo la classe dei mammiferi

const mammals = [];
const otherAnimals = [];

for (let i = 0; i < animalPresentation.length; i++) {
    const animalsMammals = animalPresentation[i];

    if (animalsMammals.classe === 'mammiferi') {
        mammals.push(animalsMammals);
    } else {
        otherAnimals.push(animalsMammals);
    }
}
console.log('mammiferi', mammals);
console.log('altre specie', otherAnimals);