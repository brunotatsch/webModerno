// o Node sempre deixa em cache o objeto quando instanciado
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// factore resolve este problema.
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor);
console.log(contadorC.valor);