// Importation des fonctions sum et prod depuis le module mathLib.mjs
import { prod, sum } from "./mathLib.mjs";

// Déclaration de deux nombres à utiliser dans les opérations
const nbr1 = 2;  // Premier nombre
const nbr2 = 55; // Deuxième nombre

// Affichage de la somme des deux nombres dans la console
console.log(`${nbr1} + ${nbr2} = ${sum(nbr1, nbr2)}`);

// Affichage du produit des deux nombres dans la console
console.log(`${nbr1} x ${nbr2} = ${prod(nbr1, nbr2)}`);

// Explication des Commentaires
// Importation : Le code commence par importer des fonctions spécifiques (sum et prod) d'un fichier externe nommé mathLib.mjs, qui contient probablement des définitions pour effectuer des opérations mathématiques.
// Déclaration des Nombres : Deux constantes (nbr1 et nbr2) sont définies pour stocker les valeurs numériques sur lesquelles les opérations seront effectuées.
// Affichage des Résultats : Les résultats des opérations (somme et produit) sont calculés en appelant les fonctions importées et sont affichés dans la console avec un formatage pour une meilleure lisibilité.