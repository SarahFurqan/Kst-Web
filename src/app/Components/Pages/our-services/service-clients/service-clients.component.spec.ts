import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClientsComponent } from './service-clients.component';

describe('ServiceClientsComponent', () => {
  let component: ServiceClientsComponent;
  let fixture: ComponentFixture<ServiceClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
