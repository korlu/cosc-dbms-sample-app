import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MockEmployee, IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { IDepartment } from 'src/app/models/department.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee: IEmployee = MockEmployee;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<IEmployee>();

  departments: Observable<IDepartment[]>;
  frmEmployee: FormGroup = new FormGroup({});

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.departments = this.employeeService.getDepartments();

    this.frmEmployee = this.fb.group({
      Fname: [this.employee.Fname, Validators.required],
      Minit: this.employee.Minit,
      Lname: [this.employee.Lname, Validators.required],
      Ssn: [this.employee.Ssn, Validators.required],
      Bdate: [this.employee.Bdate, Validators.required],
      Address: [this.employee.Address, Validators.required],
      Sex: [this.employee.Sex, Validators.required],
      Salary: [this.employee.Salary, Validators.required],
      Super_ssn: [this.employee.Super_ssn,],
      Dno: [this.employee.Dno, Validators.required],
    });
  }

  cancelAction() {
    this.cancel.emit();
  }

  /**
   * Submit the form.
   */
  onSubmit() {
    // Check whether the form is valid
    if (this.frmEmployee.valid) {
      this.save.emit(this.frmEmployee.value);
    }
  }

}
