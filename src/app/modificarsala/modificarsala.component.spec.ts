import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarsalaComponent } from './modificarsala.component';

describe('ModificarsalaComponent', () => {
  let component: ModificarsalaComponent;
  let fixture: ComponentFixture<ModificarsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
