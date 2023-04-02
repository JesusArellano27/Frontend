import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreservacionesComponent } from './verreservaciones.component';

describe('VerreservacionesComponent', () => {
  let component: VerreservacionesComponent;
  let fixture: ComponentFixture<VerreservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerreservacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
