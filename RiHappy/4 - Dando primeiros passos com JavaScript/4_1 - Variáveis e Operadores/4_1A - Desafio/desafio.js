/* 
Faça um programa para calcular o valor de uma viagem.

Você tera 3 variáveis, sendo elas:
1 - Preço do combustível
2 - Gasto médio de combustível do carro por km
3 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivel = 5.79;
const KMPorLitros = 14;
const distanciaViagemKM = 100;


const gastoLitrosViagem = distanciaViagemKM / KMPorLitros;

const valorGastoComCombustivel = gastoLitrosViagem * precoCombustivel;

console.log("O valor gasto com combustível foi de R$ " + valorGastoComCombustivel.toFixed(2));