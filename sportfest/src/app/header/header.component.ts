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
  disziplinen =
  {
    einzel: [
      {
        id: 0,
        bezeichnung: 'Weitsprung'
      },
      {
        id: 1,
        bezeichnung: 'Hochspring'
      },
      {
        id: 2,
        bezeichnung: 'Medizinballstoßen'
      }
    ],
    team: [
      {
        id: 3,
        bezeichnung: 'Fußball'
      },
      {
        id: 4,
        bezeichnung: 'Hockey'
      }
    ]
  };

  constructor(private router: Router,
              public dialog: MdDialog,
              private sfService: SportfestService) { }

  ngOnInit() {
    console.log('los gehts');
    this.sfService.disziplinen().subscribe(data => {
      this.disziplinen = data;
      console.log(this.disziplinen);
    },
      (err) => {
        console.error('GET-Service "disziplinen()" not reachable.');
        console.log(err);
    });
  }

  public navigateToEinzel(did: number) {
    this.router.navigate(['/einzel/' + did]);
  }
  public navigateToTeam(did: number) {
    this.router.navigate(['/team/' + did]);
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }
  public navigateToCreateDiscipline() {
    this.router.navigate(['/createDiscipline']);
  }
  public navigateToImportKlasse() {
    this.router.navigate(['/import/klasse']);
  }
  public navigateToActivateDiscipline() {
    this.router.navigate(['/activateDiscipline']);
  }
  public navigateToUAC() {
    this.router.navigate(['/uac']);
  }
  public navigateToCreateSportfest() {
    this.router.navigate(['/createSportfest']);
  }


  public logout() {
    // TODO: ausloggen
  }

  public login() {
    const dlg = this.dialog.open(LoginComponent);
    dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    dlg.componentInstance.loginSubmit.subscribe(data => dlg.close());
    this.sfService.user().subscribe(data => {
      this.username = data;
    },
      (err) => {
        console.error('GET-Service "user()" not reachable.');
    });
  }

}
