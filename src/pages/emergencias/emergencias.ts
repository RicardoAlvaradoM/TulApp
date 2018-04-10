import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-emergencias',
  templateUrl: 'emergencias.html',
})
export class EmergenciasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciasPage');
  }
  callNumbers(){
    setTimeout(() => {
      let tel = '7757535081';
      window.open(`tel:${tel}`, '_system');
    },100);
  }
  callBomberos(){
    setTimeout(()=>{
      let tel = '7757530131';
      window.open('tel:${tel}','_system');
    },100);
  }
  callPolicia(){
    setTimeout(() => {
      let tel = '7757552222';
      window.open(`tel:${tel}`, '_system');
    },100);
  }
  callEmergencia(){
    setTimeout(() => {
      let tel = '911';
      window.open(`tel:${tel}`, '_system');
    },100);
  }
  callCruz(){
    setTimeout(() => {
      let tel = '7757530412';
      window.open(`tel:${tel}`, '_system');
    },100);
  }

}
