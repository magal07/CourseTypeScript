// heritage = is a

export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  getFullName(): string {
    return this.name + " " + this.surname;
  }
}

const person = new Person("Macelo", "Magalhães", 30, "000.000.000-32");
person.cpf = "123.456.789-99";
console.log(person.cpf);
