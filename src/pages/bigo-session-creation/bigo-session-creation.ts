import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Map,tileLayer,marker} from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-bigo-session-creation',
  templateUrl: 'bigo-session-creation.html',
})
export class BigoSessionCreationPage {

  public myDate;
  map:Map;
  newMarker:any;
  address:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidEnter(){
    this.loadMap();
  }
  ionViewDidLoad() {

    this.myDate = new Date().toISOString();
  }

  confirmNewSession(coords: any) {

  }
  
  loadMap(){
     this.map = new Map("mapId").setView([17.3850,78.4867], 13);
     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
               { attribution: 'kokot'})
       .addTo(this.map);
  }
  goBack(){
    this.navCtrl.push('home');
  }
}
