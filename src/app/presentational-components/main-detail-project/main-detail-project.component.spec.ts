import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailProjectComponent } from './main-detail-project.component';

describe('MainDetailProjectComponent', () => {
  let component: MainDetailProjectComponent;
  let fixture: ComponentFixture<MainDetailProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
