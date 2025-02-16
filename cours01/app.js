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
