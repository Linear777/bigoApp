import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BigoService } from '../../service/bigo-service';
import { BigoSessionCreationPage } from '../bigo-session-creation/bigo-session-creation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private _bigoService: BigoService) {
  }

  ngOnInit() {

  }

  openBigoSessionCreationPage() {
    this.navCtrl.push(BigoSessionCreationPage);
  }

}
