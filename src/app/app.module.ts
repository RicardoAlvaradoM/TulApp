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
import {GoogleMaps, Geocoder} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

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
 BolsatrabajoPage,
 SitiosPage,
 SitiosComercialesPage,
 DondecomerPage,
 CatedralPage,
 MuseoPage,
 SantoPage,
 DatosPage,
 BibliotecaPage,
 GaribayPage,
 AngelesPage,
 ZoologicoPage,
 CapillaPage,
 HuapalcalcoPage,
 BalnearioPage,
 CaracolPage,
 CafeteriaPage,
 FeriaPage,
 PueblosPage

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
    BolsatrabajoPage,
    SitiosPage,
    SitiosComercialesPage,
    DondecomerPage,
    CatedralPage,
    MuseoPage,
    SantoPage,
    DatosPage,
    BibliotecaPage,
    GaribayPage,
    AngelesPage,
    ZoologicoPage,
    CapillaPage,
    HuapalcalcoPage,
    BalnearioPage,
    CaracolPage,
    CafeteriaPage,
    FeriaPage,
    PueblosPage
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
    BolsatrabajoPage,
    SitiosPage,
    SitiosComercialesPage,
    DondecomerPage,
    CatedralPage,
    MuseoPage,
    SantoPage,
    DatosPage,
    BibliotecaPage,
    GaribayPage,
    AngelesPage,
    ZoologicoPage,
    CapillaPage,
    HuapalcalcoPage,
    BalnearioPage,
    CaracolPage,
    CafeteriaPage,
    FeriaPage,
    PueblosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    HistorialService,
    YoutubeVideoPlayer,
    GoogleMaps,
    Geocoder,
    CallNumber,
    Geolocation,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
