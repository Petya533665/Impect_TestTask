import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClubService {

  constructor(@Inject('BASE_API_URL') private baseUrl: string, private readonly http: HttpClient) {
  }
  public getClubInformation(id: string): Observable<any[]> {
    // Todo: need API for get club by Id
    return this.http.get(`${this.baseUrl}/search_all_seasons.php?id=${id}`).pipe(
      map((resp: any) => resp),
    );
  }
}
