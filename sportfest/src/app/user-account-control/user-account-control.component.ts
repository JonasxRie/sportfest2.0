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
    this.users = [
      {
        id: 0,
        name: 'Maja',
        role: 'admin'
      },
      {
        id: 1,
        name: 'Michi',
        role: 'admin'
      },
      {
        id: 2,
        name: 'Mirco',
        role: 'admin'
      },
      {
        id: 3,
        name: 'Maxi',
        role: 'admin'
      },
      {
        id: 4,
        name: 'Jonas',
        role: 'admin'
      }
    ];
  }

  public deleteUser(uid: number) {
    alert('User mit der id' + uid + 'wird gelöscht');
    this.sfService.userLoeschen(uid).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  public addUser() {
    console.log({id: 5, name: this.username, role: this.selectedRole})
    if (this.selectedRole && this.username) {
      // this.sfService.
      // Abklären mit Backend ob hierfür eine Schnittstelle existiert
      alert(this.selectedRole + ' ' + this.username);
      this.users.push({id: 5, name: this.username, role: this.selectedRole})
    } else {
      alert('Fehler bei der Eingabe');
    }
  }

}
