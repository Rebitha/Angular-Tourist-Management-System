import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddbusdetailsComponent } from './adminaddbusdetails.component';

describe('AdminaddbusdetailsComponent', () => {
  let component: AdminaddbusdetailsComponent;
  let fixture: ComponentFixture<AdminaddbusdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddbusdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddbusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
