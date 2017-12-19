import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsActivateComponent} from './projects-activate/projects-activate.component';
import {ProjectsDeactivateComponent} from './projects-deactivate/projects-deactivate.component';
import {ProjectsEditComponent} from "./projects-edit/projects-edit.component";
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
    data: {
      breadcrumb: 'projects'
  },
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
            data: {
              breadcrumb: 'detail'
          },
            canActivate: [AuthGuard],
            children: [
              {
                path: 'action/edit',
                component: ProjectsEditComponent,
                data: {
                  breadcrumb: 'edit'
                },
                canActivate: [AuthGuard, AdminAuthGuard],
              },
              {
                path: 'action/activate',
                component: ProjectsActivateComponent,
                data: {
                  breadcrumb: 'activate'
                },
                canActivate: [AuthGuard, AdminAuthGuard],
              },
              {
                path: 'action/deactivate',
                component: ProjectsDeactivateComponent,
                data: {
                  breadcrumb: 'deactivate'
                },
                canActivate: [AuthGuard, AdminAuthGuard],
              }
            ]
          },
          {
            path: 'action/new',
            component: ProjectsNewComponent,
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
export class ProjectsRoutingModule { }
