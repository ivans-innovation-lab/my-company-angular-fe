import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatCommonModule, MatDatepickerModule, MATERIAL_SANITY_CHECKS, MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule, MatRadioModule,
  MatSidenavModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {BreadcrumbsModule} from 'ng2-breadcrumbs';
import {falseIfMissing} from 'protractor/built/util';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/blog.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PresentationalComponentsModule} from './presentational-components/presentational-components.module';
import {ProjectsModule} from './projects/projects.module';
import {TOKEN_NAME} from './shared/auth.constant';
import {AuthenticationService} from './shared/authentication.service';
import {EventManager} from './shared/event-manager.service';
import {AdminAuthGuard} from './shared/guards/admin-auth-guard.service';
import {AuthGuard} from './shared/guards/auth-guard.service';
import {UserService} from './shared/user.service';
import {TeamModule} from './team/team.module';


export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem(TOKEN_NAME);
    },
    throwNoTokenError: false,
    whitelistedDomains: ['localhost:8080', 'stage-my-company-monolith.cfapps.io', 'prod-my-company-monolith.cfapps.io']
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BlogModule,
    ProjectsModule,
    TeamModule,
    PresentationalComponentsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [
    EventManager,
    UserService,
    AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
