import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatedralPage } from './catedral';

@NgModule({
  declarations: [
    CatedralPage,
  ],
  imports: [
    IonicPageModule.forChild(CatedralPage),
  ],
})
export class CatedralPageModule {}
