import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './league.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LeagueService } from './league.service';

@NgModule({
  declarations: [LeagueComponent],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [LeagueService],
})
export class LeagueModule {
}
