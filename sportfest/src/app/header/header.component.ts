import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  username = 'uberadmin';
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

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.disziplinen.einzel[0].id);
  }

  public navigateToEinzel(did: number) {
    this.router.navigate(['/einzel']);
  }

  public navigateToTeam(did: number) {
    this.router.navigate(['/team']);
  }

  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }

}
