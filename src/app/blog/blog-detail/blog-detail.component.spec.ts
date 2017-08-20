import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailComponent } from './blog-detail.component';
import { BlogService } from '../shared/blog.service';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { EventManager } from '../../shared/event-manager.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;
  let fixture: ComponentFixture<BlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailComponent ],
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
      imports: [RouterTestingModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
