import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditbusdetailsComponent } from './admineditbusdetails.component';

describe('AdmineditbusdetailsComponent', () => {
  let component: AdmineditbusdetailsComponent;
  let fixture: ComponentFixture<AdmineditbusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditbusdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditbusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
