import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../shared/guards/admin-auth-guard.service';


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProjectsListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: ProjectsDetailComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'action/new',
            component: ProjectsNewComponent,
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
export class ProjectsRoutingModule { }
