import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  static readonly API_KEY = '41DF6935-F3DE-4E87-B63B-9D1B87010D49'
  static readonly APP_KEY = 'DA2D52AE-9139-D64D-FFF7-57AF5CEE9D00'
  static readonly URL = 'https://api.backendless.com/'+AuthServiceProvider.APP_KEY+'/'+AuthServiceProvider.API_KEY;
  static readonly LOGIN_URL = AuthServiceProvider.URL + '/users/login';
  static readonly REGISTER_URL = AuthServiceProvider.URL + '/users/register';

  access: boolean;
  token: string;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Login
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials.");
    } else {
        return this.http.post(AuthServiceProvider.LOGIN_URL, credentials)
        .map(res => {
          if (res['user-token']) {
            this.token = res['user-token'];
            //localStorage.setItem('user-token', this.token);
            return true;
          } else {
            return false;
          }
        });
    }
  }

  // Register
  public register(credentials) {
    if (credentials.name === null || credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {

        this.http.post(AuthServiceProvider.REGISTER_URL, credentials)
        .subscribe( data => {
          console.log(data);
        });

        observer.next(true);
        observer.complete();
      });
    }
  }

  // Get Token
  public getToken() {
    return this.token;
  }

  // Logout
  public logout() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }


}
