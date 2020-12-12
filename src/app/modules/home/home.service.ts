import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(@Inject('BASE_API_URL') private baseUrl: string, private readonly http: HttpClient) { }

  public getAllSports(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/all_sports.php`)
      .pipe(
        map((resp: any) => resp.sports),
      );
  }
}
