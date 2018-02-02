import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
    {
      'id': 1,
      'name': 'Andrew',
      'age': 30
    },
    {
      'id': 2,
      'name': 'Brandon',
      'age': 25
    },
    {
      'id': 3,
      'name': 'Christina',
      'age': 26
    },
    {
      'id': 4,
      'name': 'Elena',
      'age': 28
    },
    {
      'id': 5,
      'name': 'Joseph',
      'age': 24
    },
    {
      'id': 6,
      'name': 'Obama',
      'age': 46
    },
  ];
  }

}
