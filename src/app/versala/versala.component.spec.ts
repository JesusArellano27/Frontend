import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersalaComponent } from './versala.component';

describe('VersalaComponent', () => {
  let component: VersalaComponent;
  let fixture: ComponentFixture<VersalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
