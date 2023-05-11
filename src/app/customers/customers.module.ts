import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FormsModule } from '@angular/forms';
import { CustomerdataComponent } from './customerdata/customerdata.component';

@NgModule({
  declarations: [CustomersComponent, CustomerdataComponent],
  imports: [CommonModule, CustomersRoutingModule, FormsModule],
})
export class CustomersModule {}
