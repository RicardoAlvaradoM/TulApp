import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  PrincipalPage,
  AlcaldePage,
  TramitesPage,
  QrInformatePage,
  EventosPage,
  AudienciasPage,
  HistoriaPage,
  TurismoPage,
  PagorefPage,
  EmergenciasPage,
  NosotrosPage
 } from "../pages/index.paginas";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  qrinfo = QrInformatePage;
  alcalde = AlcaldePage;
  tramites = TramitesPage;
  eventos =  EventosPage;
  ind = PrincipalPage;
  audiencia = AudienciasPage;
  historia = HistoriaPage;
  turismo = TurismoPage;
  pagoref = PagorefPage;
  emergencia = EmergenciasPage;
  nosotros =  NosotrosPage;
  rootPage:any = PrincipalPage ;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pagina : any){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}
