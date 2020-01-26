import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BigoPage } from './bigo';

@NgModule({
  declarations: [
    BigoPage,
  ],
  imports: [
    IonicPageModule.forChild(BigoPage),
  ],
})
export class BigoPageModule {}
