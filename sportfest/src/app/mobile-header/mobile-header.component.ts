import { PasswordChangeComponent } from './../password-change/password-change.component';
import { MdDialog } from '@angular/material';
import { SportfestService } from 'app/sportfest.service';
import { LoginComponent } from '../login/login.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  
  username: string;
  role: string;

  @Output() sidenavChange = new EventEmitter<any>();
  @Output() roleChanged = new EventEmitter<string>();
  
  constructor(private router: Router,
              public dialog: MdDialog,
              private sfService: SportfestService) { }

  ngOnInit() {
  }
  
  public changeSidenav() {
    this.sidenavChange.emit();
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
  }
  public openChangePassword() {
    let dlg = this.dialog.open(PasswordChangeComponent, { disableClose: true });
    dlg.componentInstance.pwCancel.subscribe(data => dlg.close());
    dlg.componentInstance.pwSave.subscribe(data => dlg.close());
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.setItem('role','gast');
    this.username=null;
    this.router.navigate(['/home']); 
  }
  
  public login() {
    let dlg = this.dialog.open(LoginComponent);
    dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    dlg.componentInstance.loginSubmit.subscribe(data => {
      dlg.close();
      this.sfService.userPrivileges().subscribe(
        (data) => {
          console.log("UserLoginPrivilegien", data);
          if (data.role != "gast") {
            this.username = data.username;
          } else {
            this.username = null;
          }
          this.role = data.role;
          this.roleChanged.emit(this.role);
        },
        (err) => {
          console.error('GET-Service "userPrivileges()" not reachable.');
          this.username = null;
          this.navigateToDashboard();
        });
    });
  }
}
