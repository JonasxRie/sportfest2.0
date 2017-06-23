import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  atiwImage = '/assets/images/atiwlogo.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
   public navigateToDashboard() {
    this.router.navigate(['/home']);
  }

}
