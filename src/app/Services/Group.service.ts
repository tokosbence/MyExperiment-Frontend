import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Group} from '../Model/Group';
import { promise } from 'protractor';
//import { resolve } from 'path';

@Injectable()
export class GroupService{
    
    constructor(private http:Http){}
    data = new Date();
    private headers = new Headers({'Content-Type':'application/json'});
    private groupUrl = '//localhost:8080/groups';

   /* getAllGroups():Promise<Group[]>{
        return this.http.get(this.groupUrl)
        .toPromise()
        .then(response => response.json() as Group[])
        .catch(this.handleError);
    }*/

    async getAllGroups():Promise<Group[]>{
        const response = await this.http.get(this.groupUrl).toPromise();
        return response.json();
    }

   /* getAllGroupToday():Promise<Group[]>{
        return this.http.get(this.groupUrl)
        .toPromise()
        .then(response => response.json() as Group[])
        .catch(this.handleError);
    }*/

  /*  async getAllGroupToday():Promise<Group[]>{
        const response = await this.http.get(this.groupUrl).toPromise();
        return response.json();
    }*/

  

    private extractData(res: Response){
        let body = res.json();
        console.log(body);
        
        return body;
    }

    getGroup(id: number):Promise<Group>{
        const url = `${this.groupUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Group)
        .catch(this.handleError);
    }

    addGroup(group_ : Group):Promise<Group>{
        return this.http.post(this.groupUrl+"/new", JSON.stringify(group_), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Group)
        .catch(this.handleError);
    }

    updateGroup(group_ : Group):Promise<Group>{
        return this.http.post(this.groupUrl+"/updateGroup", JSON.stringify(group_), {headers:this.headers})
        .toPromise()
        .then(() => group_)
        .catch(this.handleError);
    }

    deleteGroup(group_:Group):Promise<Group>{
        const url = `${this.groupUrl}/${group_.id};`
        return this.http.delete(url, {headers:this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.error('An error ocurred', error);
        return Promise.reject(error.message || error);
    }





}
