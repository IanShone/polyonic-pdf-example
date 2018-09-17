import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElectronService } from 'ngx-electron';
import { ModalController }  from 'ionic-angular'

import { PDFModalPage } from '../modals/pdf/pdfModal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  file = "http://www.pdf995.com/samples/pdf.pdf"

  constructor(public navCtrl: NavController, private electron: ElectronService, public modalCtrl: ModalController) {
    if (this.electron.isElectronApp) {
      console.log('Running Electron:', this.electron);
    } else {
      console.log('Mode web');
    }
  }

  openPDFModal(file) {
    let modal = this.modalCtrl.create(PDFModalPage, {file: file}, {cssClass: "modal-fullscreen"});
    modal.present();
  }

}
