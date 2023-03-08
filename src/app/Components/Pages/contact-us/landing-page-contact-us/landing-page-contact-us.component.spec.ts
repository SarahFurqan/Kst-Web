import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageContactUsComponent } from './landing-page-contact-us.component';

describe('LandingPageContactUsComponent', () => {
  let component: LandingPageContactUsComponent;
  let fixture: ComponentFixture<LandingPageContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
