import { Variable } from './../interfaces';
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
    
    rules: Array<Variable>;
    

  constructor(private sfService: SportfestService) { 
    this.rules=[{name:'',expId:'',desc:''}];
  }

  ngOnInit() {
  }
  
  addNewRuleLine(){
    let variable = {name: '', expId: '', desc: ''};
    this.rules.push(variable);
  }
  
  submit() {
    console.log(this.sportart);
    this.secondVisible=true;
  }
}
