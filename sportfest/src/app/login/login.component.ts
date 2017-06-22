import { Md5 } from 'ts-md5/dist/md5';
import { SportfestService } from './../sportfest.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginSubmit: EventEmitter<any> = new EventEmitter<any>();

  username: string;
  password: string;

  errorMsg: string;

  constructor(private sfService: SportfestService)
  { }

  ngOnInit() {
  }

  public submit() {
    // Logindaten verschlüsseln
    let encryptpwd = Md5.hashStr(this.password); // TODO: wenn mehr Zeit -> Umstellung auf sichere Hash-Funktion
    console.log(encryptpwd);

    // Logindaten übermitteln
    this.sfService.userLogin(this.username, encryptpwd).subscribe(
      data => {
        // Token in localStorage packen
        console.log("Token: " + data);
        localStorage.setItem('token', JSON.stringify(data));
        
        this.loginSubmit.emit();
      },
      err => {
        console.log(err);
        this.errorMsg = "Fehlgeschlagen, bitte überprüfen Sie Benutzername und Passwort."
      }
    );
  }

  public close() {
    this.loginClose.emit();
  }

}
