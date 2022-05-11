import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverheadTankComponent } from './overhead-tank.component';

describe('OverheadTankComponent', () => {
  let component: OverheadTankComponent;
  let fixture: ComponentFixture<OverheadTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverheadTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheadTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
