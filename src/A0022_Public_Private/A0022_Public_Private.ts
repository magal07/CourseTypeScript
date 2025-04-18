export class Enterprise {
  //
  readonly name: string;
  private readonly employees: Employees[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployees(employees: Employees): void {
    this.employees.push(employees);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

export class Employees {
  constructor(
    public readonly name: string,
    public readonly surname: string,
  ) {}
}

const enterprise1 = new Enterprise("Udemy", "11.111.111/0001-32");

const employees1 = new Employees("Marcelo", "Magalhães");
const employees2 = new Employees("NIVIA", "Magalhães");
const employees3 = new Employees("Isaac", "Magalhães");

enterprise1.addEmployees(employees1);
enterprise1.addEmployees(employees2);
enterprise1.addEmployees(employees3);
enterprise1.addEmployees({
  name: "Julio",
  surname: "Cisar",
});
console.log(enterprise1.name);
