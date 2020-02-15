import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';

import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service';

@Component({
  selector: 'app-update-experiment',
  templateUrl: './update-experiment.component.html',
  styleUrls: ['./update-experiment.component.css']
})
export class UpdateExperimentComponent implements OnInit {

  @Input() experiment:Experiment;
  
      constructor(
        private experimentService: ExperimentService,
        private route: ActivatedRoute,
        private location: Location
      ) { }

  ngOnInit() {
    this.experiment = new Experiment();
    this.route.params.switchMap((params:Params)=> this.experimentService.getExperiment(+params['id']))
    .subscribe(experiment_ => this.experiment = experiment_);
  }

  updateExperiment():void{
    this.experimentService.updateExperiment(this.experiment);
    this.goBack();
  }

  goBack():void{
    this.location.back();
  }

}
