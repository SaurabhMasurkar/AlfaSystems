import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticTankComponent } from './plastic-tank.component';

describe('PlasticTankComponent', () => {
  let component: PlasticTankComponent;
  let fixture: ComponentFixture<PlasticTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
