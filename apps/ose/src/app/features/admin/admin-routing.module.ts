import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardView } from './views/dashboard/dashboard.view';
import { PendingDocumentsComponent } from './views/pending-documents/pending-documents.component';
import { PaymentsDoneComponent } from './views/payments-done/payments-done.component';
import { MyPageComponent } from './views/my-page/my-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardView },
      { path: 'documents', component: PendingDocumentsComponent },
      { path: 'payments', component: PaymentsDoneComponent },
      { path: 'mypage', component: MyPageComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
