import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(/* webpackChunkName: 'home' */ './modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'sport-detail',
    loadChildren: () => import(/* webpackChunkName: 'sport-detail' */ './modules/sport-detail/sport-detail.module').then(m => m.SportDetailModule),
  },
  {
    path: 'league-detail',
    loadChildren: () => import(/* webpackChunkName: 'league-detail' */ './modules/league-detail/league-detail.module').then(m => m.LeagueDetailModule),
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
