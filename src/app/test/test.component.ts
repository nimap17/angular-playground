import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public count = 0;
  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
    console.log("i am form test component")
  }

  increseCount(): void {
    console.log('function is working');
    this.count = this.count + 1;
    this.commonService.newCount=this.commonService.newCount + 1;
    console.log(this.commonService.newCount);
  }

  decreseCount(): void {
    console.log('function is working');
    this.count = this.count - 1;
    this.commonService.newCount=this.commonService.newCount - 1;
    console.log(this.commonService.newCount);
  }
}
