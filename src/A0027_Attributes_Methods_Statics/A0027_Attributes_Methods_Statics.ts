// heritage = is a

export class Person {
  static agePattern = 0;
  static cpfStandard = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.agePattern, Person.cpfStandard);
  }

  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, Person.agePattern, Person.cpfStandard);
  }
}

const person1 = new Person('Macelo', 'Magalhães', 30, '000.000.000-32');
const person2 = Person.createPerson('Julio', 'Nagaita');

// console.log(person1);
// console.log(person2);
person1.normalMethod();
person2.normalMethod();

console.log(Person.agePattern, Person.cpfStandard);
