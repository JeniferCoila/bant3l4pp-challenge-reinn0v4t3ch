import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OseLoadingComponent } from './loading.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [OseLoadingComponent],
  exports: [OseLoadingComponent],
  // entryComponents: [OseLoadingComponent], // solo para versiones anteriores a angular 9
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ]
})
export class OseLoadingModule { }
