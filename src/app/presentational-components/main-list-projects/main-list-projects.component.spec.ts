import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListProjectsComponent } from './main-list-projects.component';

describe('MainListProjectsComponent', () => {
  let component: MainListProjectsComponent;
  let fixture: ComponentFixture<MainListProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
