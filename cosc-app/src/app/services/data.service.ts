import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SQLStatement } from '../models/sqlstatement';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {
  baseUrl = environment.apiBaseUri;

  constructor(public http: HttpClient) { }

  execute(sqlStatement: SQLStatement): Observable<any> {
    return this.http.post(this.baseUrl, sqlStatement);
  }

  toStringOrNull(item: any) {
    if (item === null)
      return item;

    return item.trim().length > 0 ? `'${item}'` : null;
  }

}
