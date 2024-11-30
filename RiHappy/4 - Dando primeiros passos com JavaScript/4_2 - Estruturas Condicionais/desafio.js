/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 5.80;
const precoGasolina = 6.80;

const tipoCombustivel = 'Etanol';

const KmPorLitro = 10;

const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("O valor gasto com etanol foi de R$ " + valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("O valor gasto com gasolina foi de R$ " + valorGasto.toFixed(2));
}

console.log(";-)")



