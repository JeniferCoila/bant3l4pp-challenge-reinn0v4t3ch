import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { OseErrorsInterceptorModule, OseTokenInterceptorModule } from '@ose/commons/interceptors';
import { OseSessionModule } from '@ose/commons/services';

@NgModule({
  exports: [
    UiModule,
    ComponentsModule,
    HttpModule,
    OseErrorsInterceptorModule,
    OseSessionModule,
    OseTokenInterceptorModule
  ],
})
export class AdminCommonsModule { }
