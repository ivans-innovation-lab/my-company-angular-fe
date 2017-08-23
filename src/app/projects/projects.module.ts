import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsService } from './shared/projects.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ProjectsComponent, ProjectsNewComponent, ProjectsDetailComponent, ProjectsListComponent],
  providers: [ProjectsService]
})
export class ProjectsModule { }
