export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + a : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };

export type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  //eslint-disable-next-line
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function viewName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name); // console log -> se for uma Instância de aluno
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('I animal');
      return;
  }
}
viewName(new Student('João'));
viewName({ type: 'animal', color: 'red' });
