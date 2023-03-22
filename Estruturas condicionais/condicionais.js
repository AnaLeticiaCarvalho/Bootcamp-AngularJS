const valueEtanol = 5.79;
const valueGasolina = 6.66;
let tipo
const gastoKm = 10;
let distance = 100;
let litrosConsumidos = distance / gastoKm;

if (tipo == 'Etanol')
{
    let valorGasto = litrosConsumidos * valueEtanol;
    console.log(valorGasto.toFixed(2));

}
else {
    let valorGasto = litrosConsumidos * valueGasolina;
    console.log(valorGasto.toFixed(2));

    }


console.log(valorGasto.toFixed(2));




















/*let number = 10;

const par = number % 2 == 0;

console.log(par + " é par");

if (par)
{
    console.log("par");
}
else {
    console.log("ímpar");
    }
*/












