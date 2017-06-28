import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SportfestService } from '../sportfest.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  @Output() pwCancel = new EventEmitter<any>();
  @Output() pwSave = new EventEmitter<any>();

  recent: string;
  new: string;
  newSubmit: string;
  
  recentInvalid = false;
  msgRecentInvalid = 'Falsches Passwort';
  newNotEqual = false;
  msgNewNotEqual = 'Passwörter sind nicht identisch!';

  constructor(private sfService: SportfestService) { }

  ngOnInit() {
  }
  
  public cancel() {
    this.pwCancel.emit();
  }
  public save() {
    let oldEncrypt = Md5.hashStr(this.recent);
    let newEncrypt = Md5.hashStr(this.new);
    if (this.inputsValid()) {
      this.sfService.changePassword(oldEncrypt,newEncrypt).subscribe((data) => {
          console.log(data); // Response
        },
        (err) => {
          console.error('GET-Service "changePassword()" not reachable.');
      });
      this.pwSave.emit();
    }
  }
  private inputsValid() {
    // Verschlüsseln
    let recentEncrypt = Md5.hashStr(this.recent);
    let newEncrypt = Md5.hashStr(this.new);
    let newSubmitEncrypt = Md5.hashStr(this.newSubmit);
    
    let valid = true;
    // let recentPasswordValid = (this.recent && this.recent.length > 0);
    // this.sfService.validatePassword(this.recent).subscribe((data) => {
    //     recentPasswordValid = data;
    //   },
    //   (err) => {
    //     console.error('GET-Service "validatePassword()" not reachable.');
    // });
    if (recentEncrypt && recentPasswordValid) { // this.recent.length > 0 --> durch Rest-Abfrage ersetzen
      this.recentInvalid = false;      
    } else {
      valid = false;
      this.recentInvalid = true;
    }
    if (newEncrypt && newSubmitEncrypt && newEncrypt === newSubmitEncrypt) {
      this.newNotEqual = false;
    } else {
      valid = false;
      this.newNotEqual = true;
    }
    return valid;
  }
}
