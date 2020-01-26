import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BigoService } from '../service/bigo-service';
import { LocalStorageService } from '../service/local-storage-service';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BigoService,
    LocalStorageService,
    AuthServiceProvider
  ]
})
export class AppModule {}
