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
  public test() {
    return this.techService.getRequest('/test');
  }
  public testpost(data: any) {
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
  public userLogin(username: string, password: string) {
    return this.techService.getRequest('/user/login?username=' + username + '&password' + password);
  }

  /**
   * Gibt die User Privilegien zurück
   */
  public userPrivileges(id: number) {
    return this.techService.getRequest('user/privileges/' + id);
  }

  /**
   * Gibt den User zurück
   */
  public user() {
    return this.techService.getRequest('/user');
  }

  /**
   * Ändert den User
   */
  public userAendern(user: any) {
    return this.techService.postRequest('/user', user);
  }

  /**
   * Löscht den User
   */
  public userLoeschen(id: number) {
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
  public schueler(schueler: any) {
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
  public disziplinen() {
    return this.techService.getRequest('/disziplin');
  }
  
  /**
   * Gibt die Disziplinen zurück
   */
  public disziplin(did: number) {
    return this.techService.getRequest('/disziplin/' + did);
  }

  /**
   * Ändert eine Disziplin
   */
  public disziplinAendern(disziplin: any) {
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
  public ergebnisseDisziplin(did: number) {
    return this.techService.getRequest('/ergebnis/' + did);
  }

  /**
   * Ändert ein Ergebnis
   */
  public ergebnisseAendern(did: number, eid: number) {
    return this.techService.getRequest('/ergebnis' + did + '/' + eid);
  }

  /**
   * Schreibt ein Ergebnis
   */
  public ergebnisSchreiben(did: number, ergebnis: any) {
    return this.techService.putRequest('/ergebnis' + did, ergebnis);
  }

  /**
   * Löscht ein Ergebnis
   */
  public ergebnisLoeschen(did: number, eid: number) {
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
  public klassen() {
    return this.techService.getRequest('/klasse');
  }

  /**
   * Gibt Informationen zu einer KlassenID
   */
  public klasseID(id: number) {
    return this.techService.getRequest('/klasse/' + id);
  }

  /**
   * Schreibt eine Klasse
   */
  public klasseSchreiben(klasse: any) {
    return this.techService.putRequest('/klasse', klasse);
  }

}
