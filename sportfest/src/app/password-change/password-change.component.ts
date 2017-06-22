import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SportfestService } from '../sportfest.service';

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
    if (this.inputsValid()) {
      // this.sfService.changePassword(this.new).subscribe((data) => {
      //     console.log(data);
      //   },
      //   (err) => {
      //     console.error('GET-Service "changePassword()" not reachable.');
      // });
      this.pwSave.emit();
    }
  }
  private inputsValid() {
    let valid = true;
    let recentPasswordValid = (this.recent && this.recent.length > 0);
    // this.sfService.validatePassword(this.recent).subscribe((data) => {
    //     recentPasswordValid = data;
    //   },
    //   (err) => {
    //     console.error('GET-Service "validatePassword()" not reachable.');
    // });
    if (this.recent && recentPasswordValid) { // this.recent.length > 0 --> durch Rest-Abfrage ersetzen
      this.recentInvalid = false;      
    } else {
      valid = false;
      this.recentInvalid = true;
    }
    if (this.new && this.newSubmit && this.new === this.newSubmit) {
      this.newNotEqual = false;
    } else {
      valid = false;
      this.newNotEqual = true;
    }
    return valid;
  }
}
