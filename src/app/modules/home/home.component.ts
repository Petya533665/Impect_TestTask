import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sports$: Observable<any[]>;

  constructor(private homeService: HomeService) {
    this.sports$ = new Subject<any[]>().asObservable();
  }


  public ngOnInit(): void {
    this.sports$ = this.homeService.getAllSports();
    this.sports$.subscribe(arr => console.log(arr));
  }

}
