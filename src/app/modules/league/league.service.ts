import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LeagueService {

  constructor(@Inject('BASE_API_URL') private baseUrl: string, private readonly http: HttpClient) {
  }

  public getLastEvents(id: string): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/eventsnextleague.php?id=${id}`).pipe(
      map((resp: any) => resp.events),
    );
  }

  public getSeasons(id: string): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/search_all_seasons.php?id=${id}`).pipe(
      map((resp: any) => resp.seasons),
    );
  }
}
