import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SportDetailService } from './sport-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SportDetailComponent implements OnInit {

  constructor(private sportDetailService: SportDetailService) {
  }


  public ngOnInit(): void {
  }

}
