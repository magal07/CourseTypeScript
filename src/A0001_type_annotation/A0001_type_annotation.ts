/* eslint-disable */
let nome: string = 'luiz';
let idade: number = 0b1010;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer symbol');
// let big: bigint = 10n;//'luiz';

//ARRAYS

let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string[] = ['a', 'b'];

// OBJETOS

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Marcelo'
};
console.log(pessoa.nome);

// Funcions

function sum(x: number, y: number): number {
  return x + y;
}
const sum2: (x: number, y: number) => number = (x, y) => x + y;


