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

function numberUserIntroduces() {
  console.log('Has elegido', numberFromUser.value);
}

button.addEventListener('click', numberUserIntroduces);
