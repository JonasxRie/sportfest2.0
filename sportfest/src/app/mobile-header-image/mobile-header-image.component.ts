import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header-image',
  templateUrl: './mobile-header-image.component.html',
  styleUrls: ['./mobile-header-image.component.css']
})
export class MobileHeaderImageComponent implements OnInit {

  atiwImage = '/assets/images/atiwlogo.png';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }

}
