import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDetailComponent } from './league-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueDetailRoutingModule {
}
