import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [{ path: 'customerdata', component: CustomerdataComponent }],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
