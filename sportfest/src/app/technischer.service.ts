import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {

  private api = 'http://172.20.3.18:8080/backend';
  
  constructor(private http:Http){}
  
  private createAuthorizationHeader(): Headers {
    let header = new Headers();
    if(localStorage.getItem('token'))
      header.append('Authorization', 'Bearer ' + localStorage.getItem('token')); 
     return header;
  }

  public getRequest(ressourceAPI: string) {
    return this.http.get(this.api + ressourceAPI, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
      });

  }
  
  public postFormRequest(ressourceAPI: string, body: any) {
  let headers = this.createAuthorizationHeader();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.api + ressourceAPI, body, {headers: headers}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });

  }
  
  public postRequest(ressourceAPI: string, body: any) {
    return this.http.post(this.api + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });

  }


  public putRequest(ressourceAPI: string, body: any) {
    return this.http.put(this.api + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

  public deleteRequest(ressourceAPI: string) {
    return this.http.delete(this.api + ressourceAPI, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

}
