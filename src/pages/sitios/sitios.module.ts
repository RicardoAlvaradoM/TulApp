import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitiosPage } from './sitios';

@NgModule({
  declarations: [
    SitiosPage,
  ],
  imports: [
    IonicPageModule.forChild(SitiosPage),
  ],
})
export class SitiosPageModule {}
