import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { MainDetailProjectComponent } from './main-detail-project/main-detail-project.component';
import { MainDetailBlogComponent } from './main-detail-blog/main-detail-blog.component';
import { MainListBlogComponent } from './main-list-blog/main-list-blog.component';
import { MainListProjectsComponent } from './main-list-projects/main-list-projects.component';
import { MaterialModule } from '@angular/material';
import { MainNewComponent } from './main-new/main-new.component';
import { MainNewBlogComponent } from './main-new-blog/main-new-blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainNewProjectComponent } from './main-new-project/main-new-project.component';
import { BreadcrumbsModule } from 'ng2-breadcrumbs';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MainListTeamComponent } from './main-list-team/main-list-team.component';
import { MainNewTeamComponent } from './main-new-team/main-new-team.component';
import { MainDetailTeamComponent } from './main-detail-team/main-detail-team.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    BreadcrumbsModule,
  ],
  declarations: [
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MainListComponent,
    MainDetailComponent,
    SideMenuItemComponent,
    MainDetailProjectComponent,
    MainDetailBlogComponent,
    MainListBlogComponent,
    MainListProjectsComponent,
    MainNewComponent,
    MainNewBlogComponent,
    MainNewProjectComponent,
    BreadcrumbsComponent,
    MainListTeamComponent,
    MainNewTeamComponent,
    MainDetailTeamComponent
  ],
  exports: [
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SideMenuItemComponent,
    MainDetailProjectComponent,
    MainDetailBlogComponent,
    MainListBlogComponent,
    MainListProjectsComponent,
    MainNewBlogComponent,
    MainNewProjectComponent,
    BreadcrumbsComponent,
    MainListTeamComponent,
    MainNewTeamComponent,
    MainDetailTeamComponent
    // *** Excluding template components ***
    //MainListComponent,
    //MainDetailComponent,
    //MainNewComponent
  ]
})
export class PresentationalComponentsModule { }
