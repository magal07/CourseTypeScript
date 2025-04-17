type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person = HasName & HasSurname & HasAge; // AND = &

type AB = 'A' | 'B';
type AC = 'A' | 'A';
type DBA = 'D' | 'B' | 'A';
type Intersection = AB & AC & DBA;

const person: Person = {
  age: 30,
  name: 'Luiz',
  surname: 'Othan',
};

console.log(person);

export { person };
