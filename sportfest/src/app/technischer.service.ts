import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {

  private api = 'http://172.20.3.18:8080/backend';
  // public token: any;

  constructor(private http: AuthHttp) { }

  private createAuthorizationHeader(headers: Headers) {
    if (localStorage.getItem('token')) {
      headers.append('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('token')));
    }
  }

  public getRequest(ressourceAPI: string) {
    console.log(this.api + ressourceAPI);
    
    let headers = new Headers();
    this.createAuthorizationHeader(headers);    
    // let options = new RequestOptions({ Headers: headers });
    
    return this.http.get(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
      });

  }

  public postRequest(ressourceAPI: string, body: any) {
    // Token aus localStorage
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.api + ressourceAPI, body).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
      });

  }

  public putRequest(ressourceAPI: string, body: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(this.api + ressourceAPI, body).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
      });
  }

  public deleteRequest(ressourceAPI: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
      });
  }

}
