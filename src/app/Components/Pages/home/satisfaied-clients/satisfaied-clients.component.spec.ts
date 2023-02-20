import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfaiedClientsComponent } from './satisfaied-clients.component';

describe('SatisfaiedClientsComponent', () => {
  let component: SatisfaiedClientsComponent;
  let fixture: ComponentFixture<SatisfaiedClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfaiedClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfaiedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
