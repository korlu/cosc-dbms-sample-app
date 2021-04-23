import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { IEmployee, MockEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy  {

  employees: IEmployee[] = [];
  selectedEmployee: IEmployee;

  subscriptions = new Subscription();

  private modalConfig: NgbModalOptions = { backdrop: 'static', centered: true, size: 'lg', scrollable: false };

  constructor(private employeeService: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.subscriptions.add(this.employeeService.list<IEmployee>().subscribe(emp => {
      this.employees = emp;
    }));
  }

  add(content: any) {
    this.selectedEmployee = { ...MockEmployee, Dno: 1 };
    this.modalService.open(content, this.modalConfig).result
      .then((data: IEmployee) => {
        if (!this.exists(data)) {
          // this.remove(data);
          this.employeeService.insert(data);
        }
      }, (reason) => {

      });
  }

  edit(employee: IEmployee, content: any): void {
    this.selectedEmployee = { ...employee };
    this.modalService.open(content, this.modalConfig).result
      .then((data: IEmployee) => {
        // check if employee
        const index = this.employees.findIndex(emp => emp.Ssn !== employee.Ssn);

        if (index !== -1) { // editing existing record
          this.employees.splice(index, 1, data);
          this.employeeService.update(data, this.selectedEmployee.Ssn);
        } else { // new record
          this.employees.unshift(data);
          this.employeeService.update(data, this.selectedEmployee.Ssn);
        }
      }, (reason) => {

      });
  }

  remove(employee: IEmployee) {
    this.employees = this.employees.filter(emp => emp.Ssn !== employee.Ssn);
    this.employeeService.remove(employee.Ssn);
  }

  private exists(employee: IEmployee) {
    return this.employees.some(emp => emp.Ssn === employee.Ssn);
    // this.employees.findIndex(emp => emp.Ssn !== employee.Ssn);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
