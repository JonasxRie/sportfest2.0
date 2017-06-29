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
      { regeltext: '', punkte: this.dummynumber }
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
        {
          "index": 1,
          "expression": "geschlecht == \"m\" && weite >= 1.2",
          "points": 5
        },
        {
          "index": 2,
          "expression": "geschlecht == \"m\" && weite >= 0.6",
          "points": 2
        },
        {
          "index": 3,
          "expression": "geschlecht == \"m\" && weite >= 0.3",
          "points": 1
        },
        {
          "index": 4,
          "expression": "geschlecht == \"w\" && weite >= 1.2",
          "points": 10
        },
        {
          "index": 5,
          "expression": "geschlecht == \"w\" && weite >= 0.6",
          "points": 5
        },
        {
          "index": 6,
          "expression": "geschlecht == \"w\" && weite >= 0.3",
          "points": 2
        },
        {
          "index": 7,
          "expression": "geschlecht == \"w\" && weite >= 0.15",
          "points": 1
        }
      ],
      "kontrahentenAnzahl": 0
    }*/
    console.log("DisAnl - this.rulesVar", this.rulesVar);
    console.log("DisAnl - this.rules", this.rules);
    let disziplinDTO = {
      name: this.sportart,
      beschreibung: this.beschreibung,
      minTeilnehmer: this.minTeilnehmeranzahl,
      maxTeilnehmer: this.maxTeilnehmeranzahl,
      aktiviert: true,
      teamleistung: this.teamleistung,
      variablen: [
        {
          var_id: 2000,
          name: "Weite",
          desc: "Weite in cm",
          expressionParameter: "w",
          typ: {
            tid: 100,
            name: "Ganzzahl",
            desc: "Einfacher Zahlenwert",
            zustaende: [],
            typ: "int"
          }
        }
      ],   
      regeln: this.rules,  
    }
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
    let line = { name: '', expId: '', desc: '' };
    this.rulesVar.push(line);
  }
  
  removeRuleVarLine(index: number){
      this.rulesVar.splice(index, 1);
  }

  addNewRuleLine(){
    let rule = { regeltext: '', punkte: this.dummynumber };
    this.rules.push(rule);
  }
  
  removeRuleLine(index: number){
    this.rules.splice(index, 1);
  }
  
  submit() {
    this.secondVisible = true;
  }
}
