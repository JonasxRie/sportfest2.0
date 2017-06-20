import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teilnehmer = [
    {
      name: 'Mirco',
      value: 12.5
    },
    {
      name: 'Maja',
      value: 12.5
    },
    {
      name: 'Michi',
      value: 12.5
    },
    {
      name: 'Maxi',
      value: 12.5
    },
    {
      name: 'Jonas',
      value: 12.5
    },
    {
      name: 'David',
      value: 12.5
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
