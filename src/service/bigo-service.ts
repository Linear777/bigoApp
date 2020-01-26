import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable()
export class BigoService{

  constructor(
    private _storage: LocalStorageService,
    private _http: HttpClient) {
  }

  retrieveBigos() {
    this._storage.getBigoCount();
  }

  addBigo() {
    this._storage.incrementBigoCount();
  }

}
