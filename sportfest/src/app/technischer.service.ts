import { BASEPATH } from './app.module';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Location } from '@angular/common';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {
  
  
  constructor(private http: Http, private loction:Location) {}
  
  private createAuthorizationHeader(): Headers {
    console.log("URL Path: "+this.loction.path(true));
    console.log("External URL: "+this.loction.prepareExternalUrl("test"));
    let header = new Headers();
    if(localStorage.getItem('token'))
      header.append('Authorization', 'Bearer ' + localStorage.getItem('token')); 
     return header;
  }

  public getRequest(ressourceAPI: string) {
    return this.http.get(BASEPATH + ressourceAPI, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });

  }
  
  public postFormRequest(ressourceAPI: string, body: any) {
    let headers = this.createAuthorizationHeader();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(BASEPATH + ressourceAPI, body, {headers: headers}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
    });

  }
  
  public postRequest(ressourceAPI: string, body: any) {
    return this.http.post(BASEPATH + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });

  }


  public putRequest(ressourceAPI: string, body: any) {
    return this.http.put(BASEPATH + ressourceAPI, body, {headers: this.createAuthorizationHeader()}).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

  public deleteRequest(ressourceAPI: string) {
    return this.http.delete(BASEPATH + ressourceAPI, {headers: this.createAuthorizationHeader()}).catch(
      (e) => {
        if (e.status >= 400) {
          return Observable.throw(e);
        }
      });
  }

}
