import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewComponent } from './blog-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../shared/blog.service';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('BlogNewComponent', () => {
  let component: BlogNewComponent;
  let fixture: ComponentFixture<BlogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogNewComponent ],
      providers: [
        BlogService,
        MockBackend,
        EventManager,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [RouterTestingModule, HttpModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
