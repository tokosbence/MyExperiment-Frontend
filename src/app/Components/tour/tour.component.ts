import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service'


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

    experiments:Experiment[];

  constructor(private router:Router, private experimentService:ExperimentService) { }

  getAllExperiment():void{
    this.experimentService
      .getAllExperiment()
      .then(experiments => this.experiments = experiments);
      console.log("GetAllExperiment");
  }

  ngOnInit() {
    this.getAllExperiment();
    console.log("Tour experiments");
  }

}
