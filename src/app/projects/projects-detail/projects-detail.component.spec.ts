import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailComponent } from './projects-detail.component';
import { ProjectsService } from '../shared/projects.service';
import { HttpModule, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { AuthGuard } from '../../shared/guards/auth-guard.service';
import { AdminAuthGuard } from '../../shared/guards/admin-auth-guard.service';
import { AuthHttp } from 'angular2-jwt';
import { authHttpServiceFactory } from '../../app.module';
import { OrganismsModule } from '../../presentational-components/organisms/organisms.module';
import { MoleculesModule } from '../../presentational-components/molecules/molecules.module';
import { AtomsModule } from '../../presentational-components/atoms/atoms.module';


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
      imports: [RouterTestingModule, HttpModule, MaterialModule, OrganismsModule, MoleculesModule, AtomsModule]
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
