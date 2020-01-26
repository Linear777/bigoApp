import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bigo-session-creation',
  templateUrl: 'bigo-session-creation.html',
})
export class BigoSessionCreationPage {

  public myDate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    // this.myDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    this.myDate = new Date().toISOString();
  }

  confirmNewSession(coords: any) {

  }

}
