import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from '../presentational-components/presentational-components.module';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      imports: [RouterTestingModule, MaterialModule, BrowserAnimationsModule, PresentationalComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
