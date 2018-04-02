import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitiosComercialesPage } from './sitios-comerciales';

@NgModule({
  declarations: [
    SitiosComercialesPage,
  ],
  imports: [
    IonicPageModule.forChild(SitiosComercialesPage),
  ],
})
export class SitiosComercialesPageModule {}
