// Importation des modules nécessaires
const http = require('http');
const fs = require('fs').promises;

// Création du serveur HTTP
const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        try {
            // Lecture du fichier de manière asynchrone
            const contenu = await fs.readFile('exemple.txt', 'utf-8');

            // Envoi du contenu du fichier au client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(contenu);
        } catch (err) {
            // En cas d'erreur lors de la lecture du fichier
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur lors de la lecture du fichier');
        }
    } else {
        // Envoi d'une réponse par défaut
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
    }
});

// Démarrage du serveur sur le port 3000
server.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur http://localhost:3000');
});
