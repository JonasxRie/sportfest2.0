import { PasswordChangeComponent } from './../password-change/password-change.component';
import { LoginComponent } from '../login/login.component';
import { SportfestService } from '../sportfest.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerImage = '/assets/images/tribune2.png';
  atiwImage = '/assets/images/atiwlogo.png';
  title = 'Sportfest';
  year = '2017';
  username: string;
  role: string;
  disziplinenTeam: Array<any> = [];
  disziplinenEinzel: Array<any> = [];

  constructor(private router: Router,
              public dialog: MdDialog,
              private sfService: SportfestService) { }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.sfService.disziplinen().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
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
    this.username = null;
  }

  public login() {
    let dlg = this.dialog.open(LoginComponent);
    dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    dlg.componentInstance.loginSubmit.subscribe(data => {
      dlg.close();
      this.sfService.userPrivileges().subscribe(
        (data) => {
          console.log(data);
          this.username = data.aud;
        },
        (err) => {
          console.error('GET-Service "userPrivileges()" not reachable.');
      });
    });
  }

}
