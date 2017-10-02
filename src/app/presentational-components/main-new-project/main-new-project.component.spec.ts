import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewProjectComponent } from './main-new-project.component';

describe('MainNewProjectComponent', () => {
  let component: MainNewProjectComponent;
  let fixture: ComponentFixture<MainNewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
