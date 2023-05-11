import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { name: 'John Smith', jobTitle: 'Software Engineer' },
    { name: 'Jane Doe', jobTitle: 'UI Designer' },
    { name: 'Bob Johnson', jobTitle: 'Product Manager' },
  ];
}
export class Employee {
  name: string = '';
  jobTitle: string = '';
}
