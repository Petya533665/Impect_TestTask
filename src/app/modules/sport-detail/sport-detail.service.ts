import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SportDetailService {

  constructor(private readonly http: HttpClient) {
  }

  public detailSport(sport: string): Observable<any[]> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=${ sport }`)
      .pipe(
        map((resp: any) => {
          const countryMap: any = {};
          console.log('detailSport===resp', resp);
          resp.countrys.forEach((country: any) => {
            if (countryMap.hasOwnProperty(country.strCountry)) {
              countryMap[country.strCountry].push(country);
            } else {
              countryMap[country.strCountry] = [country];
            }
          });
          console.log('countryMap', Object.keys(countryMap).length);
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
