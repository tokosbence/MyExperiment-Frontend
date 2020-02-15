import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despreexp',
  templateUrl: './despreexp.component.html',
  styleUrls: ['./despreexp.component.css']
})
export class DespreexpComponent implements OnInit {

 
    
    lat: number = 45.749070;
    lng: number = 21.230017;
    title: string = "Experimentarium TM";



  constructor() { }

  ngOnInit() {
  }

}
