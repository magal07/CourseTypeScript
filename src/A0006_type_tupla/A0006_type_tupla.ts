const clientData1: [number, string] = [1, 'Marcelo'];
const clientData2: [number, string, string] = [1, 'Marcelo', 'Magalhes'];
const clientData3: [number, string, string?] = [1, 'Marcelo'];
const clientData4: [number, string, ...string[]] = [
  1,
  'Marcelo',
  'Magalhes',
  'Jogador',
];

clientData1[0] = 100;
clientData1[1] = 'Juca Mococa';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

const array1: readonly string[] = ['Luiz', 'Jugs'];
const array2: ReadonlyArray<string> = ['Luiz', 'Jugs'];

console.log(array1);
console.log(array2);
