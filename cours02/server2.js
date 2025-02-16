const http = require('http');

// Définir le port sur lequel le serveur écoutera
const PORT = 3000;

// Créer le serveur
const server = http.createServer((req, res) => {
    // Gérer les erreurs
    try {
       // Vérifier l'URL de la requête
       switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain ; charset=utf-8' });
            res.end('Bonjour, bienvenue sur mon serveur ok !');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Ceci est la page à propos @"éè.');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Page non trouvée.');
            break;
    }
    } catch (error) {
        console.error('Erreur lors de la gestion de la requête :', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Une erreur est survenue sur le serveur.');
    }
});

// Écouter sur le port défini
server.listen(PORT, () => {
    console.log(`Serveur en cours sur http://localhost:${PORT}`);
});


