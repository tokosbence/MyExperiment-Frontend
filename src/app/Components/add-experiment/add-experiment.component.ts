import { Component, OnInit, Input ,ElementRef} from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ImageUploadService} from '../../Services/imageupload.service';

import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service'

@Component({
  selector: 'app-add-experiment',
  templateUrl: './add-experiment.component.html',
  styleUrls: ['./add-experiment.component.css']
})
export class AddExperimentComponent implements OnInit {
   model: any={};

  beforeExperiment = new Experiment();
  imageForm: FormGroup;
  logoPath: string;
  isError: boolean;
  error: string;

   @Input() newExperiment: Experiment;
   @Input() selectedExperiment: Experiment;

  constructor(private router:Router, private experimentService: ExperimentService,private el: ElementRef, private imageUploadService: ImageUploadService) {
    this.imageForm = new FormGroup({
      logo: new FormControl('', Validators.required)
    });

    this.logoPath = "";
    this.isError = false;
   }

  ngOnInit() {
    this.newExperiment = new Experiment();
  }

  addExperiment1(experiment: Experiment):void{
    this.beforeExperiment = experiment;
    console.log(this.beforeExperiment.name);
    console.log(this.beforeExperiment);
  }




  addLogo(logo){
    if (logo != "") {
      this.upload("logo");
    }
  }
  upload(item) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#'+item);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      for (let i = 0; i < fileCount; i++) {
        formData.append('file[]', inputEl.files.item(i));
      }
      formData.append('fileCount', fileCount.toString());

      this.imageUploadService.upload(formData).subscribe((resp) => {

        this.logoPath = resp[0];
        console.log("LogogPath");
        console.log(this.logoPath);
        this.newExperiment.picpath = this.logoPath;
        console.log(this.newExperiment);
        console.log(this.newExperiment.picpath);
        //this.addExperiment(this.beforeExperiment);
       // this.uploadRestaurant(name, tel, address, hasDailyMenu);

      },
        (error) => {
          this.isError = true;
          if (item == "logo") {
            this.error = "The logo can't be uploaded!";
          } else {
            this.error = "The image of the restaurant can't be uploaded!";
          }
        })
    }

  }

  addExperiment(experiment: Experiment):void{
    this.experimentService.addExperiment(experiment)
      .then(experiment =>{this.selectedExperiment = null;});
  }
}
