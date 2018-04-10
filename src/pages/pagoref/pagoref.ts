import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-pagoref',
  templateUrl: 'pagoref.html',
})
export class PagorefPage {
   @ViewChild(Content) content: Content;
  orientation: string;
  url: any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private screenOrientation: ScreenOrientation,
      private sanitize: DomSanitizer) {
      /*  platform.ready().then(() => {
          this.orientation = this.screenOrientation.type;
          this.screenOrientation.onChange().subscribe(
            () => {
              this.orientation = this.screenOrientation.type;
            }
          );
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }).catch(err => {
          console.log('Error while loading platform', err);
        });*/

      }
/*
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
  */
  urlpaste(){
    this.url = "http://tulancingo.gob.mx/antigua/predial/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
  scrollToTop() {
    this.content.scrollToTop();
  }

  }
