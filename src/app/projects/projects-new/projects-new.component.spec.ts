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

import { ProjectsNewComponent } from './projects-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from '../shared/projects.service';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { AuthGuard } from '../../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../../shared/guards/admin-auth-guard.service';
import { PresentationalComponentsModule } from '../../presentational-components/presentational-components.module';


describe('ProjectsNewComponent', () => {
  let component: ProjectsNewComponent;
  let fixture: ComponentFixture<ProjectsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsNewComponent],
      providers: [
        ProjectsService,
        EventManager,
        HttpClient,
        UserService,
        AuthenticationService,
        AuthGuard,
        AdminAuthGuard
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(ProjectsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
