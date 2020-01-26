import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient,
              private platform: Platform,
              private storage: Storage
             ) {
    console.log('Hello DatabaseProvider Provider');
  }

  set(key, value) {
    this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key);
  }
}
