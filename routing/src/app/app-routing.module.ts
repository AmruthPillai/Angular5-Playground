import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const RoutingComponents = [
  DepartmentListComponent,
  EmployeeListComponent
];

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
