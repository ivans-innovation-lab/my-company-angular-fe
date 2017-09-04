import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogService } from './shared/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from '../presentational-components/presentational-components.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    PresentationalComponentsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [BlogComponent, BlogDetailComponent, BlogListComponent, BlogNewComponent],
  providers: [BlogService]
})
export class BlogModule { }
