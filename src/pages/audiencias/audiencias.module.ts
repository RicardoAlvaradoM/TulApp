import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudienciasPage } from './audiencias';

@NgModule({
  declarations: [
    AudienciasPage,
  ],
  imports: [
    IonicPageModule.forChild(AudienciasPage),
  ],
})
export class AudienciasPageModule {}
