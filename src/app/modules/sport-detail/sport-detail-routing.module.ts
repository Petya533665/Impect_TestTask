import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportDetailComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: SportDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportDetailRoutingModule {
}
