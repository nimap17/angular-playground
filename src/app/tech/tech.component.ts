import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
   public techTitle = "";
   car=['toyota','2018','3.5','white'];
   candance = true
   carObj={
     toyota:"2013",
     BMW:"2016",
     camery:"2018"
   }

  constructor(
    private sharedService : SharedService
  ) { }

  ngOnInit(): void {
    this.techTitle = this.sharedService.techTitle;
  }

}
