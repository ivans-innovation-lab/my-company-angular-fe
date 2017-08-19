import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: ProjectsListComponent,
        children: [
          {
            path: ':id',
            component: ProjectsComponent
          },
          {
            path: 'action/new',
            component: ProjectsNewComponent
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
