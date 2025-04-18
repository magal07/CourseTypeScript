// heritage = is a

export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }
  getFullName(): string {
    return this.name + " " + this.surname;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `Student: ${this.name} ${this.surname}`;
  }
}
export class Client extends Person {
  getFullName(): string {
    return `Client: ${this.name} ${this.surname}`;
  }
}

const person = new Person("Macelo", "Magalhães", 30, "000.000.000-32");
const student = new Student("Macelo", "Magalhães", 30, "000.000.000-32");
const client = new Client("Macelo", "Magalhães", 30, "000.000.000-32");

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
