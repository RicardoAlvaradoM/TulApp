import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-feria',
  templateUrl: 'feria.html',
})
export class FeriaPage {
  @ViewChild(Content) content: Content;
  orientation: string;
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitize: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriaPage');
  }
  urlpaste(){
    this.url = "http://feria.tulancingo.gob.mx";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
  scrollToTop() {
    this.content.scrollToTop();
  }

}
