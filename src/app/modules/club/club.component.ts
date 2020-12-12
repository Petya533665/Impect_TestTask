import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ClubService } from './club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  private readonly QUERY_PARAM_CLUB_ID: string = 'clubId';
  public club$: Observable<any[]>;

  constructor(private readonly route: ActivatedRoute, private readonly clubService: ClubService) {
    this.club$ = new Subject<any[]>().asObservable();
  }

  public ngOnInit(): void {
    const clubId: string = this.route.snapshot.queryParamMap.get(this.QUERY_PARAM_CLUB_ID) as string;
    this.club$ = this.clubService.getClubInformation(clubId);
  }

}
