import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasalaComponent } from './nuevasala.component';

describe('NuevasalaComponent', () => {
  let component: NuevasalaComponent;
  let fixture: ComponentFixture<NuevasalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevasalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
