import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SportDetailService } from './sport-detail.service';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.scss']
})
export class SportDetailComponent implements OnInit {
  private readonly QUERY_PARAM_SPORT: string = 'sport';
  public countrys$: Observable<any[]>;
  public title: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly sportDetailService: SportDetailService
  ) {
    this.countrys$ = new Subject<any[]>().asObservable();
    this.title = '';
  }

  public ngOnInit(): void {
    const sport: string = this.route.snapshot.queryParamMap.get(this.QUERY_PARAM_SPORT) as string;
    this.title = sport;
    this.countrys$ = this.sportDetailService.getDetailSport(sport);
  }
}
