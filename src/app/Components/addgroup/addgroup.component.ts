import { Component, OnInit, Input} from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import {Group} from '../../Model/Group';
import {GroupService} from '../../Services/Group.service';



@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

  model : any={};

  @Input() newGroup: Group;
  @Input() selectedGroup: Group;

  constructor(private router:Router, private groupService:GroupService) { }


  ngOnInit() {
    this.newGroup = new Group();
    this.newGroup.date = new Date();
  }

  addGroup(group: Group):void{
    console.log(this.newGroup);
    this.groupService.addGroup(group)
      .then(group => {this.selectedGroup = null})
  }

}
