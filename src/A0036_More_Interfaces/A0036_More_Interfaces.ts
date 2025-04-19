// declaration merging

interface PersonModify {
  name: string;
}

interface PersonModify {
  readonly surname: string;
  readonly adress: readonly string[];
  age?: number;
}

const personModify: PersonModify = {
  name: 'Marcelo',
  surname: 'Magalhães',
  adress: ['Av. Brasil'],
  age: 30,
};

personModify.age = 32;
console.log(personModify);
