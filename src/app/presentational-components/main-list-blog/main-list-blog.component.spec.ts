import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListBlogComponent } from './main-list-blog.component';

describe('MainListBlogComponent', () => {
  let component: MainListBlogComponent;
  let fixture: ComponentFixture<MainListBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
