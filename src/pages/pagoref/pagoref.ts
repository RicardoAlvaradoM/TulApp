import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-pagoref',
  templateUrl: 'pagoref.html',
})
export class PagorefPage {
  orientation: string;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private screenOrientation: ScreenOrientation,
      private platform: Platform) {
        platform.ready().then(() => {
          this.orientation = this.screenOrientation.type;
          this.screenOrientation.onChange().subscribe(
            () => {
              this.orientation = this.screenOrientation.type;
            }
          );
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }).catch(err => {
          console.log('Error while loading platform', err);
        });
      }

      getCurrentScreenOrientation(){
        //contine la orientacion de pantalla por default
        console.log(this.screenOrientation.type)
      }
      async lockScreenOrientation(){
        try{
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }catch(error){
          console.error(error);
        }
      }
      unlockScreenOrientation(){
        this.screenOrientation.unlock();
      }
      observeScreenOrientation(){
        this.screenOrientation.onChange().
        subscribe(()=>console.log("Ha cambiado la orientación de pantalla"));
      }
      ionViewDidLoad() {
  }
}
