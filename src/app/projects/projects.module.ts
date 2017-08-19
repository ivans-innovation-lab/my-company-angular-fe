import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent, ProjectsNewComponent, ProjectsDetailComponent, ProjectsListComponent]
})
export class ProjectsModule { }
