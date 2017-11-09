import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamNewComponent } from './team-new/team-new.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PresentationalComponentsModule } from '../presentational-components/presentational-components.module';
import { TeamsService } from './shared/team.service';


@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    PresentationalComponentsModule
  ],
  declarations: [TeamComponent, TeamListComponent, TeamNewComponent, TeamDetailComponent],
  providers: [TeamsService]
})
export class TeamModule { }
