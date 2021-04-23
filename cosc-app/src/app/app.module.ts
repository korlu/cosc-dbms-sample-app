import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './department/edit-department.component';
import { ProjectComponent } from './project/project.component';
import { DependentComponent } from './dependent/dependent.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { QueryEditorComponent } from './components/query-editor/query-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    ProjectComponent,
    DependentComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    QueryEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
