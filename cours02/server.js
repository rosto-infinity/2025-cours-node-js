const http = require('http');

http.createServer((req, res) => {
    res.end('Bonjour, bienvenue sur mon serveur !');
}).listen(3000, () => console.log('Serveur en cours sur http://localhost:3000'));
