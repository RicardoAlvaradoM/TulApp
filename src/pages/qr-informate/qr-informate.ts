import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//components
import { ToastController, Platform} from 'ionic-angular';

//Servicios
import {HistorialService} from "../../providers/historial/historial";

@IonicPage()
@Component({
  selector: 'page-qr-informate',
  templateUrl: 'qr-informate.html',
})
export class QrInformatePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private _historialService: HistorialService) {
  }

  scan(){


    console.log("Realizando scanner ....");

    if( !this.platform.is('cordova')){
      this._historialService.agregar_historial("adadsdassdadsads")
      return;
    }


    this.barcodeScanner.scan().then(barcodeData => {
      console.log("result:", barcodeData.text);
      console.log("format:", barcodeData.format);
      console.log("cancelled:", barcodeData.cancelled);

      if ( barcodeData.cancelled && barcodeData.text != null) {
          this._historialService.agregar_historial(barcodeData.text)
      }
    },(err) => {
      console.log('Error', err);
      this.mostrar_error("Error: " + err);
    });
  }
  mostrar_error(mensaje:string){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }
  mostrar_contenido( mensaje: string){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }
}
