import { SportfestService } from '../../sportfest.service';
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
  password: string = 'Atiw2017';

  constructor(private sfService: SportfestService) { }

  ngOnInit() {//Laden der Seite
    this.rollenLaden();
  }

  private rollenLaden() { //Lädt alle im System existierende Benutzer
    this.sfService.user().subscribe(data => {
      this.users = data;
      this.users.forEach(element => {
        if (element.berid == '1') {
          element.role = 'admin';
        } else {
          element.role = 'schiedsrichter';
        }
      });
    },
      (err) => {
        console.error(err);
      })
  }
  public deleteUser(user: any) {
    // alert('User ' + user.name + ' wird gelöscht!');
    this.sfService.userLoeschen(user.name).subscribe(//Löscht Benutzer aus der Datenbank
      (data) => {
        console.log(data);
        this.rollenLaden(); //Existierende Benutzer neu laden
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public addUser() {
    if (this.selectedRole && this.username && this.password) {//Benutzername und Rolle wurde gesetzt
      this.sfService.userHinzufuegen(this.username, this.password, this.selectedRole).subscribe(//Benutz in Datenbank einfügen
        (data) => {
          console.log(data);
          this.rollenLaden();//Existierende Benutzer neu laden
          this.username = '';
          this.selectedRole = null;
        },
        (err) => {
          console.error(err);
        }
      )
    } else {
      alert('Fehler bei der Eingabe');
    }

  }

  public resetPassword(user: any) {//Ausgewählten Benutzer löschen und mit initialpassword erstellen
    this.deleteUser(user);
    this.username = user.name;
    this.selectedRole = user.role;
    this.addUser();
    this.username = '';
    this.selectedRole = null;
  }
}
