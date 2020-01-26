import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BigoPage } from '../pages/bigo/bigo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BigoService } from '../service/bigo-service';
import { LocalStorageService } from '../service/local-storage-service';

import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { BigoSessionCreationPage } from '../pages/bigo-session-creation/bigo-session-creation';
import { GeoProvider } from '../providers/geo/geo';
import { DatabaseProvider } from '../providers/database/database';

import { IonicStorageModule } from '@ionic/storage';
import { NetworkInfoProvider } from '../providers/network-info/network-info';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BigoPage,
    BigoSessionCreationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    BigoPage,
    BigoSessionCreationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BigoService,
    LocalStorageService,
    AuthServiceProvider,
    GeoProvider,
    DatabaseProvider,
    NetworkInfoProvider,
    ApiProvider
  ]
})
export class AppModule {}
