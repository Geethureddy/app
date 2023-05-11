import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './home/employee-list/employee-list.component';

@Pipe({
  name: 'employeeJob',
})
export class EmployeeJobPipe implements PipeTransform {
  transform(employee: Employee): string {
    return `${employee.name} (${employee.jobTitle})`;
  }
}
