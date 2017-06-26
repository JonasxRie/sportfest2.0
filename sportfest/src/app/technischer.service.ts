import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {

  private api = 'http://172.20.3.18:8080/backend';
  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'blablabla'); 
  }

  constructor(private http: Http) { }

  public getRequest(ressourceAPI: string) {
    localStorage.setItem('token', 'DefaultToken');
    return this.http.get(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
    });

  }

  public postFormRequest(ressourceAPI: string, body: any) {
  let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.api + ressourceAPI, body, {headers: headers}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });

  }
  
  public postRequest(ressourceAPI: string, body: any) {
    return this.http.post(this.api + ressourceAPI, body, ).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });

  }


  public putRequest(ressourceAPI: string, body: any) {
    return this.http.put(this.api + ressourceAPI, body).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });
  }

  public deleteRequest(ressourceAPI: string) {
    return this.http.delete(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });
  }

}
