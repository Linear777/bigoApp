import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BigoService, BigoType } from '../../service/bigo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bigos: number;
  public bigoTypes: BigoType[];
  public selectedBigoType: string;

  constructor(
    public navCtrl: NavController,
    private _bigoService: BigoService) {
    this.bigos = 0;
  }

  ngOnInit() {
    this.bigoTypes = this._bigoService.getBigoTypes();
    //console.log(this.bigoTypes);
  }

  onAddBigoClicked() {
    //this.bigos++;
    //this._bigoService.addBigo();
  }

}
