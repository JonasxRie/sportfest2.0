import { ActivatedRoute, Params } from '@angular/router';
import { Variable, Regel } from '../interfaces';
import { SportfestService } from '../sportfest.service';
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

  constructor(private sfService: SportfestService, private route: ActivatedRoute) { 
    this.rulesVar = [
      {
        name:'',
        expId:'',
        desc:''
      }
    ];
    this.rules = [
      { regeltext: '', punkte: this.dummynumber }
    ];
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let sportartID = params['did'];
      this.sfService.disziplin(sportartID).subscribe((data) => {
        // Daten in die entsprechenden Felder füllen
        console.log(data);
      },
      (err) => {
        console.error('GET-Service "disziplin(sportartID)" not reachable.');
      });
    });
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
