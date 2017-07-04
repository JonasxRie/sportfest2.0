import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SportfestService } from '../sportfest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
l: any;
teilnehmer : any;
  // teilnehmer = [
  //   {
  //     name: 'FS161',
  //     points: 12,
  //     rang:1
  //   },
  //   {
  //     name: 'FV151',
  //     points: 12.5,
  //     rang:1
  //   },
  //   {
  //     name: 'FS152',
  //     points: 1,
  //     rang:1
  //   },
  //   {
  //     name: 'FS151',
  //     points: 123,
  //     rang:1
  //   },
  //   {
  //     name: 'FI152',
  //     points: 111,
  //     rang:1
  //   },
  //   {
  //     name: 'FI151',
  //     points: 12.5,
  //     rang:1
  //   }
  // ];

  sorieterteTeilehmer: any;


  constructor(private router: Router, private sfService: SportfestService) { }

  ngOnInit() {
    let i = 0;
    this.sfService.klassen().subscribe(data=>{
      this.teilnehmer = data;
      this.teilnehmer.forEach(element => {
        element.rang=1;
      });
    this.sortByRang(); 

    this.l = this.teilnehmer.length;
    while(i < this.l){
      this.teilnehmer[i].rang = i + 1;
      i++;
    }
    this.sorieterteTeilehmer=this.teilnehmer;
    });
  }

  public sortByRang(){
    this.teilnehmer = this.teilnehmer.sort((n1,n2)=>{
      if(n1.points>n2.points){
        return -1;
      }
      if(n1.points<n2.points){
        return 1;
      }

      if(n1.points==n2.points){
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
      if(n1.points>n2.points){
        return 1;
      }
      if(n1.points<n2.points){
        return -1;
      }

      if(n1.points==n2.points){
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
