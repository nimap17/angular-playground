import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
   public count = 0;
   public helloTitle = "";
  constructor(
    private sharedService: SharedService,
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
    console.log("i am form hello component")
    this.helloTitle = this.sharedService.helloTitle;
  }
  
}
