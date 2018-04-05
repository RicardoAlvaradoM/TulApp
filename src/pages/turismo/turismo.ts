import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {SitiosPage, SitiosComercialesPage, DondecomerPage}  from "../index.paginas";
@IonicPage()
@Component({
  selector: 'page-turismo',
  templateUrl: 'turismo.html',
})
export class TurismoPage {
  constructor( public navCtrl: NavController) {
  }
  SiteTurismo(){
    this.navCtrl.push(SitiosPage);
  }
  siteComercio(){
    this.navCtrl.push(SitiosComercialesPage);
  }
  siteFood(){
    this.navCtrl.push(DondecomerPage);
  }

}
