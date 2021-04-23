import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {
    path: 'employees',
    children: [
      { path: '', component: ListEmployeeComponent },
      { path: '**', redirectTo: '/employees' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
