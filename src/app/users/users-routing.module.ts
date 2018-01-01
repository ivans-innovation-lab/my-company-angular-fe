import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../shared/guards/admin-auth-guard.service';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: {
      breadcrumb: 'users'
  },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UsersListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: UsersDetailComponent,
            data: {
              breadcrumb: 'detail'
          },
            canActivate: [AuthGuard]
          },
          {
            path: 'action/new',
            component: UsersNewComponent,
            data: {
              breadcrumb: 'new'
          },
            canActivate: [AuthGuard, AdminAuthGuard],
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
export class UsersRoutingModule { }
