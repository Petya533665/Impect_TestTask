import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {
}