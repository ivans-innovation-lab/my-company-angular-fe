import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersRoutingModule } from './users-routing.module';
import { PresentationalComponentsModule } from '../presentational-components/presentational-components.module';
import { UsersService } from './shared/users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    PresentationalComponentsModule
  ],
  declarations: [UsersComponent, UsersNewComponent, UsersListComponent, UsersDetailComponent],
  providers: [UsersService]
})
export class UsersModule { }
