import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryEditorComponent } from './components/query-editor/query-editor.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'employees',
    children: [
      { path: '', component: EmployeeComponent },
      { path: '**', redirectTo: '/employees' },
    ]
  },
  { path: 'query-editor', component: QueryEditorComponent },
  // {
  //   path: 'employees',
  //   loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
