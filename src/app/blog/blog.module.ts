import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDatepickerModule, MatInputModule} from '@angular/material';
import { BlogPublishComponent } from './blog-publish/blog-publish.component';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogUnPublishComponent } from './blog-unpublish/blog-unpublish.component';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogService } from './shared/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from '../presentational-components/presentational-components.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    PresentationalComponentsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [BlogComponent, BlogDetailComponent, BlogListComponent, BlogNewComponent, BlogPublishComponent, BlogUnPublishComponent],
  providers: [BlogService]
})
export class BlogModule { }
