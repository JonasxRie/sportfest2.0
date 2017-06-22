import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.currentSportart = params['did']; //getDisziplin(did).name
      this.regel = params['did']; //getDisziplin(did).regel
    });
  }
}
