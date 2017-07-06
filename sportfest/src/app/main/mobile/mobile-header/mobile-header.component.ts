import { PasswordChangeComponent } from '../../password-change/password-change.component';
import { MdDialog } from '@angular/material';
import { SportfestService } from '../../../sportfest.service';
import { LoginComponent } from '../../login/login.component';
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
    this.role = localStorage.getItem('role');
    this.username = localStorage.getItem('username');
    if (localStorage.getItem('init') == 'true') {
      let dlg = this.dialog.open(PasswordChangeComponent, { disableClose: true });
      dlg.componentInstance.setInitPw(true);
      dlg.componentInstance.pwSave.subscribe(data => dlg.close());
    }
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
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    this.username = null;
    this.role = localStorage.getItem('role');
    this.roleChanged.emit(this.role);
    this.navigateToDashboard();
  }

  public login() {
    let dlg = this.dialog.open(LoginComponent);
    dlg.componentInstance.loginClose.subscribe(data => dlg.close());
    dlg.componentInstance.loginSubmit.subscribe(data => {
      this.username = localStorage.getItem('username'); //Benutzernamen aus dem Local Storage auslesen
      this.role = localStorage.getItem('role'); //Rolle aus dem Local Storage auslesen
      this.roleChanged.emit(this.role);
      dlg.close();
      if (localStorage.getItem('init') == 'true') {
        let dlg = this.dialog.open(PasswordChangeComponent, { disableClose: true });
        dlg.componentInstance.setInitPw(true);
        dlg.componentInstance.pwSave.subscribe(data => dlg.close());
      }
    });
  }
}
