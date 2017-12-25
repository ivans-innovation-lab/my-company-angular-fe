import {HttpClient, HttpClientModule} from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatCommonModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';

import { ProjectsDetailComponent } from './projects-detail.component';
import { ProjectsService } from '../shared/projects.service';
import { MockBackend } from '@angular/http/testing';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { AuthGuard } from '../../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../../shared/guards/admin-auth-guard.service';
import { PresentationalComponentsModule } from '../../presentational-components/presentational-components.module';


describe('ProjectsDetailComponent', () => {
  let component: ProjectsDetailComponent;
  let fixture: ComponentFixture<ProjectsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDetailComponent],
      providers: [
        ProjectsService,
        MockBackend,
        EventManager,
        HttpClient,
        UserService,
        AuthenticationService,
        AuthGuard,
        AdminAuthGuard,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        PresentationalComponentsModule,
        MatCardModule,
        MatButtonModule,
        MatCommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        MatNativeDateModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
