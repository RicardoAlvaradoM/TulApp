import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//Importar paginas agregadas
import {
 PrincipalPage,
 AlcaldePage,
 AudienciasPage,
 EventosPage,
 HistoriaPage,
 QrInformatePage,
 TramitesPage,
 DondecomerPage,
 PagorefPage,
 SitiosPage,
 SitiosComercialesPage,
 TurismoPage

} from "../pages/index.paginas";
import { MyApp } from './app.component';

//servicios
import { HistorialService} from '../providers/historial/historial';



@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    AudienciasPage,
    EventosPage,
    HistoriaPage,
    QrInformatePage,
    TramitesPage,
    DondecomerPage,
    PagorefPage,
    SitiosPage,
    SitiosComercialesPage,
    TurismoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Regresar'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    AudienciasPage,
    EventosPage,
    HistoriaPage,
    QrInformatePage,
    TramitesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    HistorialService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
