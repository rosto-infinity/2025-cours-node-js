// Importation des fonctions sum et prod depuis le module mathLib.mjs
import { sum, prod } from "./mathLib.mjs";

// Déclaration de deux nombres à utiliser dans les opérations
const nbr1 = 2;  // Premier nombre
const nbr2 = 55; // Deuxième nombre

// Affichage de la somme des deux nombres dans la console
console.log(`${nbr1} + ${nbr2} = ${sum(nbr1, nbr2)}`);

// Affichage du produit des deux nombres dans la console
console.log(`${nbr1} x ${nbr2} = ${prod(nbr1, nbr2)}`);
