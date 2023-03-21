const value = 5.79;
const gastoKm = 10;
let distance = 100;

let litrosConsumidos = distance / gastoKm;
let valorGasto = litrosConsumidos * value;

console.log(valorGasto.toFixed(2));