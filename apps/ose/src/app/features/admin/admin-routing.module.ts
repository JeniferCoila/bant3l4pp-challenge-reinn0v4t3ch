import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { OseRolesGuard } from '@ose/commons/guards';
import { UserRol } from '@ose/commons/models';
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


      /*{ path: 'talleres', component: WorkshopsComponent },
      { path: 'talleres/nuevo', component: WorkshopCreateView },
      { path: 'talleres/actualizar/:id', component: WorkshopUpdateView },
      {
        path: 'instructores',
        canActivate: [ OseRolesGuard ],
        data: { roles: [ UserRol.admin ] },
        component: InstructorsComponent
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
