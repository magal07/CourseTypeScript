interface PersonProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  surname: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  name: 'Luiz',
  surname: 'miranda',
  age: 30,
};

const student2: PersonProtocol<number, number> = {
  name: 123,
  surname: 456,
  age: 30,
};

const student3: PersonProtocol2 = {
  name: 'Luiz',
  surname: 'miranda',
  age: 30,
};

console.log(student1);
console.log(student2);
console.log(student3);
