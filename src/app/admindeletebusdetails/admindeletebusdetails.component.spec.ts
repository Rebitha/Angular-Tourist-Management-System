import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeletebusdetailsComponent } from './admindeletebusdetails.component';

describe('AdmindeletebusdetailsComponent', () => {
  let component: AdmindeletebusdetailsComponent;
  let fixture: ComponentFixture<AdmindeletebusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeletebusdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindeletebusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
