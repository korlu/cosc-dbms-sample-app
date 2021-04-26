import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryEditorService } from './query-editor.service';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.css']
})
export class QueryEditorComponent implements OnInit {

  sqlQuery = '';
  submit = false;
  prettify = false;
  result$: Observable<any>;
  objectKeys = Object.keys;
  objectValues = Object.values;

  constructor(private dbService: QueryEditorService) { }

  ngOnInit(): void {

  }

  cancel() {
    this.submit = false;
    this.sqlQuery = '';
  }

  onSubmit() {
    this.submit = true;
    const text = this.sqlQuery.replace(/^\s+|\s+$/g, '');
    this.result$ = this.dbService.execute({ text });
  }

}
