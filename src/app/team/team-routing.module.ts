import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../shared/guards/admin-auth-guard.service';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamNewComponent } from './team-new/team-new.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamComponent,
    data: {
      breadcrumb: 'teams'
  },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TeamListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: TeamDetailComponent,
            data: {
              breadcrumb: 'detail'
          },
            canActivate: [AuthGuard]
          },
          {
            path: 'action/new',
            component: TeamNewComponent,
            data: {
              breadcrumb: 'new'
          },
            canActivate: [AuthGuard, AdminAuthGuard],
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
