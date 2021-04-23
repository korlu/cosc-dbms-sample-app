import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { IDepartment } from '../models/department.model';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [];
  selectedItem: any;

  constructor(private deptService: DepartmentService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.deptService.list().subscribe((data: any) => this.departments = data);
  }

  add(content) {
    this.selectedItem = { Mgr_start_date: new Date() };
    this.modalService.open(content, { backdrop: 'static', centered: true, size: 'lg' }).result
      .then(data => {
        // check if department exists
        const index = this.departments.findIndex(dept => dept.Dnumber === data.Dnumber);

        if (index !== -1) { // editing existing record
          this.departments.splice(index, 1, data);
          this.deptService.update(data, this.selectedItem.Dnumber);
        } else { // new record
          this.departments.unshift(data);
          this.deptService.insert(data);
        }
      }, (reason) => {

      });
  }

  edit(department: any, content: any) {
    this.selectedItem = { ...department };
    this.modalService.open(content, { backdrop: 'static', centered: true, size: 'lg' }).result
      .then(data => {
        // check if department exists
        const index = this.departments.findIndex(dept => dept.Dnumber === data.Dnumber);

        if (index !== -1) { // editing existing record
          this.departments.splice(index, 1, data);
          this.deptService.update(data, this.selectedItem.Dnumber);
        } else { // new record
          this.departments.unshift(data);
          this.deptService.insert(data);
        }
      }, (reason) => {

      });
  }

  remove(content) {

  }

}
