import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NosotrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html',
})
export class NosotrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NosotrosPage');
  }
  facebook(){
    setTimeout(() => {
      //  let fb = '';
      window.open(`https://m.facebook.com/PresidenciaTulancingo/`, '_system','location=yes');
    },100);
  }
  twitter(){
    setTimeout(()=>{
      window.open('https://twitter.com/tulancingompio/','_system','location=yes');
    },100);
  }
  youtube(){
    setTimeout(()=>{
      window.open('https://www.youtube.com/channel/UCNS8CUnbqo29O_jBXJ1Njvg','_system','location=yes');
    },100);
  }
  sitio(){
    setTimeout(()=>{
      window.open('http://sitio.tulancingo.gob.mx/','_system','location=yes');
    },100);
  }
}
