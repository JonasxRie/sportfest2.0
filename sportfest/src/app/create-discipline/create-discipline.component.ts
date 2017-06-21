import { Variable, Regel } from './../interfaces';
import { SportfestService } from './../sportfest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-discipline',
  templateUrl: './create-discipline.component.html',
  styleUrls: ['./create-discipline.component.css']
})
export class CreateDisciplineComponent implements OnInit {

    sportart: string;
    beschreibung: string;
    minTeilnehmeranzahl: number;
    maxTeilnehmeranzahl: number;
    teamleistung: boolean;
    secondVisible= false;
    
    rulesVar: Array<Variable>;
    rules: Array<Regel>;
    dummynumber: number;
    dummyregel: Regel = { regeltext: '', punkte: 0 };

  constructor(private sfService: SportfestService) { 
    this.rulesVar = [
      {
        name:'',
        expId:'',
        desc:''
      }
    ];
    this.rules = [
      this.dummyregel
    ];
  }

  ngOnInit() {
  }
  
  addNewRuleVarLine(){
    let line = {name: '', expId: '', desc: ''};
    this.rulesVar.push(line);
  }

  addNewRuleLine(){
    let rule = { regeltext: '', punkte: 0 };
    this.rules.push(rule);
  }
  
  submit() {
    this.secondVisible = true;
  }
}
