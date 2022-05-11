import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWellComponent } from './open-well.component';

describe('OpenWellComponent', () => {
  let component: OpenWellComponent;
  let fixture: ComponentFixture<OpenWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
