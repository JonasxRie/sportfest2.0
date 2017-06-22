import { SportfestService } from './../sportfest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  did: number;
  
  currentSportart: string = "Fußball"; // TODO
  regel: string = "Nur mit dem Fuß spielen"; // TODO

  punkteStand = [{classA: 'FS151', classB: 'FI151', pointsA: 6, pointsB: 3}, {classA: 'FI151', classB: 'FI152', pointsA: 2, pointsB: 1}]

  klassen = [{value: 1, viewValue: "FS151"},
              {value: 2, viewValue: "FS152"},
              {value: 3, viewValue: "FI151"},
              {value: 4, viewValue: "FI152"},
              {value: 5, viewValue: "FV151"}];
  selectedClassA: number;
  selectedClassB: number;
  pointsA: number;
  pointsB: number;


  constructor(private route: ActivatedRoute, 
              private sfService: SportfestService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.did = params['did'];
      this.currentSportart = params['did']; //getDisziplin(did).name
      this.regel = params['did']; //getDisziplin(did).regel
  });
  }
  sendTeamErgebnis(classA: number, classB: number, pointsA: number, pointsB: number){
    //Clear Inputs
    this.selectedClassA = null;
    this.selectedClassB = null;
    this.pointsA = null;
    this.pointsB = null;
    
    //Hier senden
    this.sfService.ergebnisSchreiben(this.did, [{classA, pointsA}, {classB, pointsB}]) //TODO richtiges JSON
  }

}
