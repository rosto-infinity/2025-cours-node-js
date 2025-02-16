let { SOMME, PRODUIT } = require("./mathLib.cjs")

const nbr1 = 2;
const nbr2 = 3;
console.log(`${nbr1} + ${nbr2} =  ${SOMME(nbr1, nbr2)}`);
console.log(`${nbr1} x ${nbr2} =  ${PRODUIT(nbr1, nbr2)}`);
