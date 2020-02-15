import { Component, OnInit, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';

import {Group} from '../../Model/Group';
import {GroupService} from '../../Services/Group.service';
import { async } from 'q';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  
  groupsToday :Group[] = [];
  groups: Group[];
  nowDate = new Date();
  totalvizitatori: number;
  totalprof: number;
  totalstudenti: number;
  constructor(private router:Router, private groupService: GroupService, private datepipe: DatePipe) {
    
   }

  /*getAllGroup():void{
    this.groupService
      .getAllGroups()
      .then(groups => this.groups = groups);
      
     
    
  }*/
 

   
 

  async ngOnInit() {
  
    //this.groupsToday = await this.groupService.getAllGroupToday();
    
    //this.getAllGroupToday();
    
    
    //this.getAllGroup(); 

  this.groups = await this.groupService.getAllGroups();

  
   


    console.log(this.groups);
    this.getAllGroupToday(this.groups);
    this.totalprof = 0;
    this.totalstudenti = 0;
    this.totalvizitatori = 0;
    this.getStatistica(this.groups);
  
  }

  getAllGroupToday(groupsToday1 :Group[]):void{
  
     let  day = this.datepipe.transform(this.nowDate, 'yyyy-MM-dd');
      for(let item of groupsToday1){
        
   
       
       console.log(day+ " day");
       console.log(this.nowDate + " ");
     
        console.log(item.date);
        if(item.date.toString() == day){
          this.groupsToday.push(item);
          console.log(item.date + " item ");
        }
        console.log(item.date);

      }
      console.log(this.groupsToday);
  }

  getStatistica(groupsvar : Group[]):void{
    for(let item of groupsvar){
      this.totalvizitatori += item.nrprof;
      this.totalvizitatori += item.nrstudent;
      this.totalstudenti += item.nrstudent;
      this.totalprof += item.nrprof;
    }
  }




}
