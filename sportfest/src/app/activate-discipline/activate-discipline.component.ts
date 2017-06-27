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
        // Daten in die entsprechenden Felder füllen
        console.log(data);
      },
      (err) => {
        console.error('GET-Service "disziplin()" not reachable.');
      });

    
    // this.disziplinen = {
    //   einzel: [
    //     {
    //       id: 0,
    //       bezeichnung: 'Weitsprung',
    //       aktiv: true
    //     },
    //     {
    //       id: 1,
    //       bezeichnung: 'Hochspring',
    //       aktiv: false
    //     },
    //     {
    //       id: 2,
    //       bezeichnung: 'Medizinballstoßen',
    //       aktiv: true
    //     }
    //   ],
    //   team: [
    //     {
    //       id: 3,
    //       bezeichnung: 'Fußball',
    //       aktiv: true
    //     },
    //     {
    //       id: 4,
    //       bezeichnung: 'Hockey',
    //       aktiv: false
    //     }
    //   ]
    // };
  }

  public save(index: number, dis:Disziplin) {
    this.sfService.disziplinAendern(index, dis).subscribe(data => {
        
      },
      (err) => {
        console.error('POST-Service "disziplinAendern()" not reachable.');
      });
  }
  
  public editDiscipline(did: number) {
    this.router.navigate(['/createDiscipline/' + did]);
  }

}
