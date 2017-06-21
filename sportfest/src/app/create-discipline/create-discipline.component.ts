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

  constructor(private sfService: SportfestService) { 
    this.rulesVar=[{name:'',expId:'',desc:''}];
    this.rules=[{regeltext: '',punkte:this.dummynumber}];
  }

  ngOnInit() {
  }
  
  addNewRuleVarLine(){
    let variable = {name: '', expId: '', desc: ''};
    this.rulesVar.push(variable);
  }

  addNewRuleLine(){
    let rule = {regeltext: '',punkte:this.dummynumber};
    this.rules.push(rule);
  }
  
  submit() {
    console.log(this.sportart);
    this.secondVisible=true;
  }
}
