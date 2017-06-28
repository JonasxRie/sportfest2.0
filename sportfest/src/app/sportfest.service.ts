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
  public userLogin(username: string, password: any): Observable<any> {
    return this.techService.postFormRequest('/authentication', encodeURI('username=' + username + '&password=' + password));
  }
  /**
   * Gibt die User Privilegien zurück
   */
  public userPrivileges(): Observable<any> {
    return this.techService.getRequest('/user/privileges/');
  }
  /**
   * Gibt alle User zurück
   */
  public user(): Observable<any> {
    return this.techService.getRequest('/user');
  }
  /**
   * Fügt einen User hinzu
   */
  public userHinzufuegen(username: string, userrole: string): Observable<any> {
    return this.techService.postFormRequest('/user', encodeURI('name=' + username + '&role=' + userrole));
  }
  /**
   * Löscht den User
   */
  public userLoeschen(id: string): Observable<any> {
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
  
  public schuelerAnmeldebogen(classId: number): Observable<any> {
    return this.techService.getRequest('/klasse/' + classId  + '/anmeldung');
  }
  public schuelerPerDisziplin(classId: number, disziplinId: number){
    return this.techService.getRequest('/schueler/klasse/' + classId + '/disziplin/' + disziplinId);
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
  public disziplinAendern(did: number, disziplin: any): Observable<any> {
    return this.techService.postRequest('/disziplin/' + did, disziplin);
  }
  /**
   * Schreibt eine Disziplin
   */
  public disziplinSchreiben(disziplin: any): Observable<any> {
    return this.techService.putRequest('/disziplin/0', disziplin);
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
  /**
   * Ändert das Passwort
   */
  public changePassword(oldPassword:any, newPassword: any): Observable<any> {
    return this.techService.postFormRequest('/user/password', encodeURI('currpw=' + oldPassword + '&newpw=' + newPassword));
  }
  /**
   * Fragt ab, ob das Passwort valide ist.
   */
  public validatePassword(password: any): Observable<any> {
    return this.techService.putRequest('/validatePassword', password);
  }
}
