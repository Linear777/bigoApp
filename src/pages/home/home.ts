import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BigoSessionCreationPage } from '../bigo-session-creation/bigo-session-creation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController) {
  }

  ngOnInit() {

  }

  openBigoSessionCreationPage() {
    this.navCtrl.push(BigoSessionCreationPage);
  }

}
