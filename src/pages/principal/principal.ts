import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {}


            mostrarMenu(){
              this.menuCtrl.toggle();
            }

}
