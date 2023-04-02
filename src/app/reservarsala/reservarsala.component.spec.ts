import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarsalaComponent } from './reservarsala.component';

describe('ReservarsalaComponent', () => {
  let component: ReservarsalaComponent;
  let fixture: ComponentFixture<ReservarsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
