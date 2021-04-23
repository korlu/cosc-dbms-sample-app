export interface IEmployee {
  Fname: string | null;
  Minit: string | null;
  Lname: string | null;
  Ssn: string | null;
  Bdate: string | null;
  Address: string | null;
  Sex: string | null;
  Salary: number;
  Super_ssn: string | null;
  Dno: number;
}

export const MockEmployee: IEmployee = {
  Fname: null,
  Minit: null,
  Lname: null,
  Ssn: null,
  Bdate: null,
  Address: null,
  Sex: null,
  Salary: 0,
  Super_ssn: null,
  Dno: 1
}
