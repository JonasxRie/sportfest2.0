import { ActivatedRoute, Params } from '@angular/router';
import { Variable, Regel, Disziplin } from '../interfaces';
import { SportfestService } from '../sportfest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-discipline',
  templateUrl: './create-discipline.component.html',
  styleUrls: ['./create-discipline.component.css']
})
export class CreateDisciplineComponent implements OnInit {    
    sportartID: number;
    sportart: string;
    beschreibung: string;
    minTeilnehmeranzahl: number;
    maxTeilnehmeranzahl: number;
    teamleistung: boolean;
    
    datentypen: any;
    
    secondVisible = true;    
    rulesVar: Array<Variable>;
    rules: Array<Regel>;
    dummynumber: number;

  constructor(private sfService: SportfestService, private route: ActivatedRoute) { 
    this.rulesVar = [
      {
        name:'',
        expId:'',
        desc:'',
        typ:''
      }
    ];
    this.rules = [
      { expression: '', points: this.dummynumber }
    ];
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.sportartID = +params['did'];
    });
    // Disziplin holen (beim Ändern)
    this.sfService.disziplin(this.sportartID).subscribe((data: Disziplin) => {
      this.sportart = data.name;
      this.beschreibung = data.beschreibung;
      this.minTeilnehmeranzahl = data.minTeilnehmer;
      this.maxTeilnehmeranzahl = data.maxTeilnehmer;
      this.teamleistung = data.teamleistung;
      this.rules = data.regeln;
      this.rulesVar = data.variablen;
      if (!this.rules) {
        this.rules = [];
      }
      if (!this.rulesVar) {
        this.rulesVar = [];
      }
    },
    (err) => {
      console.error('GET-Service "disziplin(sportartID)" not reachable.');
    });
    // Datentypen holen
    this.sfService.datentypenHolen().subscribe(
      (data) => {
        console.log("Datentypen DATA", data);
        this.datentypen = data;
      },
      (err) => {
        console.error('GET-Service "datantypenHolen()" not reachable.');
      }
    )
  }
  
  public sendToBackend() {
    /*{
      "name": "Weitsprung",
      "beschreibung": "Weit springen",
      "minTeilnehmer": 2,
      "maxTeilnehmer": 2,
      "aktiviert": true,
      "teamleistung": false,
      "variablen": [
        {
          "var_id": 2000,
          "name": "Weite",
          "desc": "Weite in cm",
          "expressionParameter": "w",
          "typ": {
            "tid": 100,
            "name": "Ganzzahl",
            "desc": "Einfacher Zahlewert",
            "zustaende": [],
            "typ": "int"
          }
        }
      ],
      "regeln": [
        {
          "index": 0,
          "expression": "geschlecht == \"m\" && weite >= 2.4",
          "points": 10
        },
      ],
      "kontrahentenAnzahl": 0
    }*/
    console.log("DisAnl - this.rulesVar", this.rulesVar);
    console.log("DisAnl - this.rules", this.rules);
    // Idizees der Regeln setzen
    for (let i = 0; i < this.rules.length; i++) {
      this.rules[i].index = (i + 1) + '';
    }
    let disziplinDTO = {
      name: this.sportart,
      beschreibung: this.beschreibung,
      minTeilnehmer: this.minTeilnehmeranzahl,
      maxTeilnehmer: this.maxTeilnehmeranzahl,
      aktiviert: true,
      teamleistung: this.teamleistung,
      variablen: this.rulesVar,
      // [
      //   {
      //     var_id: 2000,
      //     name: "Weite",
      //     desc: "Weite in cm",
      //     expressionParameter: "w",
      //     typ: {
      //       tid: 100,
      //       name: "Ganzzahl",
      //       desc: "Einfacher Zahlenwert",
      //       zustaende: [],
      //       typ: "int"
      //     }
      //   }
      // ],   
      regeln: this.rules,  
    }
    console.log("disziplinDTO", disziplinDTO);
    this.sfService.disziplinSchreiben(disziplinDTO).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  addNewRuleVarLine() {
    let line: Variable = { 
      name: '', 
      expId: '', 
      desc: '',
      typ: ''
    };
    this.rulesVar.push(line);
  }
  
  removeRuleVarLine(index: number){
      this.rulesVar.splice(index, 1);
  }

  addNewRuleLine(){
    let rule: Regel = { 
      expression: '', 
      points: this.dummynumber};
    this.rules.push(rule);
  }
  
  removeRuleLine(index: number){
    this.rules.splice(index, 1);
  }
  
  submit() {
    this.secondVisible = true;
  }
}
