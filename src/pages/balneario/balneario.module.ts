import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalnearioPage } from './balneario';

@NgModule({
  declarations: [
    BalnearioPage,
  ],
  imports: [
    IonicPageModule.forChild(BalnearioPage),
  ],
})
export class BalnearioPageModule {}
