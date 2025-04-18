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
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, surname, age, cpf);
  }

  getFullName(): string {
    console.log("Algo antes");
    const result = super.getFullName();
    return result + " HEEEEEY";
  }
}
export class Client extends Person {
  getFullName(): string {
    return `Client: ${this.name} ${this.surname}`;
  }
}

const person = new Person("Macelo", "Magalhães", 30, "000.000.000-32");
const student = new Student(
  "Macelo",
  "Magalhães",
  30,
  "000.000.000-32",
  "0001",
);
const client = new Client("Macelo", "Magalhães", 30, "000.000.000-32");

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
console.log(student);
