import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  public cancel() {
    this.pwCancel.emit();
  }
  public save() {
    if (this.inputsValid()) {
      console.error("Hier Rest-Service zum Speichern vom Passwort einbinden!");
      this.pwSave.emit();
    }
  }
  private inputsValid() {
    let valid = true;
    if (this.recent && this.recent.length > 0) { // this.recent.length > 0 --> durch Rest-Abfrage ersetzen
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
