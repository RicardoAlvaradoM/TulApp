import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-pueblos',
  templateUrl: 'pueblos.html',
})
export class PueblosPage {
  @ViewChild(Content) content: Content;
  orientation: string;
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitize: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PueblosPage');
  }
  urlpaste(){
    this.url = "http://tulancingo.gob.mx/antigua/predial/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
  scrollToTop() {
    this.content.scrollToTop();
  }

}
