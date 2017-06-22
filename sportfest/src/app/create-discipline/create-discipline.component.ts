import { ActivatedRoute, Params } from '@angular/router';
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
    secondVisible = true;
    
    rulesVar: Array<Variable>;
    rules: Array<Regel>;
    dummynumber: number;
    dummyregel: Regel = { regeltext: '', punkte: this.dummynumber };

  constructor(private sfService: SportfestService, private route: ActivatedRoute) { 
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
    this.route.params.forEach((params: Params) => {
      let sportartID = params['did'];
      this.sfService.disziplin(sportartID).subscribe(data => {
        // Daten in die entsprechenden Felder füllen
        console.log(data);
      });
    });
  }
  
  addNewRuleVarLine() {
    let line = {name: '', expId: '', desc: ''};
    this.rulesVar.push(line);
  }
  
  removeRuleVarLine(index: number){
        this.rulesVar.splice(index,1);
  }

  addNewRuleLine(){
    let rule = { regeltext: '', punkte: this.dummynumber };
    this.rules.push(rule);
  }
  
  removeRuleLine(index: number){
    this.rules.splice(index);
  }
  
  submit() {
    this.secondVisible = true;
  }
}
