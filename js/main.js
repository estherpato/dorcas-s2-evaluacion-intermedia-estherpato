'use strict';

// VARIABLES
var randomNumber;
var numberToCompare;
var counter = 0;
var button = document.querySelector('.button');
var numberFromUser = document.querySelector('.input');
var feedback = document.querySelector('.feedback');
var counterDiv = document.querySelector('.counterDiv');

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100
randomNumber = parseInt(getRandomNumber(100));
console.log('> ', randomNumber);


// Función que va a comparar el número random con el número del usuario, y le devolverá feedback + contador
function play() {
  console.log('Has elegido', numberFromUser.value);

  numberToCompare = parseInt(numberFromUser.value);
  if (numberToCompare > randomNumber) {
    feedback.innerHTML = '¡Te has pasado, fiera!';
  } else if (numberToCompare < randomNumber ) {
    feedback.innerHTML = 'No llegas... dale calor';
  } else if (numberToCompare === randomNumber) {
    feedback.innerHTML = 'SIIIIII ERES UNA CRACK!';
  } else if (numberToCompare > 100) {
    feedback.innerHTML = 'Introduce un número menor que 100';
  } else if (numberToCompare < 1) {
    feedback.innerHTML = 'Introduce un número mayor que 1';
  } else {
    feedback.innerHTML = 'Introduce un número entre 1 y 100';
  }
  //Contador
  counter = counter + 1;
  counterDiv.innerHTML = counter;
}

button.addEventListener('click', play);
