import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  private _bigoCount: number;
  
  constructor() {
    this._bigoCount = 0;
  }
  
  incrementBigoCount() {
    this._bigoCount++;
  }

  public getBigoCount() {
    return this._bigoCount;
  }
}
