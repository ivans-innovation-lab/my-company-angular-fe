import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ProjectsModule } from './projects/projects.module';
import { HttpModule } from '@angular/http';
import { EventManager } from './shared/event-manager.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BlogModule,
    ProjectsModule
  ],
  providers: [EventManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
