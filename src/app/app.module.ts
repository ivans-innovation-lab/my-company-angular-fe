import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ProjectsModule } from './projects/projects.module';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { EventManager } from './shared/event-manager.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { TOKEN_NAME } from './shared/auth.constant';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { AdminAuthGuard } from './shared/guards/admin-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PresentationalComponentsModule } from './presentational-components/presentational-components.module';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BlogModule,
    ProjectsModule,
    PresentationalComponentsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MdNativeDateModule
  ],
  providers: [
    EventManager,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
