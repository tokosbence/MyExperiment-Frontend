import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service'



@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments:Experiment[];
  //selectedExperiment: Experiment; ez a torleshez kell

  constructor(private router:Router, private experimentService: ExperimentService) { }

  getAllExperiment():void{
    this.experimentService
      .getAllExperiment()
      .then(experiments => this.experiments = experiments);
      console.log("GetAllExperiment");
  }

  ngOnInit() {
    this.getAllExperiment();

    //this.experimentService.getAllExperiment().subscribe(data =>{this.experiments = data;});

    console.log(this.experiments);
  }

}
