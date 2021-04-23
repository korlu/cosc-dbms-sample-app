import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.model';
import { SQLStatement } from '../models/sqlstatement';
import { take, tap } from 'rxjs/operators';
import { IDepartment } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends DataService {

  // private baseUrl = environment.apiBaseUri + 'database';

  // constructor(private http: HttpClient) { }

  // execute(sqlStatement: SQLStatement): Observable<any> {
  //   return this.http.post(this.baseUrl, sqlStatement);
  // }

  list<IEmployee>(): Observable<IEmployee[]> {
    const sql: SQLStatement = { text: 'SELECT * FROM Employee' };
    return this.http.post<IEmployee[]>(this.baseUrl, sql);
  }

  remove(ssn: string): void {
    const sql: SQLStatement = { text: `DELETE FROM Employee WHERE Ssn = '${ssn}'` };
    this.http.post(this.baseUrl, sql).subscribe();
  }

  insert(employee: IEmployee) {
    const sql = `INSERT INTO EMPLOYEE (Fname, Minit, Lname, Ssn,
      Bdate, Address, Sex, Salary, Super_ssn, Dno) VALUES (
        '${employee.Fname}', ${this.toStringOrNull(employee.Minit)}, '${employee.Lname}',
        '${employee.Ssn}', '${employee.Bdate}', '${employee.Address}', '${employee.Sex}',
        ${+employee.Salary}, ${this.toStringOrNull(employee.Super_ssn)}, ${+employee.Dno});`; // ).replace(/^\s+|\s+$/g, '');

    console.log('SQL to insert', sql);

    this.http.post(this.baseUrl, { text: sql }).pipe(
      take(1),
      tap(result => console.log(result, 'items inserted'))
    ).subscribe();
  }

  update(employee: IEmployee, ssn: string) {

    // prepare SQL statement
    const sqlStatement = `UPDATE EMPLOYEE SET
    Fname = '${employee.Fname}',
    Minit = ${this.toStringOrNull(employee.Minit)},
    Lname = '${employee.Lname}',
    Bdate = '${employee.Bdate}',
    Address = '${employee.Address}',
    Sex = '${employee.Sex}',
    Salary = ${+employee.Salary},
    Super_ssn = ${this.toStringOrNull(employee.Super_ssn)},
    Dno = ${+employee.Dno}
    WHERE Ssn = '${ssn}';`;

    console.log('SQL Code to execute:', sqlStatement);

    this.http.post(this.baseUrl, { text: sqlStatement }).pipe(
      take(1),
    ).subscribe();
  }

  // departments
  getDepartments(): Observable<IDepartment[]> {
    const sql = { text: "SELECT * FROM Department" };
    return this.http.post<IDepartment[]>(this.baseUrl, sql);
  }

}
