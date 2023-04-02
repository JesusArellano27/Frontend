import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarsalaComponent } from './liberarsala.component';

describe('LiberarsalaComponent', () => {
  let component: LiberarsalaComponent;
  let fixture: ComponentFixture<LiberarsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberarsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
