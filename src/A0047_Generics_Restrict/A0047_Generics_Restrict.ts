// constraints
//--------------- K é no máximo uma chave de O
type GetKey = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKey = (obj, key) => obj[key];

const animal = {
  color: 'Purple',
  vacinas: ['Vacin1', 'Vacin2'],
};

const vacinas = getKey(animal, 'vacinas');
const color = getKey(animal, 'color');

// console.log(vacinas, color, getKey(animal, 'age'));
console.log(vacinas, color);
