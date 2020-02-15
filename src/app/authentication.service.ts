import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
     token: any ={};
    private authUrl = 'http://localhost:8080/login';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private router: Router) {
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful, jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    localStorage.setItem('currentUser',  token);
                    // return true, successful login
                    return true;
                } else {
                    // return false,  failed login
                    return false;
                }
            }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
   
    
    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }

    logout(): void {
        // clear token remove user from local storage to log user out
       
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token'); 
       
      
    }

    isLoggedIn(): boolean {
        var token: String = this.getToken();
        return token && token.length > 0;
    }

}