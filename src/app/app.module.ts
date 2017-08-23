import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ProjectsModule } from './projects/projects.module';
import { HttpModule } from '@angular/http';
import { EventManager } from './shared/event-manager.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BlogModule,
    ProjectsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [EventManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
