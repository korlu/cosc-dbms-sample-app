import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDepartment } from '../models/department.model';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  // styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  @Input() department: IDepartment = { Dnumber: null, Dname: '', Mgr_ssn: '', Mgr_start_date: new Date() };
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<IDepartment>();

  managers: any;

  constructor(private deptService: DepartmentService) { }

  ngOnInit(): void {
    // kaibeh lawrence
    this.managers = this.deptService.getManagers();
    this.department.Mgr_start_date = new Date(this.department.Mgr_start_date).toLocaleDateString();
  }

  cancelAction() {
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.department);
  }
}
