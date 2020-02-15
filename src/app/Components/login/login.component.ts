import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {PrincipalService} from '../../Services/principal.service';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private principalService: PrincipalService
  ) { }

  ngOnInit() {
  }

  login(){
    console.log("itt vagyok");
    console.log(this.model);
    this.loading = true;
    this.authenticationService
      .login(this.model.username, this.model.password)
      .subscribe(result =>{
        if(result == true){
          this.principalService.setPrincipal().subscribe(
            () => {
              console.log("itt vagyok2");
                if(this.principalService.isAdmin())
                  {this.router.navigate(['/admin']);
                      console.log("eddig elertem");        
                  }
            } 
          );
        }else{
          this.error = "Username or password is incorrect";
          this.loading = false;
        }
      }, error =>{ this.loading = false ;});
  }

  


}


