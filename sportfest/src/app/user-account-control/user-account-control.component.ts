import { SportfestService } from 'app/sportfest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-control',
  templateUrl: './user-account-control.component.html',
  styleUrls: ['./user-account-control.component.css']
})
export class UserAccountControlComponent implements OnInit {

  users: any;
  selectedRole: string;
  username: string = '';

  constructor(private sfService: SportfestService) { }

  ngOnInit() {
    // TODO: aktuelle User aus der DB lesen
    this.sfService.user().subscribe(data => {
      this.users = data;
      this.users.forEach(element => {
        if(element.berid == '1'){
          element.role = 'admin';
        }else{
          element.role = 'schiedsrichter';
        }
      });
    },
      (err) => {
        console.error(err);
      })
  }

  public deleteUser(uid: string) {
    alert('User mit der id' + uid + 'wird gelöscht');
    this.sfService.userLoeschen(uid).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
  }


  public addUser() {
    if (this.selectedRole && this.username) {
      this.sfService.userHinzufuegen(this.username, this.selectedRole).subscribe(
        (data) => {
          console.log(data);
          this.sfService.user().subscribe(
            (data) => {
              this.users = data;
            },
            (err) => {
              console.error(err);
            })
        },
        (err) => {
          console.error(err);
        }
      )
    } else {
      alert('Fehler bei der Eingabe');
    }
    this.selectedRole = "";
    this.username = "";
  }
  
  public resetPassword(user: any){
    this.deleteUser(user.aud);
    this.username = user.aud;
    this.selectedRole = user.role;
    this.addUser();
  }

}
