import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-einzel',
  templateUrl: './einzel.component.html',
  styleUrls: ['./einzel.component.css']
})

export class EinzelComponent implements OnInit {
  @Input() sportart: string;
  @Input() regeln: string;
  @Input() klassen: String[] = ["FS151", "FI151", "FS161", "FV151"];
  @Input() schueler: String[] = ["Mirco", "David", "Michi", "Jonas", "Maxi", "Maja"];
  
  constructor() { }

  ngOnInit() {
    console.log(this.klassen);
    console.log(this.schueler);
  }

}
