import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-bigo',
  templateUrl: 'bigo.html'
})
export class BigoPage {

  static readonly upLinkSyncInterval = 10;
  selectedBigoType = 0;
  bigoTypes = [{type: "Petra"},
               {type: "Lmka"},
               {type: "Marska"}];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private db: DatabaseProvider,
              private api: ApiProvider
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BigoPage');
    this.db.set('stats', null);
  }

  count() {
    this.db.get('stats').then(res => {
      let current_datetime = new Date()
      let formatted_date =  (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

      if (res) {
        res.series.push({
          action_at: formatted_date,
          brand: this.selectedBigoType
        });
        this.db.set('stats', res);
        if (res.series.length >= BigoPage.upLinkSyncInterval) {
          this.api.sendStatistics(res.series).subscribe(res => {
            if (res) {
              console.log('Upsync')
              this.db.set('stats', null)
            }
          });
        }
      } else {
        this.db.set('stats', {
          series: [{
            action_at: formatted_date,
            brand: this.selectedBigoType
          }]
        });
      }

      console.log(res)
    });
  }

  goBack(){
    this.navCtrl.push('home');
  }

}
