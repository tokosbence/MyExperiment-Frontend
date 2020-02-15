import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Experiment} from '../Model/Experiment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperimentService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private experimentsUrl = '//localhost:8080/experiments';

  getAllExperiment():Promise<Experiment[]>{
        return this.http.get(this.experimentsUrl)
        .toPromise()
        .then(response => response.json() as Experiment[])
        .catch(this.handleError);
    
  }

  /*getAllExperiment():Observable<any>{
      return this.http.get(this.experimentsUrl);
  }*/



  addExperiment(experiment_ : Experiment):Promise<Experiment>{
      return this.http.post(this.experimentsUrl+"/new", JSON.stringify(experiment_),{headers:this.headers})
      .toPromise()
      .then(res => res.json() as Experiment)
      .catch(this.handleError);
  }

  updateExperiment(experiment_: Experiment):Promise<Experiment>{
      return this.http.post(this.experimentsUrl+"/updateExperiment", JSON.stringify(experiment_), {headers:this.headers})
      .toPromise()
      .then(() => experiment_)
      .catch(this.handleError);
  }

  getExperiment(id: number): Promise<Experiment>{
    const url = `${this.experimentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Experiment)
      .catch(this.handleError);
}

  deleteExperiment(experiment_: Experiment):Promise<Experiment>{
      const url = `${this.experimentsUrl}/${experiment_.id}`;
      return this.http.delete(url, {headers:this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}