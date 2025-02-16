const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./exemple.txt', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Erreur interne du serveur');
    console.error('Erreur de lecture du fichier:', error);
  }
});

server.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});

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
