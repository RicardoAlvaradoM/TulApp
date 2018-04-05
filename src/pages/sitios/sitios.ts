import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  CatedralPage,
  MuseoPage,
  SantoPage,
  DatosPage,
  BibliotecaPage,
  GaribayPage,
  AngelesPage,
  ZoologicoPage,
  CapillaPage,
  HuapalcalcoPage,
  BalnearioPage,
  CaracolPage,
  CafeteriaPage,
} from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-sitios',
  templateUrl: 'sitios.html',
})
export class SitiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  catedral(){
    this.navCtrl.push(CatedralPage);
  }
  museo(){
      this.navCtrl.push(MuseoPage);
  }
  santo(){
    this.navCtrl.push(SantoPage);
  }
  datos(){
    this.navCtrl.push(DatosPage);
  }
  biblioteca(){
    this.navCtrl.push(BibliotecaPage);
  }
  garibay(){
    this.navCtrl.push(GaribayPage);
  }
  angeles(){
    this.navCtrl.push(AngelesPage);
  }
  zoologico(){
    this.navCtrl.push(ZoologicoPage);
  }
  capilla(){
    this.navCtrl.push(CapillaPage);
  }
  huapacalco(){
    this.navCtrl.push(HuapalcalcoPage);
  }
  balneario(){
    this.navCtrl.push(BalnearioPage);
  }
  caracol(){
    this.navCtrl.push(CaracolPage);
  }
  cafeteria(){
    this.navCtrl.push(CafeteriaPage);
  }
}
