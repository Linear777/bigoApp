import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient,
              public auth: AuthServiceProvider
             ) {
  }

  sendStatistics(data) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('user-token', this.auth.getToken());
    return this.http.post(AuthServiceProvider.URL +'/data/bulk/PersonalStatistics', data, {headers:headers})
      .map(res => {
        return res;
      });
  }

}
