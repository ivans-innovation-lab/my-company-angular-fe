import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogService } from './shared/blog.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BlogComponent, BlogDetailComponent, BlogListComponent, BlogNewComponent],
  providers: [BlogService]
})
export class BlogModule { }
