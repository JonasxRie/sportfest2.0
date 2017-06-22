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
      value: 12
    },
    {
      name: 'Maja',
      value: 12.5
    },
    {
      name: 'Michi',
      value: 1
    },
    {
      name: 'Maxi',
      value: 123
    },
    {
      name: 'Jonas',
      value: 111
    },
    {
      name: 'David',
      value: 12.5
    }
  ];

  sorieterteTeilehmer: any;


  constructor(private router: Router) { }

  ngOnInit() {
   this.sortByRang(); 
   this.sorieterteTeilehmer=this.teilnehmer;
  }

  public sortByRang(){
    this.teilnehmer = this.teilnehmer.sort((n1,n2)=>{
      if(n1.value>n2.value){
        return -1;
      }
      if(n1.value<n2.value){
        return 1;
      }

      if(n1.value==n2.value){
        if(n1.name>n2.name){
          return 1;
        }

        if(n1.name<n2.name){
          return -1;
        }
      }
      return 0;
    });
  }

public sortByRangRev(){
    this.teilnehmer = this.teilnehmer.sort((n1,n2)=>{
      if(n1.value>n2.value){
        return 1;
      }
      if(n1.value<n2.value){
        return -1;
      }

      if(n1.value==n2.value){
        if(n1.name>n2.name){
          return -1;
        }

        if(n1.name<n2.name){
          return 1;
        }
      }
      return 0;
    });
  }


  public sortByKlasse(){
    this.teilnehmer = this.teilnehmer.sort((n1,n2)=>{
      if(n1.name>n2.name){
        return -1;
      }
      if(n1.name<n2.name){
        return 1;
      }
      return 0;
    });
  }

  public sortByKlasseRev(){
        this.teilnehmer = this.teilnehmer.sort((n1,n2)=>{
      if(n1.name>n2.name){
        return 1;
      }
      if(n1.name<n2.name){
        return -1;
      }
      return 0;
    });
  }

}
