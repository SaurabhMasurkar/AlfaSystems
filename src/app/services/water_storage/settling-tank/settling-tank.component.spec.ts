import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlingTankComponent } from './settling-tank.component';

describe('SettlingTankComponent', () => {
  let component: SettlingTankComponent;
  let fixture: ComponentFixture<SettlingTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlingTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlingTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
