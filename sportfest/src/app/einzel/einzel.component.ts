import { Disziplin, Klasse, Schueler, Ergebnis, Ergebnis2, Leistung, VariableValue } from '../interfaces';
import { SportfestService } from '../sportfest.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-einzel',
  templateUrl: './einzel.component.html',
  styleUrls: ['./einzel.component.css']
})

export class EinzelComponent implements OnInit {
  sportartID: number;
  sportart: string = '';   // TODO: richtige Sportart
  beschreibung: string = '';  // TODO: richtige Regeln
  klassen: Array<Klasse> = [];
  allSchueler: Array<Schueler> = [{sid: 0, vorname: "", name: "", kid: 0, gid: 0}];
  eingetragenesErgebnis = [{sid: 0, variable: [{ergebnis: 0, firstEntry: true}]}];
  ergebnisse: Array<Ergebnis2> = [{wert: "", var: {var_id: 0}}];
  sendeErgebnis: Leistung = {did: null, kid: null, sid: null, ergebnisse: null, timestamp: null};
  bestenSchueler = [];
  variablen = [];
  aufgeklappt: Array<boolean> = [] ;
  klasseAufklappen: boolean = false;
  sortRev = false;

  constructor(private route: ActivatedRoute, private sfService: SportfestService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.sportartID = params['did'];
      this.sendeErgebnis.did = this.sportartID;
      this.sfService.disziplin(this.sportartID).subscribe((data: Disziplin) => {
        this.sportart = data.name;
        this.beschreibung=data.beschreibung;
        this.variablen = data.variablen;
        for (let i = 0; i < this.variablen.length; i++){
          this.ergebnisse[i]["var"].var_id = this.variablen[i].var_id;
        }
        
        // Daten in die entsprechenden Felder füllen
        console.log(data);
        
        
        this.sfService.klassen().subscribe((data: Klasse[]) => {
          this.klassen = data;
          for(let i = 0; i < this.klassen.length; i++){
            this.sfService.schuelerPerDisziplin(this.klassen[i].kid, this.sportartID).subscribe((schuelerData: Schueler[]) => {
              //console.log(schuelerData);
              for (let j = 1; j <= schuelerData.length; j++){
                for (let k = 0; k < this.variablen.length; k++){
                  this.eingetragenesErgebnis[schuelerData[j].sid].variable[k] = { //Hier Ergebnis
                    ergebnis: null,
                    firstEntry: true
                  } 
                };
              }
              //  getErgebnis{
              //    Ergebnis.setErgebnis}}
              this.allSchueler[this.klassen[i].kid] = schuelerData;
            });
          }
        },
        (err) => {
          console.error('GET-Service "klassen()" not reachable.');
        })
        
        
      },
      (err) => {
        console.error('GET-Service "disziplin(sportartID)" not reachable.');
      });
    });
    // Funktion getBesteSchueler()
    this.bestenSchueler = [
      {value: 0, viewValue: 'Mirco', ergebnis: 5.2},
      {value: 1, viewValue: 'Michi', ergebnis: 5.3},
      {value: 2, viewValue: 'Maja', ergebnis: 5.4},
      {value: 3, viewValue: 'David', ergebnis: 5.5},
      {value: 4, viewValue: 'Maxi', ergebnis: 5.6},
      {value: 5, viewValue: 'Jonas', ergebnis: 5.7}
    ];
  }
  
  aufklappen(i: number){
    this.aufgeklappt[i] = !this.aufgeklappt[i];
  }
  switchSort(){
    this.sortRev = !this.sortRev;
  }
  public sortByRang(){
    this.switchSort()
    this.bestenSchueler = this.bestenSchueler.sort((n1,n2)=>{
      if(n1.ergebnis>n2.ergebnis){
        return -1;
      }
      if(n1.ergebnis<n2.ergebnis){
        return 1;
      }

      if(n1.ergebnis==n2.ergebnis){
        if(n1.viewValue>n2.viewValue){
          return 1;
        }

        if(n1.viewValue<n2.viewValue){
          return -1;
        }
      }
      return 0;
    });
  }
  public sortByRangRev(){
    this.switchSort()
    this.bestenSchueler = this.bestenSchueler.sort((n1,n2)=>{
      if(n1.ergebnis>n2.ergebnis){
        return 1;
      }
      if(n1.ergebnis<n2.ergebnis){
        return -1;
      }

      if(n1.ergebnis==n2.ergebnis){
        if(n1.viewValue>n2.viewValue){
          return -1;
        }

        if(n1.viewValue<n2.viewValue){
          return 1;
        }
      }
      return 0;
    });
  }
    
  public inputDisabled(ergObj: Ergebnis): boolean {
    if ((this.enoughPermissionsToWrite() && ergObj.firstEntry) || this.enoughPermissionsToChange()) {
      return false;
    } else {
      return true;
    }
  }
  private enoughPermissionsToWrite() {
    let role = localStorage.getItem('role');
    if (role == 'admin' || role == 'schiedsrichter'){
      return true;
    } else {
      return false;
    }
  }
  private enoughPermissionsToChange() {
    let role = localStorage.getItem('role');
    if (role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
 /* public getBesteSchueler() {
    let maxCount = 5;
    this.ergebnis.forEach((erg: Ergebnis) => {
      
    });
  }*/
  
    
  public save() {
    this.sendeErgebnis.ergebnisse = this.ergebnisse;
    //Timestamp setzen
    console.log(this.sendeErgebnis);
    this.sfService.leistungSchreiben(this.sendeErgebnis);
    
    for(let i = 1; i <= this.eingetragenesErgebnis.length; i++){
      for (let j = 0; j < this.eingetragenesErgebnis[i].variable.length; j++){
        if(this.eingetragenesErgebnis[i][j] && this.eingetragenesErgebnis[i][j].ergebnis){
          this.eingetragenesErgebnis[i][j].firstEntry = false;
        }
        else if(this.eingetragenesErgebnis[i][j]){
          this.eingetragenesErgebnis[i][j].firstEntry = true;
        }
      }
    }
  }
}
