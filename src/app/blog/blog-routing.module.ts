import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPublishComponent } from './blog-publish/blog-publish.component';
import { BlogUnPublishComponent } from './blog-unpublish/blog-unpublish.component';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../shared/guards/admin-auth-guard.service';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      breadcrumb: 'blog'
  },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BlogListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: BlogDetailComponent,
            data: {
              breadcrumb: 'detail'
          },
            canActivate: [AuthGuard],
            children: [
              {
                path: 'action/publish',
                component: BlogPublishComponent,
                data: {
                  breadcrumb: 'publish'
                },
                canActivate: [AuthGuard, AdminAuthGuard],
              },
              {
                path: 'action/unpublish',
                component: BlogUnPublishComponent,
                data: {
                  breadcrumb: 'unpublish'
                },
                canActivate: [AuthGuard, AdminAuthGuard],
              }
            ]
          },
          {
            path: 'action/new',
            component: BlogNewComponent,
            data: {
              breadcrumb: 'new'
          },
            canActivate: [AuthGuard, AdminAuthGuard]
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
export class BlogRoutingModule { }
