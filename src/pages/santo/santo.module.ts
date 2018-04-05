import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantoPage } from './santo';

@NgModule({
  declarations: [
    SantoPage,
  ],
  imports: [
    IonicPageModule.forChild(SantoPage),
  ],
})
export class SantoPageModule {}
