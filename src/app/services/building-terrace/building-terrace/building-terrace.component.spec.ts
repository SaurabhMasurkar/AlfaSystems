import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTerraceComponent } from './building-terrace.component';

describe('BuildingTerraceComponent', () => {
  let component: BuildingTerraceComponent;
  let fixture: ComponentFixture<BuildingTerraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingTerraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingTerraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
