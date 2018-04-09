import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the EmergenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergencias',
  templateUrl: 'emergencias.html',
})
export class EmergenciasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergenciasPage');
  }
  callNumbers(){
    setTimeout(() => {
      let tel = '12345678890';
      window.open(`tel:${tel}`, '_system');
    },100);
  }

}
