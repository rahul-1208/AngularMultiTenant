import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICICIComponent } from './icici.component';

describe('ICICIComponent', () => {
  let component: ICICIComponent;
  let fixture: ComponentFixture<ICICIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICICIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ICICIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
