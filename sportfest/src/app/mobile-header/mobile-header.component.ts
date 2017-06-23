import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  atiwImage = '/assets/images/atiwlogo.png';

  @Output() sidenavChange = new EventEmitter<any>();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public changeSidenav() {
    this.sidenavChange.emit();
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }
  public logout() {
    // this.username = null;
    // TODO: ausloggen
  }

  public login() {
    // let dlg = this.dialog.open(LoginComponent);
    // dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    // dlg.componentInstance.loginSubmit.subscribe(data => dlg.close());
    // this.sfService.user().subscribe(data => {
    //   this.username = data;
    // },
    //   (err) => {
    //     console.error('GET-Service "user()" not reachable.');
    // });
  }
}
