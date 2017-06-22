import * as CryptoJS from 'crypto-js';
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

  constructor(private sfService: SportfestService) { }

  ngOnInit() {
  }

  public submit() {
    // Logindaten verschlüsseln
    let key = CryptoJS.enc.Utf8.parse('7061737323313233');
    let iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    let encryptedUsername = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.username), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    let encryptedPassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.password), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    /*let decrypted = CryptoJS.AES.decrypt(encryptedUsername, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    console.log('Encrypted :' + encryptedUsername);
    console.log('Ciphertext :' + encryptedUsername.ciphertext);
    console.log('Key :' + encryptedUsername.key);
    console.log('Salt :' + encryptedUsername.salt);
    console.log('iv :' + encryptedUsername.iv);
    console.log('Decrypted : ' + decrypted);
    console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));*/

    // Logindaten übermitteln
    // Wie an den String kommen??
    // this.sfService.userLogin(encryptedUsername, encryptedPassword).subscribe(
    //   data => {
    //     // Token in localStorage packen
    //     console.log("Token: " + data);
    //     localStorage.setItem('token', JSON.stringify(data));
        
    //     this.loginSubmit.emit();
    //   },
    //   err => {
    //     console.log(err);
    //     this.errorMsg = "Fehlgeschlagen, bitte überprüfen Sie Benutzername und Passwort."
    //   }
    // );
  }

  public close() {
    this.loginClose.emit();
  }

}
