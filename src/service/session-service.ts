import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage-service';
import { BigoSessionBase, BigoSession } from '../types/bigo-session';
import { Bigo } from '../types/bigo';

@Injectable()
export class SessionService{

  private readonly uri : string = '';

  constructor(
    private _http: HttpClient) {
  }

  createSession(bigoSession: BigoSession) {
    
  }

  joinSession(bigoSession: BigoSessionBase) {

  }

  addBigoToSession(bigoSession: BigoSessionBase, bigo: Bigo) {

  }

  removeSession(bigoSession: BigoSessionBase) {

  }

  getSessionHistory() {

  }


}
