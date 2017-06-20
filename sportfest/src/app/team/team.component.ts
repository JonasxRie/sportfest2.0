import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  // currentSportart: string;
  // regel: string;
  currentSportart = 'Fußball';
  regel = 'Nur mit dem Fuß spielen';

  punkteStand = [{classA: 'FS151', classB: 'FI151', pointsA: 6, pointsB: 3}, {classA: 'FI151', classB: 'FI152', pointsA: 2, pointsB: 1}]

  sortType = 'classA'; // set the default sort type
  sortReverse = false;

  constructor() { }

  ngOnInit() {
  }

}
