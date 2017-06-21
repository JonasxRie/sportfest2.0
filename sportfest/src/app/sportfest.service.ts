import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { TechnischerService } from './technischer.service';

@Injectable()
export class SportfestService {

  constructor(private techService: TechnischerService) { }

  /**
   * ***********************************************
   * Test Resource
   * ***********************************************
   */

  /**
   * Test GET
   */
  public test(): Observable<any> {
    return this.techService.getRequest('/test');
  }
  public testpost(data: any): Observable<any> {
    return this.techService.postRequest('/data', data);
  }


  /**
   * ***********************************************
   * User Resource
   * ***********************************************
   */

  /**
   * Anmeldung
   */
  public userLogin(username: string, password: string): Observable<any> {
    return this.techService.getRequest('/user/login?username=' + username + '&password' + password);
  }
  /**
   * Gibt die User Privilegien zurück
   */
  public userPrivileges(id: number): Observable<any> {
    return this.techService.getRequest('user/privileges/' + id);
  }
  /**
   * Gibt den User zurück
   */
  public user(): Observable<any> {
    return this.techService.getRequest('/user');
  }
  /**
   * Ändert den User
   */
  public userAendern(user: any): Observable<any> {
    return this.techService.postRequest('/user', user);
  }
  /**
   * Löscht den User
   */
  public userLoeschen(id: number): Observable<any> {
    return this.techService.deleteRequest('/user/' + id);
  }


  /**
   * ***********************************************
   * Schüler Resource
   * ***********************************************
   */

  /**
   * Fügt einen Schüler hinzu
   */
  public schueler(schueler: any): Observable<any> {
    return this.techService.putRequest('/schueler', schueler);
  }

  /**
   * ***********************************************
   * Disziplin Resource
   * ***********************************************
   */

  /**
   * Gibt alle Disziplinen zurück
   */
  public disziplinen(): Observable<any> {
    return this.techService.getRequest('/disziplin');
  }
  /**
   * Gibt die angefragte Disziplin zurück
   */
  public disziplin(did: number): Observable<any> {
    return this.techService.getRequest('/disziplin/' + did);
  }
  /**
   * Ändert eine Disziplin
   */
  public disziplinAendern(disziplin: any): Observable<any> {
    return this.techService.postRequest('/disziplin', disziplin)
  }

  /**
   * ***********************************************
   * Ergebnis Resource
   * ***********************************************
   */

  /**
   * Gibt die Ergebnisse zur Disziplin mit der übergebenen ID zuück
   */
  public ergebnisseDisziplin(did: number): Observable<any> {
    return this.techService.getRequest('/ergebnis/' + did);
  }
  /**
   * Ändert ein Ergebnis
   */
  public ergebnisseAendern(did: number, eid: number): Observable<any> {
    return this.techService.getRequest('/ergebnis' + did + '/' + eid);
  }
  /**
   * Schreibt ein Ergebnis
   */
  public ergebnisSchreiben(did: number, ergebnis: any): Observable<any> {
    return this.techService.putRequest('/ergebnis' + did, ergebnis);
  }
  /**
   * Löscht ein Ergebnis
   */
  public ergebnisLoeschen(did: number, eid: number): Observable<any> {
    return this.techService.deleteRequest('/ergebnis/' + did + '/' + eid);
  }

  /**
   * ***********************************************
   * Klassen Resource
   * ***********************************************
   */

  /**
   * Gibt Informationen zu allen Klassen
   */
  public klassen(): Observable<any> {
    return this.techService.getRequest('/klasse');
  }
  /**
   * Gibt Informationen zu einer KlassenID
   */
  public klasseID(id: number): Observable<any> {
    return this.techService.getRequest('/klasse/' + id);
  }
  /**
   * Schreibt eine Klasse
   */
  public klasseSchreiben(klasse: any): Observable<any> {
    return this.techService.putRequest('/klasse', klasse);
  }
}
