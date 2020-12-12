import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './club.component';
import { ClubService } from './club.service';

@NgModule({
  declarations: [ClubComponent],
  imports: [
    CommonModule,
    ClubRoutingModule,
  ],
  providers: [ClubService]
})
export class ClubModule { }
