import { TestBed, async } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatCommonModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { TOKEN_NAME } from './shared/auth.constant';
import { UserService } from './shared/user.service';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { AdminAuthGuard } from './shared/guards/admin-auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from './presentational-components/presentational-components.module';

function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem(TOKEN_NAME);
    }
  };
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UserService,
        AuthenticationService,
        AuthGuard,
        AdminAuthGuard,
        JwtHelperService,
       {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
       }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ivan\'s innovation lab');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('My Company');
  // }));
});
