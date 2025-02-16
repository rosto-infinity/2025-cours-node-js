const fs = require('fs').promises;

async function lireFichier(nomFichier) {
    try {
        const contenu = await fs.readFile(nomFichier, 'utf-8');
        console.log(`Contenu de ${nomFichier} :\n${contenu}`);
    } catch (erreur) {
        console.error(`Erreur lors de la lecture de ${nomFichier} :`, erreur);
    }
}

lireFichier('exemple.txt');



// a. Avec async/await et try/catch
async function fetchData() {
  try {
    const response = await fetch('https://api.blablagues.net/?rub=blagues');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
}

fetchData();

// Avec les Promises
fetch('https://api.blablagues.net/?rub=blagues')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });
