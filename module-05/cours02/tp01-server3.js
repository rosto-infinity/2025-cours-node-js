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
