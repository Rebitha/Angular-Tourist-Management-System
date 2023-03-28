import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTouristDetailsComponent } from './admin-tourist-details.component';

describe('AdminTouristDetailsComponent', () => {
  let component: AdminTouristDetailsComponent;
  let fixture: ComponentFixture<AdminTouristDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTouristDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTouristDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
