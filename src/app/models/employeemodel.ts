export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender:String;
  sal: number;

  constructor(id: number, firstName: string, lastName: string, sal: number,  gender : String ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sal = sal;
    this.gender= gender;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}