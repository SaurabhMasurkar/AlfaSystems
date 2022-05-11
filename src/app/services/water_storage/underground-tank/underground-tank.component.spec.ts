import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergroundTankComponent } from './underground-tank.component';

describe('UndergroundTankComponent', () => {
  let component: UndergroundTankComponent;
  let fixture: ComponentFixture<UndergroundTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndergroundTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergroundTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
