import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewbusdetailsComponent } from './adminviewbusdetails.component';

describe('AdminviewbusdetailsComponent', () => {
  let component: AdminviewbusdetailsComponent;
  let fixture: ComponentFixture<AdminviewbusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewbusdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewbusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
