// SRC
//Class Employee hanya punya 1 tanggung jawab

class Employee {
  //property private
  #name;
  #role;
  #salary;
  constructor(name, role, salary) {
    this.#name = name;
    this.#role = role;
    this.#salary = salary;
  }
  //method
  getDetails() {
    return `Name: ${this.#name}, Role: ${this.#role}, Salary: ${this.#salary}`;
  }
} //dianalogikan 1 kapsul

//OCP //inherithens// pewarisan
//bisa menambahkan fitur baru dari class employee tanpa ngubah employee
class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, "Manager", salary);
    this.teamSize = teamSize;
  }
}

//LSP //polimorfism mempunyai banyak bentuk
//manager bisa menggunakan mengganti subclass employee tanpa menggantikan tanpa masalah
function printEmployeeDetails(employee) {
  //Bentuk abstraksi
  console.log(employee.getDetails());
}

const employee = new Employee("John Doe", "Software Engineer", 50000); //superClass
const manager = new Manager("Jane Smith", 70000, 10); //modifikasi

printEmployeeDetails(employee);
printEmployeeDetails(manager);

//ISP
// simulasi class untuk memisahkan Interface dari kelas lain dan sesuai kebutuhan
class Printable {
  print() {
    console.log("Printing...");
  }
}
class EmployeeReport extends Printable {
  constructor(employee) {
    super();
    this.employee = employee;
  }
  //override dari superclass
  print() {
    console.log(`Printing Report for ${this.employee.getDetails()}`);
  }
}

const report = new EmployeeReport(employee);
report.print();

//DIP
//hanya memanggil printer tanpa peduli darimana asal si printer
class ReportService {
  constructor(printer) {
    this.printer = printer;
  }
  generateReport() {
    this.printer.print();
  }
}

const print = new Printable();
//dependenct injection
const reportService = new ReportService(report);
reportService.generateReport();
