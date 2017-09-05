import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailBlogComponent } from './main-detail-blog.component';

describe('MainDetailBlogComponent', () => {
  let component: MainDetailBlogComponent;
  let fixture: ComponentFixture<MainDetailBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
