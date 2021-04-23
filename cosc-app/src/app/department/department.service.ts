import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { IDepartment } from '../models/department.model';
import { SQLStatement } from '../models/sqlstatement';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends DataService {

  // get all departments
  list() {
    const sql: SQLStatement = { text: "SELECT * FROM Department;" };
    return this.http.post(this.baseUrl, sql);
  }

  remove(dnumber: number): void {
    const sql: SQLStatement = { text: `DELETE FROM Department WHERE Dnumber = '${dnumber}'`};
    this.http.post(this.baseUrl, sql).subscribe();
  }

  insert(dept: IDepartment) {
    // Dnumber is INT so we use +dept.Dnumber to cast as INT
    const sql = `INSERT INTO Department (Dname, Dnumber, Mgr_ssn, Mgr_start_date)
      VALUES ('${dept.Dname}', ${+dept.Dnumber}, '${dept.Mgr_ssn}', ${this.toStringOrNull(dept.Mgr_start_date)})`;

      console.log(sql);
    this.http.post(this.baseUrl, { text: sql }).pipe(take(1)).subscribe();
  }

  update(dept: IDepartment, dnumber: string) {
    const sql = `UPDATE Department SET
      Dname = '${dept.Dname}',
      Mgr_ssn = '${dept.Mgr_ssn}',
      Mgr_start_date = ${this.toStringOrNull(dept.Mgr_start_date)}
      WHERE Dnumber = ${+dnumber};`;

    console.log(sql);
    this.http.post(this.baseUrl, { text: sql }).pipe(take(1)).subscribe();
  }

  getManagers() {
    const query = "SELECT Fname + ' ' + Lname AS Name, Ssn FROM Employee;";
    return this.http.post(this.baseUrl, { text: query });
  }

}
