import http from 'http';

const server = http.createServer((req, res) => {
  // Affichage de la méthode et de l'URL dans la console pour le debug
  console.log(`${req.method} ${req.url}`);

  // Gestion d'une réponse simple
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bonjour, bienvenue sur mon serveur Node.js !');
});

server.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000 avec succès');
});
