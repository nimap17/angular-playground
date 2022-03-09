import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {
  public hiTitle ="";

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.hiTitle = this.sharedService.hiTitle;
  }

}
