import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
            canActivate: [AuthGuard]
          },
          {
            path: 'action/new',
            component: BlogNewComponent,
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
