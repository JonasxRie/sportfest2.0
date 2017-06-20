import { Injectable } from '@angular/core';

import { TechnischerService } from './technischer.service';

@Injectable()
export class SportfestService {

  constructor(private techService: TechnischerService) { }
  
  public usersLogin(username: string, password: string){
    return this.techService.getRequest('/users/login?username=' + username + '&password' + password);
  }
  
  public usersPrivileges(id: number){
    return this.techService.getRequest('users/privileges/' + id);
  }
  
  public disziplinen(id: number){
    return this.techService.getRequest('/disziplinen/' + id);
  }
  
  public 

}
