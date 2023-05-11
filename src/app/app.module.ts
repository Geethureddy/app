import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomdDirective } from './customd.directive';
import { FormsModule } from '@angular/forms';
import { EmployeeJobPipe } from './employee-job.pipe';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { HomeModule } from './home/home.module';

// import { HighlightDirective } from './highlight.directive';

// import { OrdersRoutingModule } from './orders/orders-routing.module';
// import { CustomersRoutingModule } from './customers/customers-routing.module';

@NgModule({
  declarations: [AppComponent, CustomdDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomersModule,
    OrdersModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
