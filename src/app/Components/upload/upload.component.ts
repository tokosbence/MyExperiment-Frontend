import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute ,Router , Params} from '@angular/router';
import {ImageUploadService} from '../../Services/imageupload.service';
import {Experiment} from '../../Model/Experiment';
import {ExperimentService} from '../../Services/Experiment.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() experiment : Experiment;
  imagename:string;
  imageForm: FormGroup;
  logoPath: string;
  isError: boolean;
  error: string;

  constructor(private el: ElementRef, private imageUploadService: ImageUploadService,private experimentService: ExperimentService,
    private route: ActivatedRoute,) {
    this.imageForm = new FormGroup({
      logo: new FormControl('', Validators.required)
    });

    this.logoPath = "";
    this.isError = false;
    
   }

  ngOnInit() {
    this.experiment = new Experiment();
    this.route.params.switchMap((params:Params)=> this.experimentService.getExperiment(+params['id']))
    .subscribe(experiment_ => this.experiment = experiment_);

    console.log(this.experiment.name);
    

  }


updateExperiment():void{
    this.experimentService.updateExperiment(this.experiment);
    //this.goBack();
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
        this.experiment.videourl = this.logoPath;
        this.updateExperiment();

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



}
