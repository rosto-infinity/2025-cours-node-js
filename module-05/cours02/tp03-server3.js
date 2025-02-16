const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Définir un écouteur pour l'événement "data"
myEmitter.on('data', (message) => {
  console.log('Événement reçu:', message);
});

// Émettre l'événement "data" après 1 seconde
setTimeout(() => {
  myEmitter.emit('data', 'Voici un message asynchrone!');
}, 4000);
