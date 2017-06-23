import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-einzel',
  templateUrl: './einzel.component.html',
  styleUrls: ['./einzel.component.css']
})

export class EinzelComponent implements OnInit {
  @Input() sportart: string = "Weitsprung";   // TODO: richtige Sportart
  @Input() regeln: string = "Nicht die Linie übertreten.";  // TODO: richtige Regeln
  @Input() klassen = [
    {value: 0, viewValue: 'FS151'},
    {value: 0, viewValue: 'FI151'},
    {value: 0, viewValue: 'FS161'},
    {value: 0, viewValue: 'FV151'}
  ];

  @Input() schueler = [
    {value: 0, viewValue: 'Mirco'},
    {value: 1, viewValue: 'Michi'},
    {value: 2, viewValue: 'Maja'},
    {value: 3, viewValue: 'David'},
    {value: 4, viewValue: 'Maxi'},
    {value: 5, viewValue: 'Jonas'}
  ];
  
  @Input() bestenSchueler = [
    {value: 0, viewValue: 'Mirco', ergebnis: 5.2},
    {value: 1, viewValue: 'Michi', ergebnis: 5.3},
    {value: 2, viewValue: 'Maja', ergebnis: 5.4},
    {value: 3, viewValue: 'David', ergebnis: 5.5},
    {value: 4, viewValue: 'Maxi', ergebnis: 5.6},
    {value: 5, viewValue: 'Jonas', ergebnis: 5.7}
  ];
  //Länge der klassen
  aufgeklappt= [false, false, false, false];
  sortRev = false;

  constructor() { }

  ngOnInit() {
    
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
}
