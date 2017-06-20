import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-einzel',
  templateUrl: './einzel.component.html',
  styleUrls: ['./einzel.component.css']
})

export class EinzelComponent implements OnInit {
  @Input() sportart: string;
  @Input() regeln: string;
  @Input() klassen: string[] = ["FS151", "FI151", "FS161", "FV151"];
  @Input() schueler: string[] = ["Mirco", "David", "Michi", "Jonas", "Maxi", "Maja"];
  
  constructor() { }

  ngOnInit() {
    console.log(this.klassen);
    console.log(this.schueler);
  }

}
