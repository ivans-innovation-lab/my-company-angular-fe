import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewBlogComponent } from './main-new-blog.component';

describe('MainNewBlogComponent', () => {
  let component: MainNewBlogComponent;
  let fixture: ComponentFixture<MainNewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
