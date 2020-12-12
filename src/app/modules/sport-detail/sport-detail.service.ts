import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SportDetailService {

  constructor(private readonly http: HttpClient) { }

  public getAllSports(): Observable<any[]> {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
      .pipe(
        map((resp: any) => resp.sports),
      );
  }
}
