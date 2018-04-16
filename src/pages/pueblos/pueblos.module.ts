import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PueblosPage } from './pueblos';

@NgModule({
  declarations: [
    PueblosPage,
  ],
  imports: [
    IonicPageModule.forChild(PueblosPage),
  ],
})
export class PueblosPageModule {}
