import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LeagueService } from './league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  private readonly QUERY_PARAM_LEAGUE_ID: string = 'leagueId';
  public lastEvents$: Observable<any[]>;
  public seasons$: Observable<any[]>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly leagueService: LeagueService,
  ) {
    this.lastEvents$ = new Subject<any[]>().asObservable();
    this.seasons$ = new Subject<any[]>().asObservable();
  }

  public ngOnInit(): void {
    const leagueId: string = this.route.snapshot.queryParamMap.get(this.QUERY_PARAM_LEAGUE_ID) as string;
    this.lastEvents$ = this.leagueService.getLastEvents(leagueId);
    this.seasons$ = this.leagueService.getSeasons(leagueId);
  }
}
