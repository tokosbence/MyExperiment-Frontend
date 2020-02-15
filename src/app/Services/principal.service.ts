import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {EmployerUser} from '../Model/EmployerUser';
import {AppuserService} from '../Services/appuser.service';
//import { EmpuserService } from '../Services/empuser.service';

@Injectable()
export class PrincipalService {
  empUser: EmployerUser;

  constructor(
     private eService: AppuserService,
  ) { 
     console.log('PrincipalService is connected...');
  }

  setPrincipal() : Observable<void>
  {
    console.log('SetPrincipal is called...');
    return this.eService.getCurrentUser().map(
      user => {
        this.empUser = user;
        console.log('SetPrincipal -> EmployeUser set...');
      });
  }
   
  isAdmin() : boolean
  {
    return this.empUser.role == 1;
  }

}