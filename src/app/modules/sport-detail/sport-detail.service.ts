import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SportDetailService {

  constructor(@Inject('BASE_API_URL') private baseUrl: string, private readonly http: HttpClient) {
  }

  public getDetailSport(sport: string): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/search_all_leagues.php?s=${sport}`)
      .pipe(
        map((resp: any) => {
          const countryMap: any = {};
          resp.countrys.forEach((country: any) => {
            if (countryMap.hasOwnProperty(country.strCountry)) {
              countryMap[country.strCountry].push(country);
            } else {
              countryMap[country.strCountry] = [country];
            }
          });
          return Object.keys(countryMap).map(key => {
            return {
              name: key,
              leagues: countryMap[key],
            };
          });
        }),
      );
  }
}
