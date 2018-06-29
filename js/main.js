'use strict';

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100
var randomNumber = parseInt(getRandomNumber(100));

console.log('> ', randomNumber);

// Llamamos nuestro botón "Prueba" a JS
var button = document.querySelector('.button');

// Coger el texto del input! - Paso 3
var numberFromUser = document.querySelector('.input');

var feedback = document.querySelector('.feedback');

function numberUserIntroduces() {
  console.log('Has elegido', numberFromUser.value);
  var numberToCompare = parseInt(numberFromUser.value);

  if (numberToCompare > randomNumber) {
    feedback.innerHTML = '¡Te has pasado, fiera!';
  } else if (numberToCompare < randomNumber ) {
    feedback.innerHTML = 'No llegas... dale calor';
  } else if (numberToCompare === randomNumber) {
    feedback.innerHTML = 'SIIIIII ERES UNA CRACK!';
  }

}

button.addEventListener('click', numberUserIntroduces);
