import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TechnischerService {

  private api = 'http://172.20.3.18:8080';
  // public token: any;

  constructor(private http: Http) { }

  public getRequest(ressourceAPI: string) {
    return this.http.get(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
    });

  }

  public postRequest(ressourceAPI: string, body: any) {
    // Token aus localStorage
    body['token'] = JSON.parse(localStorage.getItem('token'));;
    return this.http.post(this.api + ressourceAPI, body).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
    });

  }

  public putRequest(ressourceAPI: string, body: any) {
    return this.http.put(this.api + ressourceAPI, body).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
    });
  }

  public deleteRequest(ressourceAPI: string) {
    return this.http.delete(this.api + ressourceAPI).map(data => data.json()).catch(
      (e) => {
        if (e.status >= 403) {
          return Observable.throw(e);
        }
    });
  }

}
