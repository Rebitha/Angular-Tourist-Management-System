import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristspotsComponent } from './touristspots.component';

describe('TouristspotsComponent', () => {
  let component: TouristspotsComponent;
  let fixture: ComponentFixture<TouristspotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristspotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
