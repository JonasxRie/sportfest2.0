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

  constructor() { }

  ngOnInit() {
  }

}
