import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Disziplin } from '../interfaces';
import { SportfestService } from "app/sportfest.service";

@Component({
  selector: 'app-activate-discipline',
  templateUrl: './activate-discipline.component.html',
  styleUrls: ['./activate-discipline.component.css']
})
export class ActivateDisciplineComponent implements OnInit {

  disziplinen: Disziplin[]=[];

  constructor(private sfService: SportfestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

      this.sfService.disziplinen().subscribe((data: Disziplin[]) => {
        this.disziplinen=data;
        if (!this.disziplinen) {
          this.disziplinen = [];
        }
      },
      (err) => {
        console.error('GET-Service "disziplin()" not reachable.');
      });
  }
  
  public save(dis:Disziplin) {
    this.sfService.disziplinAendern(dis.did, dis).subscribe(data => {
        
      },
      (err) => {
        console.error('POST-Service "disziplinAendern()" not reachable.');
      });
  }
  
  public editDiscipline(dis: Disziplin) {
    this.router.navigate(['/createDiscipline/' + dis.did]);
  }

}
