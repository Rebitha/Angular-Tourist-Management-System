import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddtouristComponent } from './adminaddtourist.component';

describe('AdminaddtouristComponent', () => {
  let component: AdminaddtouristComponent;
  let fixture: ComponentFixture<AdminaddtouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddtouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddtouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
