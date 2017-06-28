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
      this.rollenBestimmen();
    },
      (err) => {
        console.error(err);
      })
  }

private rollenBestimmen(){
  this.users.forEach(element => {
        if(element.berid == '1'){
          element.role = 'admin';
        }else{
          element.role = 'schiedsrichter';
        }
      });
}
  public deleteUser(user: any) {
    alert('User ' + user.name + ' wird gelöscht!');
    this.sfService.userLoeschen(user.name).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
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
        this.ngOnInit();
        },
        (err) => {
          console.error(err);
        }
      )
    } else {
      alert('Fehler bei der Eingabe');
    }
    
  }
  
  public resetPassword(user: any){
    console.log(user);
    this.deleteUser(user);
    this.username = user.name;
    this.selectedRole = user.role;
    this.addUser();
  }

}
