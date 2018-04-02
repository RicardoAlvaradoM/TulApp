import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrInformatePage } from './qr-informate';

@NgModule({
  declarations: [
    QrInformatePage,
  ],
  imports: [
    IonicPageModule.forChild(QrInformatePage),
  ],
})
export class QrInformatePageModule {}
