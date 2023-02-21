import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLandingPageComponent } from './about-landing-page.component';

describe('AboutLandingPageComponent', () => {
  let component: AboutLandingPageComponent;
  let fixture: ComponentFixture<AboutLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
