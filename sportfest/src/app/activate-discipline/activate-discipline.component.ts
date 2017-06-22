import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SportfestService } from "app/sportfest.service";

@Component({
  selector: 'app-activate-discipline',
  templateUrl: './activate-discipline.component.html',
  styleUrls: ['./activate-discipline.component.css']
})
export class ActivateDisciplineComponent implements OnInit {

  disziplinen: any;

  constructor(private sfService: SportfestService,
              private router: Router) { }

  ngOnInit() {
    this.disziplinen = {
      einzel: [
        {
          id: 0,
          bezeichnung: 'Weitsprung',
          aktiv: true
        },
        {
          id: 1,
          bezeichnung: 'Hochspring',
          aktiv: false
        },
        {
          id: 2,
          bezeichnung: 'Medizinballstoßen',
          aktiv: true
        }
      ],
      team: [
        {
          id: 3,
          bezeichnung: 'Fußball',
          aktiv: true
        },
        {
          id: 4,
          bezeichnung: 'Hockey',
          aktiv: false
        }
      ]
    };
  }

  public save() {
    // this.sfService.disziplinAendern()
    console.log('TODO: Abklären, wie die Schnittstelle des Backend zum ändern der Aktiv-Zustand aussieht')
  }
  
  public editDiscipline(did: number) {
    this.router.navigate(['/createDiscipline/' + did]);
  }

}
