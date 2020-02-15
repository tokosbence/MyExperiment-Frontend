import { Injectable } from '@angular/core';
import {EmployerUser} from '../Model/EmployerUser';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppuserService {
  private currentUserUrl = 'http://localhost:8080/users/current';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { 
     console.log('EmpuserService is connected...');
  }

  getCurrentUser() : Observable<EmployerUser> {
    return this.http.get(this.currentUserUrl).map(
      (user : EmployerUser) =>
      {
        console.log(user);
        return user;
      });
  }

}