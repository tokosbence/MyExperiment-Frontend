import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import {Sort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service'
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-adminexperiments',
  templateUrl: './adminexperiments.component.html',
  styleUrls: ['./adminexperiments.component.css']
})
export class AdminexperimentsComponent implements OnInit {

  position = 'below';
  position1 = 'below';

  experiments:Experiment[];
  selectedExperiment: Experiment;
  dataSource = new MatTableDataSource(this.experiments) ;
  displayedColumns =[ 'name', 'options'];

  constructor(private router:Router, private experimentService: ExperimentService) {
    
   }

  getAllExperiment():void{
    this.experimentService
      .getAllExperiment()
      .then(experiments => this.experiments = experiments)
      .then(dataSource => this.dataSource = new MatTableDataSource(this.experiments))
      console.log("GetAllExperiment");
  }


  deleteExperiment(ex_:Experiment):void{
    this.experimentService
      .deleteExperiment(ex_)
      .then(()=>{
        this.experiments = this.experiments.filter(h=>h !== ex_);
        if(this.selectedExperiment === ex_){this.selectedExperiment = null;}
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  


  ngOnInit() {
    this.getAllExperiment();
   
    console.log(this.experiments)
    console.log(this.dataSource);
  }  
}


