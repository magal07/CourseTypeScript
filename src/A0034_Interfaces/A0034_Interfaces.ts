interface TypeName {
  name: string;
}
interface TypeSurname {
  surname: string;
}
interface TypeFullName {
  fullName(): string;
}

type TypePerson = TypeName & TypeSurname & TypeFullName;
interface TypePerson2 extends TypeName, TypeSurname, TypeFullName {}

class Person implements TypeName, TypeSurname, TypeFullName {
  constructor(
    public name: string,
    public surname: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.surname;
  }
}

const personObj: TypePerson2 = {
  fullName() {
    return this.name + ' ' + this.surname;
  },
  name: 'Luiz',
  surname: 'Antônio',
};

const person = new Person('Luiz', 'Miranda');
console.log(person.fullName());
console.log(personObj.fullName());

export {};
