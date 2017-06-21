import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginSubmit: EventEmitter<any> = new EventEmitter<any>();
  
  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  public submit() {
    // Login    
    let data = [this.username, this.password];
    this.loginSubmit.emit(data);
  }

  public close() {
    this.loginClose.emit();
  }

}
