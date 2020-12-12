import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(/* webpackChunkName: 'home' */ './modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'sport',
    loadChildren: () => import(/* webpackChunkName: 'sport-detail' */ './modules/sport-detail/sport-detail.module').then(m => m.SportDetailModule),
  },
  {
    path: 'league',
    loadChildren: () => import(/* webpackChunkName: 'league-detail' */ './modules/league/league.module').then(m => m.LeagueModule),
  },
  {
    path: 'club',
    loadChildren: () => import(/* webpackChunkName: 'club-detail' */ './modules/club/club.module').then(m => m.ClubModule),
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
