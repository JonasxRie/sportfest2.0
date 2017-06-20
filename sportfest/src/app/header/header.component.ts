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
  username= 'uberadmin';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToEinzel() {
    this.router.navigate(['/einzel']);
  }

  public navigateToTeam() {
    this.router.navigate(['/team']);
  }

}
