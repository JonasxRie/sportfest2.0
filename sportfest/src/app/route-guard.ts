import { Observable } from 'rxjs/Observable';
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
    
    let url = state.url;
    console.log("URL", url);    
    let url1 = url.split('/');
    console.log("URL1", url1);
    console.log("URL1", url1[1]);
    
    let role = localStorage.getItem("role");
    console.log("ROLE", role);
    
    if (url == "home" || url1 ) {
      
    }
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
  }
}
