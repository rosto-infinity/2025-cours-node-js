
function simulateAsyncOperation(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject(`Erreur dans l'opération ${id}`);
      } else {
        resolve(`Résultat de l'opération ${id}`);
      }
    }, delay);
  });
}

const operations = [
  simulateAsyncOperation(1, 1000),
  simulateAsyncOperation(2, 1500),
  simulateAsyncOperation(3, 800)
];

Promise.all(operations)
  .then(results => {
    console.log('Tous les résultats:', results);
  })
  .catch(error => {
    console.error('Une erreur est survenue:', error);
  });
