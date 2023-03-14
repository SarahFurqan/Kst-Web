import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConsComponent } from './under-cons.component';

describe('UnderConsComponent', () => {
  let component: UnderConsComponent;
  let fixture: ComponentFixture<UnderConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
