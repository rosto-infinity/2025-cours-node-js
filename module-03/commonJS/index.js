// Importation des fonctions SOMME et PRODUIT depuis le module mathLib.cjs
let { SOMME, PRODUIT } = require("./mathLib.cjs");

// Déclaration de deux nombres à utiliser dans les opérations
const nbr1 = 2;  // Premier nombre
const nbr2 = 3;  // Deuxième nombre

// Affichage de la somme des deux nombres dans la console
console.log(`${nbr1} + ${nbr2} = ${SOMME(nbr1, nbr2)}`);

// Affichage du produit des deux nombres dans la console
console.log(`${nbr1} x ${nbr2} = ${PRODUIT(nbr1, nbr2)}`);

// Explication des Commentaires
// Importation : Le code commence par importer des fonctions spécifiques (SOMME et PRODUIT) d'un fichier externe nommé mathLib.cjs, qui est probablement un module CommonJS contenant des définitions pour effectuer des opérations mathématiques.
// Déclaration des Nombres : Deux constantes (nbr1 et nbr2) sont définies pour stocker les valeurs numériques sur lesquelles les opérations seront effectuées.
// Affichage des Résultats : Les résultats des opérations (somme et produit) sont calculés en appelant les fonctions importées et sont affichés dans la console avec un formatage pour une meilleure lisibilité.