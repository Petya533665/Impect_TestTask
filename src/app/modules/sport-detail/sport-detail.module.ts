import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SportDetailRoutingModule } from './sport-detail-routing.module';
import { SportDetailComponent } from './sport-detail.component';
import { SportDetailService } from './sport-detail.service';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [SportDetailComponent],
  imports: [SportDetailRoutingModule, CommonModule, MatCardModule, MatExpansionModule],
  providers: [SportDetailService],
})
export class SportDetailModule {
}
