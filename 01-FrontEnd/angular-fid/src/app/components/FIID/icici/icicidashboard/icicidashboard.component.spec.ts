import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcicidashboardComponent } from './icicidashboard.component';

describe('IcicidashboardComponent', () => {
  let component: IcicidashboardComponent;
  let fixture: ComponentFixture<IcicidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcicidashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcicidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
