import { PasswordChangeComponent } from './../password-change/password-change.component';
import { LoginComponent } from '../login/login.component';
import { SportfestService } from '../sportfest.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdMenuTrigger } from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  
  headerImage = '/assets/images/tribune2.png';
  atiwImage = '/assets/images/atiwlogo.png';
  title = 'Sportfest';
  year = '2017';
  username: string;
  role: string;
  disziplinenTeam: Array<any> = [];
  disziplinenEinzel: Array<any> = [];
  einzelExtended = false;
  teamExtended = false;

  constructor(private router: Router,
              private dialog: MdDialog,
              private sfService: SportfestService) { }

  ngOnInit() {
    localStorage.setItem('role', 'admin');
    localStorage.setItem('username', 'admin');
    this.role = localStorage.getItem('role'); //Rolle aus dem Speicher laden (wichtig beim neuladen der Seite)
    this.username = localStorage.getItem('username'); //Benutzernamen aus dem speicher laden (wichtig beim neuladen der Seite)
  }

//Routing bei Klick auf Button im Menü
  public navigateToEinzel(did: number, name: string) {
    this.router.navigate(['/einzel/' + did + '/' + name]);
  }
  public navigateToTeam(did: number, name: string) {
    this.router.navigate(['/team/' + did + '/' + name]);
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }
  public navigateToCreateDiscipline() {
    this.router.navigate(['/createDiscipline']);
  }
  public navigateToImportKlasse() {
    this.router.navigate(['/import']);
  }
  public navigateToActivateDiscipline() {
    this.router.navigate(['/activateDiscipline']);
  }
  public navigateToUAC() {
    this.router.navigate(['/uac']);
  }
  public openChangePassword() {
    let dlg = this.dialog.open(PasswordChangeComponent, { disableClose: true });
    dlg.componentInstance.pwCancel.subscribe(data => dlg.close());
    dlg.componentInstance.pwSave.subscribe(data => dlg.close());
  }
  public navigateToCreateSportfest() {
    this.router.navigate(['/createSportfest']);
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    this.username = null;
    this.navigateToDashboard();
  }

  public login() {
    let dlg = this.dialog.open(LoginComponent); //Login-Overlay öffnen
    dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    dlg.componentInstance.loginSubmit.subscribe(data => {
      dlg.close();
      this.username = localStorage.getItem('username'); //Benutzernamen aus dem Local Storage auslesen
      this.role = localStorage.getItem('role'); //Rolle aus dem Local Storage auslesen
    });
  }
  
  public loadDD(){ //Lädt Disziplinen bei Klick auf Sportarten
    this.disziplinenEinzel=[];
    this.disziplinenTeam=[];
    this.sfService.disziplinen().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        if(data[i].teamleistung == false || data[i].did == 3) {
          this.disziplinenEinzel.push(data[i]);
        }else {
          this.disziplinenTeam.push(data[i]);
        }
      }
    },
      (err) => {
        console.error('GET-Service "disziplinen()" not reachable.');
      });
  }

  public extendEinzel() {
    if (!this.einzelExtended) {
      this.einzelExtended = true;
      this.teamExtended = false;
    } else {
      this.einzelExtended = false;
    }
    this.trigger.closeMenu();
    this.trigger.openMenu();
  }
  public extendTeam() {
    if (!this.teamExtended) {
      this.teamExtended = true;
      this.einzelExtended = false;
    } else {
      this.teamExtended = false;
    }
    this.trigger.closeMenu();
    this.trigger.openMenu();
  }
}
