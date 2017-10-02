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


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
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
    MainNewProjectComponent
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
    MainNewProjectComponent
    // *** Excluding template components ***
    //MainListComponent,
    //MainDetailComponent,
    //MainNewComponent
  ]
})
export class PresentationalComponentsModule { }
