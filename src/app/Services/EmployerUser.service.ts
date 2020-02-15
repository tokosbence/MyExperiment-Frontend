import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";

import {EmployerUser} from '../Model/EmployerUser';

@Injectable()
export class EmployerUserService{
    constructor(private http:Http){}

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private newusersURL = 'http://localhost:8080/users';
   

 

    getUsers():Promise<EmployerUser[]>{
        return this.http.get(this.newusersURL)
        .toPromise()
        .then(response => response.json() as EmployerUser[])
        .catch(this.handleError);
    }
  
  
    addEmployer(employer : EmployerUser): Promise<EmployerUser>{
       
          return this.http.post(this.newusersURL+"/new", JSON.stringify(employer),{headers:this.headers}).
          toPromise()
          .then(res => res.json() as EmployerUser)
          .catch(this.handleError);
    }
  
    deleteEmployer(employer: EmployerUser): Promise<void> {
      const url = `${this.newusersURL}/deleteUser/${employer.id}`;
      return this.http.get(url, { headers: this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
  
        updateUser(employer: EmployerUser): Promise<EmployerUser> {
      return this.http
        .post(this.newusersURL + "/updateUser", JSON.stringify(employer), { headers: this.headers })
        .toPromise()
        .then(() => employer)
        .catch(this.handleError);
    }
  
     getEmployer(id: number): Promise<EmployerUser> {
      const url = `${this.newusersURL}/getUser/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as EmployerUser)
        .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
    
}