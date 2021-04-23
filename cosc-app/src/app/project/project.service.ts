import { Injectable } from '@angular/core';
import { SQLStatement } from '../models/sqlstatement';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends DataService {

  // get all projects
  list() {
    const sql: SQLStatement = { text: "SELECT * FROM Project;" };
    console.log(this.http.post(this.baseUrl, sql).subscribe());
    return this.http.post(this.baseUrl, sql);
  }

  insert(project: any) {
    // Pnumber and Dnum are INT so we use +project.Pnumber and +project.Dnum to cast as INT
    const sql = `INSERT INTO Project (Pname, Pnumber, Plocation, Dnum)
      VALUES ('${project.Pname}', ${+project.Pnumber}, '${project.Plocation}', ${+project.Dnum}`;

    this.http.post(this.baseUrl, sql);
  }

}
