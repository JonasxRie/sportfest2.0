import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { SportfestService } from './sportfest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(private sfService: SportfestService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Gast:  Home, Sportarten angucken
    // Schiedrichter: Sportarten (Ergebnisse) bearbeiten
    // Admin: Admin, Import
    
    this.sfService.userPrivileges().subscribe(
      data => {
        console.log("UserPrivileges: " + data);
        let url = state.url;
        console.log("URL", url);
        let role = data.role;
        console.log("ROLE", role);
        
        switch (url) {
          // Gast darf:
          case "home":
            return true;
          // Schiedsrichter und Admin darf:
          case "einzel":
          case "team":
            return (role == "schiedsrichter" || role == "admin");
          // Admin darf:
          case "createDiscipline":
          case "activateDiscipline":
          case "uac":
          case "createSportfest":           
          case "import":
            return (role == "admin");
          default: 
            return false;
        }
      },
      err => {
        console.error(err);
      });
  }
}
