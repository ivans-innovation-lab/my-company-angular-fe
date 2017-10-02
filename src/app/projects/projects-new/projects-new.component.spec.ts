import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNewComponent } from './projects-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from '../shared/projects.service';
import { HttpModule, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { AuthGuard } from '../../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../../shared/guards/admin-auth-guard.service';
import { AuthHttp } from 'angular2-jwt';
import { authHttpServiceFactory } from '../../app.module';
import { PresentationalComponentsModule } from '../../presentational-components/presentational-components.module';


describe('ProjectsNewComponent', () => {
  let component: ProjectsNewComponent;
  let fixture: ComponentFixture<ProjectsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsNewComponent],
      providers: [
        ProjectsService,
        MockBackend,
        EventManager,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        UserService,
        AuthenticationService,
        AuthGuard,
        AdminAuthGuard,
        {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
        }
      ],
      imports: [
        RouterTestingModule, HttpModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,
        PresentationalComponentsModule
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
