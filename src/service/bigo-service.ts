import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';

@Injectable()
export class BigoService{

  constructor(
    private _storage: LocalStorageService,
    private _http: HttpClient) {
  }
  
  getBigoTypes() : BigoType[] {

    let bigoTypes: BigoType[] = [
      { type: "LM" },
      { type: "Virginia" },
      { type: "Petra" },
      { type: "Mars" },
      { type: "Marlboro" },
    ]
    return bigoTypes;
  }

  retrieveBigos() {
    this._storage.getBigoCount();
  }

  addBigo() {
    this._storage.incrementBigoCount();
  }

}

export interface BigoType {
  type: string;
}
