import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterStorageTankComponent } from './water-storage-tank.component';

describe('WaterStorageTankComponent', () => {
  let component: WaterStorageTankComponent;
  let fixture: ComponentFixture<WaterStorageTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterStorageTankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterStorageTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
