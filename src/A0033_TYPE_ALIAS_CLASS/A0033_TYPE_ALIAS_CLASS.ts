type TypeName = {
  name: string;
};
type TypeSurname = {
  surname: string;
};
type TypeFullName = {
  fullName: () => string;
};

class Person implements TypeName, TypeSurname, TypeFullName {
  constructor(
    public name: string,
    public surname: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.surname;
  }
}

const person = new Person('Luiz', 'Miranda');
console.log(person.fullName());
