import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule} from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

//PipeTransform
import {YoutubePipe} from "../pipes/youtube/youtube";

//Importar paginas agregadas
import {
 PrincipalPage,
 AlcaldePage,
 AudienciasPage,
 EventosPage,
 QrInformatePage,
 TramitesPage,
 TurismoPage,
 HistoriaPage,
 EmergenciasPage,
 PagorefPage,
 NosotrosPage,
 BolsatrabajoPage

} from "../pages/index.paginas";
import { MyApp } from './app.component';

//servicios
import { HistorialService} from '../providers/historial/historial';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    EventosPage,
    QrInformatePage,
    TramitesPage,
    AudienciasPage,
    TurismoPage,
    HistoriaPage,
    EmergenciasPage,
    PagorefPage,
    NosotrosPage,
    YoutubePipe,
    BolsatrabajoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Regresar'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AlcaldePage,
    EventosPage,
    QrInformatePage,
    TramitesPage,
    AudienciasPage,
    TurismoPage,
    HistoriaPage,
    EmergenciasPage,
    PagorefPage,
    NosotrosPage,
    BolsatrabajoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    HistorialService,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
