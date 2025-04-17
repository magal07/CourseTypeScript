let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; //eslint-disable-line

const person = {
  name: 'Luiz' as const,
  surname: 'Miranda',
};

function selectColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}
console.log(person.name);
console.log(person.surname);
console.log(selectColor('Red'));
console.log(x, y);

// Module mode
export default 1;
