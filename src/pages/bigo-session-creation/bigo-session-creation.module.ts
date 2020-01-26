import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BigoSessionCreationPage } from './bigo-session-creation';

@NgModule({
  declarations: [
    BigoSessionCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(BigoSessionCreationPage),
  ],
})
export class BigoSessionCreationPageModule {}
