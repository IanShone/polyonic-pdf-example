import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: "pdfModal.html"
})

export class PDFModalPage {
  file
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
  
    this.file = (params.get("file"));
  
  }

  dismiss() {
    this.viewCtrl.dismiss(this.file);
  }
}