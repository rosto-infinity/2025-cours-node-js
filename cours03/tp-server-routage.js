import http from 'http';
import fs from 'fs';
import path from 'path';

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Routage simple basé sur l'URL demandée
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Accueil</h1><p>Bienvenue sur la page d\'accueil.</p>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>À propos</h1><p>Informations sur notre site.</p>');
  } else if (req.url.startsWith('/static')) {
    // Traitement des fichiers statiques
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Fichier non trouvé');
      } else {
        // Déduction du type de contenu en fonction de l'extension
        let contentType = 'text/plain';
        if (req.url.endsWith('.html')) contentType = 'text/html';
        else if (req.url.endsWith('.css')) contentType = 'text/css';
        else if (req.url.endsWith('.js')) contentType = 'application/javascript';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1 style="color:red;">404</h1><p>Page non trouvée.</p>');
  }
});

server.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
