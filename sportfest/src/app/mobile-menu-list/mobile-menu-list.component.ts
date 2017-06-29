import { LoginComponent } from '../login/login.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SportfestService } from '../sportfest.service';

@Component({
  selector: 'app-mobile-menu-list',
  templateUrl: './mobile-menu-list.component.html',
  styleUrls: ['./mobile-menu-list.component.css']
})
export class MobileMenuListComponent implements OnInit {

  @Input() role: string;
  @Output() itemSelected = new EventEmitter<any>();
  
  selectedSportarten = false;
  selectedEinzel = false;
  selectedTeam = false;
  selectedAdmin = false;
  
  disziplinenTeam: Array<any> = [];
  disziplinenEinzel: Array<any> = [];
  
  constructor(private router: Router,
              private sfService: SportfestService) { }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.sfService.disziplinen().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        if (data[i].teamleistung == false || data[i].did == 3) {
          this.disziplinenEinzel.push(data[i]);
        } else {
          this.disziplinenTeam.push(data[i]);
        }
      }
    },
      (err) => {
        console.error('GET-Service "disziplinen()" not reachable.');
    });
  }
  
  public navigateToEinzel(did: number, name: string) {
    this.router.navigate(['/einzel/' + did + '/' + name]);
    this.itemSelected.emit();
  }
  public navigateToTeam(did: number, name: string) {
    this.router.navigate(['/team/' + did + '/' + name]);
    this.itemSelected.emit();
  }
  public navigateToDashboard() {
    this.router.navigate(['/home']);
    this.itemSelected.emit();
  }
  public navigateToCreateDiscipline() {
    this.router.navigate(['/createDiscipline']);
    this.itemSelected.emit();
  }
  public navigateToImportKlasse() {
    this.router.navigate(['/import']);
    this.itemSelected.emit();
  }
  public navigateToActivateDiscipline() {
    this.router.navigate(['/activateDiscipline']);
    this.itemSelected.emit();
  }
  public navigateToUAC() {
    this.router.navigate(['/uac']);
    this.itemSelected.emit();
  }
  public openChangePassword() {
    // let dlg = this.dialog.open(PasswordChangeComponent, { disableClose: true });
    // dlg.componentInstance.pwCancel.subscribe(data => dlg.close());
    // dlg.componentInstance.pwSave.subscribe(data => dlg.close());
    this.itemSelected.emit();
  }
  public navigateToCreateSportfest() {
    this.router.navigate(['/createSportfest']);
    this.itemSelected.emit();
  }
  
  public expandSportarten() {
    this.loadDD();
    
    if (this.selectedSportarten) {
      this.selectedSportarten = false;
    } else {
      this.selectedAdmin = false;
      this.selectedEinzel = false;
      this.selectedTeam = false;
      this.selectedSportarten = true;
    }
  }
  public expandAdmin() {
    if (this.selectedAdmin) {
      this.selectedAdmin = false;
    } else {
      this.selectedSportarten = false;
      this.selectedAdmin = true;
    }
  }
  public expandEinzel() {
    if (this.selectedEinzel) {
      this.selectedEinzel = false;
    } else {
      this.selectedTeam = false;
      this.selectedEinzel = true;
    }
  }
  public expandTeam() {
    if (this.selectedTeam) {
      this.selectedTeam = false;
    } else {
      this.selectedEinzel = false;
      this.selectedTeam = true;
    }
  }
  
  public loadDD(){
    this.disziplinenEinzel=[];
    this.disziplinenTeam=[];
    this.sfService.disziplinen().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        if(data[i].teamleistung == false || data[i].did == 3) {
          this.disziplinenEinzel.push(data[i]);
        }else {
          this.disziplinenTeam.push(data[i]);
        }
      }
    },
      (err) => {
        console.error('GET-Service "disziplinen()" not reachable.');
      });
  }
}
