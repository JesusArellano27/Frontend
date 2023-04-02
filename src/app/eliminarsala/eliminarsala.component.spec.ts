import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarsalaComponent } from './eliminarsala.component';

describe('EliminarsalaComponent', () => {
  let component: EliminarsalaComponent;
  let fixture: ComponentFixture<EliminarsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
