export class Enterprise {
  readonly name: string;
  protected readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployees(employees: Employee): void {
    this.employees.push(employees);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

export class Udemy extends Enterprise {
  constructor() {
    super("Udemy", "33333/00001-72");
  }
  popEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }
}

export class Employee {
  constructor(
    public readonly name: string,
    public readonly surname: string,
  ) {}
}

const enterprise1 = new Udemy();

const employees1 = new Employee("Marcelo", "Magalhães");
const employees2 = new Employee("NIVIA", "Magalhães");
const employees3 = new Employee("Isaac", "Magalhães");

enterprise1.addEmployees(employees1);
enterprise1.addEmployees(employees2);
enterprise1.addEmployees(employees3);
enterprise1.addEmployees({
  name: "Julio",
  surname: "Cisar",
});

const removeEmployee = enterprise1.popEmployee();
console.log(removeEmployee);
console.log(enterprise1.name);
