import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { DashboardView } from './views/dashboard/dashboard.view';
import { PendingDocumentsComponent } from './views/pending-documents/pending-documents.component';
import { PaymentsDoneComponent } from './views/payments-done/payments-done.component';
import { MyPageComponent } from './views/my-page/my-page.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardView,
    PendingDocumentsComponent,
    PaymentsDoneComponent,
    MyPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
  ]
})
export class AdminModule { }
