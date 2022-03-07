import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-playground';
  private ptitle = 'angular-privatetitle';
  public count = 0;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    console.log("i am form app component")
    this.count = this.commonService.newCount;
  }
}
