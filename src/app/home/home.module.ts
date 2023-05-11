import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestPipe } from './test.pipe';
import { EmployeeJobPipe } from '../employee-job.pipe';

import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HighlightDirective } from '../highlight.directive';
@NgModule({
  declarations: [
    HomeComponent,
    TestPipe,
    EmployeeJobPipe,
    EmployeeListComponent,
    HighlightDirective,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
